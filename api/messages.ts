import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

const MESSAGES_KEY = 'guestbook:messages';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'planetsweets';

interface Message {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // POST — submit a new message
  if (req.method === 'POST') {
    try {
      const { nickname, content } = req.body ?? {};

      if (!content || typeof content !== 'string' || content.trim().length === 0) {
        return res.status(400).json({ error: 'Message content is required' });
      }
      if (content.length > 500) {
        return res.status(400).json({ error: 'Message too long (max 500 characters)' });
      }

      const message: Message = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        nickname: (nickname && typeof nickname === 'string' && nickname.trim()) ? nickname.trim().slice(0, 30) : '',
        content: content.trim().slice(0, 500),
        createdAt: new Date().toISOString(),
      };

      // Get existing messages, prepend new one
      const existing = (await kv.get<Message[]>(MESSAGES_KEY)) ?? [];
      existing.unshift(message);

      // Keep only last 500 messages
      const trimmed = existing.slice(0, 500);
      await kv.set(MESSAGES_KEY, trimmed);

      return res.status(201).json({ success: true });
    } catch (err) {
      console.error('POST /api/messages error:', err);
      return res.status(500).json({ error: 'Failed to save message' });
    }
  }

  // GET — admin view (requires password)
  if (req.method === 'GET') {
    try {
      const password = req.query.password as string | undefined;

      if (!password || password !== ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const messages = (await kv.get<Message[]>(MESSAGES_KEY)) ?? [];
      return res.status(200).json({ messages });
    } catch (err) {
      console.error('GET /api/messages error:', err);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
