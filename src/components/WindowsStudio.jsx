import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockSupervisorUnits, terminalCommands } from '../data/mockData';
import { Mic, Terminal, Activity, Radio, Play, Check, Volume2, Shield, PlayCircle, RefreshCw, Cpu, Database } from 'lucide-react';

export function WindowsStudio() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('voice'); // 'voice' | 'terminal' | 'supervisor'
  
  // Voice Tab State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceVolume, setVoiceVolume] = useState(65);
  const [voiceStatus, setVoiceStatus] = useState('ready');

  // Terminal Tab State
  const [terminalHistory, setTerminalHistory] = useState([
    "PowerShell 7.4.2 (Windows x86_64)",
    "Loading Openbase Coder Win32 Kernel Supervisor...",
    "Type 'help' or click any prompt pill below to run a command.\n"
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef(null);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed === 'clear' || trimmed === 'cls') {
      setTerminalHistory([]);
      return;
    }

    const output = terminalCommands[trimmed] || [
      `Command '${trimmed}' executed successfully in 42ms (Exit code 0).`
    ];

    setTerminalHistory((prev) => [
      ...prev,
      `PS C:\\Users\\alexa\\openbase> ${trimmed}`,
      ...output,
      ""
    ]);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    runCommand(terminalInput);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const simulateSpeech = () => {
    setIsSpeaking(true);
    setVoiceStatus('processing');
    
    // Play synthetic beep audio via Web Audio API if available
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      // Audio context might be restricted before user interaction
    }

    setTimeout(() => {
      setIsSpeaking(false);
      setVoiceStatus('success');
      setTimeout(() => setVoiceStatus('ready'), 3000);
    }, 2400);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Activity className="w-3.5 h-3.5 text-sky-400" />
          <span>{t.studioTag}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.studioTitle}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
          {t.studioDesc}
        </p>
      </div>

      {/* Windows 11 App Window Frame */}
      <div className="win-window border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
        {/* Title Bar with Tabs */}
        <div className="win-titlebar flex-wrap gap-2">
          {/* Windows Window Controls */}
          <div className="flex items-center gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('voice')}
              className={`win-tab-btn ${activeTab === 'voice' ? 'active' : ''}`}
            >
              <Mic className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.tabVoice}</span>
            </button>

            <button
              onClick={() => setActiveTab('terminal')}
              className={`win-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.tabTerminal}</span>
            </button>

            <button
              onClick={() => setActiveTab('supervisor')}
              className={`win-tab-btn ${activeTab === 'supervisor' ? 'active' : ''}`}
            >
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.tabSupervisor}</span>
            </button>
          </div>

          {/* Host indicator */}
          <div className="ml-auto hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>WIN32 SUPERVISOR : ONLINE</span>
          </div>
        </div>

        {/* Tab Content 1: Voice Call & LiveKit WebRTC Dispatcher */}
        {activeTab === 'voice' && (
          <div className="p-6 sm:p-8 bg-[#0B0F1A]/90">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Column: Live Call Stage */}
              <div className="flex-1 w-full space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                      <Radio className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                        {t.voiceActiveBadge}
                      </div>
                      <div className="text-sm font-bold text-white">
                        WebRTC Room: #openbase-windows-live
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>WASAPI 16ms</span>
                  </div>
                </div>

                {/* Animated Waveform Synthesizer */}
                <div className="h-32 bg-slate-950/80 rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>DirectSound Audio Buffer (PCM 24-bit / 48kHz)</span>
                    <span className="text-sky-400">{isSpeaking ? "TRANSMITTING..." : "LISTENING..."}</span>
                  </div>

                  {/* Waveform Bars */}
                  <div className="flex items-center justify-center gap-1.5 h-16">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-150 ${
                          isSpeaking 
                            ? 'bg-gradient-to-t from-blue-500 to-sky-400 h-12' 
                            : 'bg-slate-700/60 h-2'
                        }`}
                        style={{
                          height: isSpeaking ? `${Math.max(6, Math.sin(i * 0.4) * 45 + 15)}px` : '4px'
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono">
                    <span>Rx: 142.8 kbps</span>
                    <span>Tx: 128.0 kbps (Opus)</span>
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={simulateSpeech}
                    disabled={isSpeaking}
                    className="btn-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>{isSpeaking ? "Procesando audio..." : t.simNewVoiceBtn}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Event Stream */}
              <div className="w-full lg:w-80 bg-slate-900/60 rounded-xl border border-white/[0.08] p-4 space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Eventos del Despachador</span>
                  <span className="text-[10px] text-emerald-400">WIN32 OK</span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                    <div className="text-slate-400 text-[10px]">17:24:02 · Audio Packet</div>
                    <div className="text-slate-200 mt-0.5">WASAPI stream capture initialized</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="text-sky-400 text-[10px]">17:24:04 · NLP Dispatcher</div>
                    <div className="text-slate-200 mt-0.5">Route intent: <span className="text-sky-300">"pytest test_auth.py"</span></div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-emerald-400 text-[10px]">17:24:06 · Agent Completion</div>
                    <div className="text-emerald-200 mt-0.5">24 test cases verified in 1.4s</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content 2: PowerShell 7 Terminal */}
        {activeTab === 'terminal' && (
          <div className="p-6 bg-[#07090E]">
            {/* Quick Command Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs text-slate-400 font-mono self-center mr-1">Probar comando:</span>
              {Object.keys(terminalCommands).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-sky-300 font-mono text-xs cursor-pointer transition-all"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Screen */}
            <div className="bg-black/90 rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300 h-80 overflow-y-auto shadow-inner">
              {terminalHistory.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap leading-relaxed">
                  {line.startsWith("PS ") ? (
                    <span className="text-sky-400 font-semibold">{line}</span>
                  ) : line.includes("[PASS]") || line.includes("PASSED") ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : line.includes("Openbase Coder") ? (
                    <span className="text-blue-400 font-bold">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleTerminalSubmit} className="mt-3 flex gap-2">
              <div className="flex-1 flex items-center bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-200">
                <span className="text-sky-400 mr-2">PS C:\Users\alexa\openbase&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Escribe un comando (ej: openbase status) y presiona Enter..."
                  className="flex-1 bg-transparent outline-none text-white font-mono placeholder:text-slate-600"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                Ejecutar
              </button>
            </form>
          </div>
        )}

        {/* Tab Content 3: Win32 Supervisor Explorer */}
        {activeTab === 'supervisor' && (
          <div className="p-6 bg-[#0B0F1A]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-white">Unidades Activas de Windows (~/.openbase/windows-units)</h4>
                <p className="text-xs text-slate-400">Procesos desacoplados con banderas CREATE_NEW_PROCESS_GROUP para disponibilidad continua.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <Shield className="w-3.5 h-3.5" />
                <span>4 Servicios Operacionales</span>
              </div>
            </div>

            {/* Units Table */}
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 text-slate-400 border-b border-white/[0.08]">
                  <tr>
                    <th className="p-3">UNIDAD</th>
                    <th className="p-3">PUERTO</th>
                    <th className="p-3">PID</th>
                    <th className="p-3">ESTADO</th>
                    <th className="p-3">MEMORIA RAM</th>
                    <th className="p-3">UPTIME</th>
                    <th className="p-3">TIPO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] bg-slate-950/60">
                  {mockSupervisorUnits.map((u, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold text-sky-300">{u.name}</td>
                      <td className="p-3 text-slate-300">{u.port}</td>
                      <td className="p-3 text-slate-400">{u.pid}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {u.status}
                        </span>
                      </td>
                      <td className="p-3 text-emerald-300 font-semibold">{u.ram}</td>
                      <td className="p-3 text-slate-400">{u.uptime}</td>
                      <td className="p-3 text-slate-400">{u.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
