import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mic, Check, Laptop, Sparkles, RefreshCw } from 'lucide-react';

export function DeviceStage() {
  const { lang, t } = useLanguage();
  const [stage, setStage] = useState('idle'); // 'idle' | 'recording' | 'approval' | 'running' | 'passed'
  const [transcriptIndex, setTranscriptIndex] = useState(0);

  const prompts = [
    {
      es: "“Corrige la condición de carrera en la sesión y ejecuta los tests unitarios en Windows.”",
      en: "“Fix the race condition in the session handler and run unit tests on Windows.”",
      cmd: "pytest tests/test_auth.py -v",
      solutionEs: "¡Listo! Corregí la condición de carrera en el token refresh utilizando msvcrt.locking nativo en Windows. Los 24 tests pasaron.",
      solutionEn: "Done! I resolved the token refresh race condition using native Win32 msvcrt.locking. All 24 tests passed."
    },
    {
      es: "“Levanta el servidor LiveKit en segundo plano y verifica que el puerto 7999 esté libre.”",
      en: "“Start the LiveKit server in background and ensure port 7999 is bound.”",
      cmd: "openbase run --detached livekit-server",
      solutionEs: "Supervisor Win32: livekit-server.exe iniciado con PID 14820 en puerto 7999. WebRTC listo.",
      solutionEn: "Win32 Supervisor: livekit-server.exe started with PID 14820 on port 7999. WebRTC ready."
    },
    {
      es: "“Genera un worker asíncrono para streaming de audio PCM de baja latencia.”",
      en: "“Generate an async worker for low-latency PCM audio streaming.”",
      cmd: "uvicorn openbase.api:app --reload",
      solutionEs: "Worker de audio compilado con soporte DirectSound/WASAPI. Latencia sub-20ms.",
      solutionEn: "Audio worker compiled with DirectSound/WASAPI support. Sub-20ms latency."
    }
  ];

  const currentPrompt = prompts[transcriptIndex];

  const handleNextPrompt = () => {
    setTranscriptIndex((prev) => (prev + 1) % prompts.length);
    setStage('recording');
    setTimeout(() => {
      setStage('approval');
    }, 1200);
  };

  const handleApprove = () => {
    setStage('running');
    setTimeout(() => {
      setStage('passed');
    }, 1800);
  };

  const handleReset = () => {
    setStage('idle');
  };

  return (
    <section className="device-stage-section" id="mobile-sync">
      <div className="section-header">
        <span className="section-tag" id="mobile-tag">{t.deviceTitle || "CONTROL REMOTO & MÓVIL"}</span>
        <h2 className="section-title">Control Total desde el Móvil o tu Escritorio</h2>
        <p className="section-desc">
          Habla por voz desde cualquier dispositivo emparejado por Tailscale. El agente ejecuta las instrucciones directamente en tu Windows.
        </p>
      </div>

      {/* Contenedor Unificado y Centrado */}
      <div className="device-stage-container">
        
        {/* Columna Izquierda: Teléfono iPhone 16 Pro */}
        <div className="flex justify-center">
          <div className="iphone-frame">
            <div className="iphone-screen">
              {/* iOS Status Bar */}
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 px-2 pt-1 mb-2">
                <span>9:41</span>
                <div className="dynamic-island">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-[10px]">5G</span>
                  <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center">
                    <div className="w-full h-full bg-emerald-400 rounded-xs"></div>
                  </div>
                </div>
              </div>

              {/* In-App iOS Header */}
              <div className="flex items-center justify-between py-1.5 border-b border-white/[0.08] mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white">
                    OB
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">OPENBASE</div>
                    <div className="text-[11px] font-semibold text-white -mt-0.5">Voice Studio</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live</span>
                </div>
              </div>

              {/* Windows Host Connected status */}
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-2.5">
                <div className="p-1 rounded-lg bg-sky-500/10 text-sky-400">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold text-white truncate">{t.deviceConnected}</div>
                  <div className="text-[9px] font-mono text-slate-400 truncate">{t.deviceRepo}</div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></div>
              </div>

              {/* Voice Blob & Listening State */}
              <div className="text-center py-1">
                <div className="voice-blob-wrap">
                  <div className="voice-blob-glow"></div>
                  <div className="voice-blob-core"></div>
                </div>
                <h3 className="text-xs font-semibold text-white">{t.deviceListening}</h3>
                <p className="text-[10px] text-slate-400 mt-0.5 px-2 line-clamp-1">
                  {t.deviceListeningDesc}
                </p>
              </div>

              {/* Live Audio Equalizer Wave */}
              <div className="flex items-center justify-center gap-1 my-2 h-5">
                {[6, 12, 18, 10, 22, 14, 8, 16, 10, 14, 12, 6].map((height, i) => (
                  <div
                    key={i}
                    className="equalizer-bar"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: `${height}px`
                    }}
                  />
                ))}
              </div>

              {/* Live Transcript Card */}
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/[0.08] mb-2.5 shadow-inner">
                <div className="flex items-center justify-between text-[9px] font-semibold text-slate-400 mb-1">
                  <div className="flex items-center gap-1 text-sky-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                    <span>{t.deviceTranscriptTitle}</span>
                  </div>
                  <span>08:42</span>
                </div>
                <p className="text-[11px] text-slate-200 font-medium italic">
                  {lang === 'es' ? currentPrompt.es : currentPrompt.en}
                </p>
              </div>

              {/* Assistant Response Message */}
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 mb-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div className="text-[11px]">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-white">{t.deviceAssistantName}</span>
                    <span className="text-[9px] text-slate-400">{t.deviceAssistantTime}</span>
                  </div>
                  <p className="text-slate-300 leading-snug text-[10.5px]">
                    {lang === 'es' ? currentPrompt.solutionEs : currentPrompt.solutionEn}
                  </p>
                </div>
              </div>

              {/* Interactive Approval / Running / Tests Passed Sheet */}
              <div className="mt-auto pt-1.5 border-t border-white/[0.08]">
                {stage === 'running' ? (
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <div className="flex items-center gap-2 mb-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                      <div>
                        <div className="text-[9px] font-semibold text-amber-400 uppercase tracking-wider">{t.deviceApproved}</div>
                        <div className="text-[11px] font-bold text-white">{t.deviceRunningMsg}</div>
                      </div>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-1.5">
                      <div className="bg-gradient-to-r from-amber-400 to-sky-400 h-full w-3/4 animate-pulse"></div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                      <code>{currentPrompt.cmd}</code>
                      <span>PowerShell 7</span>
                    </div>
                  </div>
                ) : stage === 'passed' ? (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">{t.deviceTestsPassed}</div>
                          <div className="text-[11px] font-semibold text-white">{t.deviceTestsPassedSuite}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-300">{t.deviceTestsCount}</span>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mt-1">
                      <code>{currentPrompt.cmd}</code>
                      <span className="text-emerald-400 font-semibold">{t.deviceTestsMeta}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/[0.1]">
                    <div className="mb-1.5">
                      <span className="text-[9px] font-bold text-amber-400 tracking-wider uppercase block">
                        {t.deviceApprovalNeeded}
                      </span>
                      <strong className="text-[11px] font-semibold text-white block">
                        {t.deviceApprovalTask}
                      </strong>
                    </div>
                    <code className="block text-[10px] font-mono bg-black/50 px-2 py-0.5 rounded text-sky-300 border border-white/[0.06] mb-2">
                      {currentPrompt.cmd}
                    </code>
                    <div className="flex gap-2">
                      <button
                        onClick={handleReset}
                        className="flex-1 py-1 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-slate-300 text-[10px] font-semibold cursor-pointer transition-colors"
                      >
                        {t.deviceApprovalBtnReview}
                      </button>
                      <button
                        onClick={handleApprove}
                        className="flex-1 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[10px] font-bold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-1 cursor-pointer transition-all"
                      >
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>{t.deviceApprovalBtnApprove}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* iOS Home Indicator */}
              <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Panel de Control del Simulador */}
        <div className="space-y-4 text-left">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
              <Mic className="w-5 h-5 text-sky-400" />
              <span>Simulador de Órdenes de Voz</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Prueba cómo reacciona el despachador autónomo ante diferentes comandos de ingeniería en tiempo real:
            </p>
          </div>

          <div className="space-y-2.5">
            {prompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTranscriptIndex(idx);
                  setStage('approval');
                }}
                className={`w-full text-left p-3.5 rounded-xl text-xs transition-all cursor-pointer border ${
                  transcriptIndex === idx
                    ? 'bg-blue-600/20 border-sky-400 text-white shadow-md'
                    : 'bg-white/[0.03] border-white/[0.06] text-slate-300 hover:bg-white/[0.06]'
                }`}
              >
                <div className="font-semibold text-sky-300 mb-1 flex items-center justify-between">
                  <span>Escenario 0{idx + 1}</span>
                  {transcriptIndex === idx && <span className="text-[10px] bg-sky-500/20 px-2 py-0.5 rounded text-sky-300">ACTIVO</span>}
                </div>
                <div className="italic text-slate-200">
                  {lang === 'es' ? p.es : p.en}
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleNextPrompt}
              className="primary-btn flex-1 text-xs py-2.5"
            >
              <Mic className="w-3.5 h-3.5" />
              <span>{t.simNewVoiceBtn || "Simular Nueva Orden"}</span>
            </button>
            <button
              onClick={handleApprove}
              className="secondary-btn flex-1 text-xs py-2.5"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.deviceApprovalBtnApprove || "Aprobar Cambios"}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
