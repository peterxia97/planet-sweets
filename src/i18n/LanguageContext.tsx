import { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react';
import type { Lang } from './translations';
import {
  getCatName, getCatDesc, getCakeName, getCakeDesc, getTag, getUI,
} from './translations';

interface LanguageCtx {
  lang: Lang;
  toggleLang: () => void;
  tCatName: (id: number) => string;
  tCatDesc: (id: number) => string;
  tCakeName: (id: number) => string;
  tCakeDesc: (id: number) => string;
  tTag: (zhTag: string) => string;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageCtx>(null!);

function loadLang(): Lang {
  try {
    const stored = localStorage.getItem('planet-sweets-lang');
    if (stored === 'en' || stored === 'zh') return stored;
  } catch { /* ignore */ }
  return 'zh';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(loadLang);

  useEffect(() => {
    try {
      localStorage.setItem('planet-sweets-lang', lang);
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    } catch { /* ignore */ }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  }, []);

  const tCatName = useCallback((id: number) => getCatName(id, lang), [lang]);
  const tCatDesc = useCallback((id: number) => getCatDesc(id, lang), [lang]);
  const tCakeName = useCallback((id: number) => getCakeName(id, lang), [lang]);
  const tCakeDesc = useCallback((id: number) => getCakeDesc(id, lang), [lang]);
  const tTag = useCallback((zhTag: string) => getTag(zhTag, lang), [lang]);
  const t = useCallback((key: string) => getUI(key, lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tCatName, tCatDesc, tCakeName, tCakeDesc, tTag, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
