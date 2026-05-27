import { useState, useEffect } from 'react';
import { X, Send, Lock, ArrowLeft, MessageSquare, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface GuestbookMessage {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

interface GuestbookModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GuestbookModal({ open, onClose }: GuestbookModalProps) {
  const { t, lang } = useLanguage();
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [adminAuthed, setAdminAuthed] = useState(false);
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [adminError, setAdminError] = useState('');

  // Reset states when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setNickname('');
        setContent('');
        setSubmitted(false);
        setError('');
        setIsAdmin(false);
        setPassword('');
        setAdminAuthed(false);
        setMessages([]);
        setAdminError('');
      }, 300);
    }
  }, [open]);

  const handleSubmit = async () => {
    if (!content.trim()) {
      setError(t('guestbook.error_empty'));
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname: nickname.trim(),
          content: content.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }
      setSubmitted(true);
    } catch (e: any) {
      setError(e.message || t('guestbook.error_submit'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleAdminLogin = async () => {
    if (!password.trim()) return;
    setAdminError('');
    setLoading(true);
    try {
      const res = await fetch(`/api/messages?password=${encodeURIComponent(password.trim())}`);
      if (res.status === 401) {
        setAdminError(t('guestbook.wrong_password'));
        return;
      }
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setMessages(data.messages ?? []);
      setAdminAuthed(true);
    } catch (e: any) {
      setAdminError(e.message || t('guestbook.error_fetch'));
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const bne = d.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-AU', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return bne;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[85vh] flex flex-col animate-slide-up shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <button
                onClick={() => {
                  setIsAdmin(false);
                  setAdminAuthed(false);
                  setMessages([]);
                  setPassword('');
                  setAdminError('');
                }}
                className="p-1 -ml-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500" />
              </button>
            ) : null}
            <MessageSquare className="w-5 h-5 text-rose-500" />
            <h2 className="text-lg font-bold text-gray-800">
              {isAdmin ? (adminAuthed ? t('guestbook.admin_title') : t('guestbook.admin_login')) : t('guestbook.title')}
            </h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* ── Guest View ── */}
          {!isAdmin && !submitted && (
            <>
              <p className="text-sm text-gray-500 mb-4">{t('guestbook.subtitle')}</p>

              {/* Nickname (optional) */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-500 mb-1">{t('guestbook.nickname')}</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  placeholder={lang === 'zh' ? '可留空，匿名留言' : 'Optional, stay anonymous'}
                  maxLength={30}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              {/* Message */}
              <div className="mb-1">
                <label className="block text-xs font-medium text-gray-500 mb-1">{t('guestbook.message')} <span className="text-rose-400">*</span></label>
                <textarea
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  placeholder={t('guestbook.placeholder')}
                  maxLength={500}
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 resize-none transition-all"
                />
                <p className="text-right text-xs text-gray-300 mt-1">{content.length}/500</p>
              </div>

              {error && (
                <p className="text-xs text-rose-500 mb-2">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting || !content.trim()}
                className="w-full py-3 bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {submitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {t('guestbook.submit')}
              </button>

              {/* Admin entry */}
              <p className="text-center mt-4">
                <button
                  onClick={() => setIsAdmin(true)}
                  className="text-xs text-gray-300 hover:text-gray-500 transition-colors underline underline-offset-2"
                >
                  {t('guestbook.admin_hint')}
                </button>
              </p>
            </>
          )}

          {/* ── Submitted Confirmation ── */}
          {!isAdmin && submitted && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{t('guestbook.thanks')}</h3>
              <p className="text-sm text-gray-400 mb-4">{t('guestbook.thanks_sub')}</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setNickname('');
                  setContent('');
                }}
                className="text-sm text-rose-500 font-medium hover:text-rose-600 transition-colors"
              >
                {t('guestbook.leave_another')}
              </button>
            </div>
          )}

          {/* ── Admin Login ── */}
          {isAdmin && !adminAuthed && (
            <>
              <p className="text-sm text-gray-500 mb-4">{t('guestbook.admin_desc')}</p>

              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-500 mb-1">{t('guestbook.password')}</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAdminLogin()}
                    placeholder="••••••••"
                    className="w-full px-3 py-2.5 pr-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {adminError && (
                <p className="text-xs text-rose-500 mb-2">{adminError}</p>
              )}

              <button
                onClick={handleAdminLogin}
                disabled={loading || !password.trim()}
                className="w-full py-3 bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                {t('guestbook.view_messages')}
              </button>
            </>
          )}

          {/* ── Admin Messages List ── */}
          {isAdmin && adminAuthed && (
            <>
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">{t('guestbook.no_messages')}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map(msg => (
                    <div key={msg.id} className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">
                          {msg.nickname || t('guestbook.anonymous')}
                        </span>
                        <span className="text-[10px] text-gray-400">{formatDate(msg.createdAt)}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap break-words">{msg.content}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-center mt-4 text-[10px] text-gray-300">
                {t('guestbook.total')}: {messages.length}
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
        @media (min-width: 640px) {
          .animate-slide-up { animation: fade-in 0.2s ease-out; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
