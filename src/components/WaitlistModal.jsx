import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, Send, Shield } from 'lucide-react';

export function WaitlistModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('dev');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-lg glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.15] bg-[#0B0F1A]/95 shadow-2xl overflow-hidden">
        <div className="bb-wrap" aria-hidden="true">
          <div className="bb-beam bb-beam-1"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white cursor-pointer transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t.waitlistSuccessTitle}</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              {t.waitlistSuccessDesc}
            </p>
            <button
              onClick={handleClose}
              className="btn-primary w-full py-3 text-sm cursor-pointer"
            >
              {t.waitlistClose}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acceso Anticipado v2.4</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              {t.waitlistTitle}
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              {t.waitlistSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Correo Electrónico de Trabajo
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.waitlistEmailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/[0.1] text-white text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t.waitlistRoleLabel}
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/[0.1] text-white text-sm outline-none focus:border-sky-400 transition-all"
                >
                  <option value="dev" className="bg-slate-900 text-white">{t.waitlistRoleDev}</option>
                  <option value="ai" className="bg-slate-900 text-white">{t.waitlistRoleAi}</option>
                  <option value="lead" className="bg-slate-900 text-white">{t.waitlistRoleLead}</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.waitlistSubmitBtn}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Privacidad garantizada. Sin spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
