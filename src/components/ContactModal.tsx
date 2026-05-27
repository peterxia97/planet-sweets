import { X, MessageCircle, MapPin, Copy, CheckCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const WECHAT_ID = 'TayloveTay';
const PHONE_NUMBER = '0481 991 196';

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [idCopied, setIdCopied] = useState(false);
  const { t } = useLanguage();

  const copyWechatId = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setIdCopied(true);
      setTimeout(() => setIdCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-fit"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 to-rose-400 px-6 py-5 text-white flex-shrink-0 rounded-t-3xl sm:rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">{t('contact.title')}</h2>
              <p className="text-rose-100 text-sm mt-0.5">{t('contact.subtitle')}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">
          {/* WeChat QR Code */}
          <div className="bg-green-50 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400">{t('contact.qr_title')}</p>
                <p className="text-sm font-semibold text-gray-800">{t('contact.qr_hint')}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 flex justify-center">
              <img
                src="/wechat-qr.jpg"
                alt="微信二维码"
                className="w-48 h-48 object-contain rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-48 h-48 rounded-xl bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                          <circle cx="9" cy="9" r="2"/>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <p class="text-xs mt-2">${t('contact.qr_placeholder')}</p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            {/* Copy WeChat ID */}
            <div className="mt-3 bg-white rounded-xl p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs text-gray-400">{t('contact.search_id')}</p>
                <p className="text-base font-bold text-gray-800 truncate">{WECHAT_ID}</p>
              </div>
              <button
                onClick={copyWechatId}
                className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-1.5 ${
                  idCopied
                    ? 'bg-green-100 text-green-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {idCopied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {t('contact.copied')}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t('contact.copy')}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone - SMS only */}
          <div className="bg-amber-50 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400">{t('contact.phone')}</p>
                <p className="text-sm font-bold text-gray-800">{PHONE_NUMBER}</p>
              </div>
            </div>
            <p className="text-xs text-amber-600 ml-12">{t('contact.phone_sms')}</p>
          </div>

          {/* Address */}
          <div className="bg-blue-50 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400">{t('contact.address')}</p>
                <p className="text-sm font-semibold text-gray-800">46 Lanigan Street, Wandal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
