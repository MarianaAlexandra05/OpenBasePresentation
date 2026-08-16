import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function WindowsStudio() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('voice'); // 'voice' | 'terminal' | 'supervisor'
  const [isAudioActive, setIsAudioActive] = useState(true);
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [approved, setApproved] = useState(false);

  const canvasRef = useRef(null);

  const scenarios = [
    {
      user: "Despachador, agrega el nuevo supervisor de servicios nativo para Windows y valida que livekit-server.exe arranque automáticamente.",
      userEn: "Dispatcher, add the new native service supervisor for Windows and verify livekit-server.exe boots automatically.",
      agent: "Entendido. Creé el descriptor JSON en ~/.openbase/windows-units/livekit-server.json y el proceso detached supervisor. Ejecutando verificación de puertos con netstat en Windows...",
      agentEn: "Understood. Created the JSON descriptor in ~/.openbase/windows-units/livekit-server.json and spawned the detached process supervisor. Validating socket bindings via Win32 netstat...",
      file: "openbase_coder_cli\\services\\windows.py",
      addStats: "+28",
      delStats: "-4",
      actionDesc: "Super Agent modificó windows.py y pasó 42 tests de pytest en Windows",
      actionDescEn: "Super Agent modified windows.py and passed 42 pytest test cases on Windows",
      codeHtml: `<span class="code-line num">38</span><span class="code-line code-comment"># Detach the supervisor so it outlives the CLI invocation</span>
<span class="code-line num">39</span><span class="code-line code-dim">_DETACHED = 0x00000008 | 0x00000200  <span class="code-comment"># DETACHED_PROCESS | CREATE_NEW_PROCESS_GROUP</span></span>
<span class="code-line num">40</span><span class="code-line code-dim"></span>
<span class="code-line num">41</span><span class="code-line code-add"><span class="diff-marker">+</span><span class="code-kw">def</span> <span class="code-fn">start_service_windows</span>(svc: ServiceDefinition) -&gt; <span class="code-type">bool</span>:</span>
<span class="code-line num">42</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-str">"""Spawn Windows background runner with JSON unit descriptor."""</span></span>
<span class="code-line num">43</span><span class="code-line code-add"><span class="diff-marker">+</span>    unit = unit_path(svc)</span>
<span class="code-line num">44</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">if not</span> unit.exists():</span>
<span class="code-line num">45</span><span class="code-line code-add"><span class="diff-marker">+</span>        write_unit_descriptor(svc)</span>
<span class="code-line num">46</span><span class="code-line code-add"><span class="diff-marker">+</span>    proc = subprocess.Popen(</span>
<span class="code-line num">47</span><span class="code-line code-add"><span class="diff-marker">+</span>        [sys.executable, <span class="code-str">"-m"</span>, <span class="code-str">"openbase_coder_cli.services.windows_runner"</span>, str(unit)],</span>
<span class="code-line num">48</span><span class="code-line code-add"><span class="diff-marker">+</span>        creationflags=_DETACHED,</span>
<span class="code-line num">49</span><span class="code-line code-add"><span class="diff-marker">+</span>        close_fds=<span class="code-kw">True</span>,</span>
<span class="code-line num">50</span><span class="code-line code-add"><span class="diff-marker">+</span>    )</span>
<span class="code-line num">51</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">return</span> wait_for_pid(svc)</span>`
    },
    {
      user: "Revisa la descarga del binario de LiveKit Server y asegura compatibilidad con arquitecturas x86_64 y ARM64 en Windows.",
      userEn: "Verify LiveKit Server binary download and ensure compatibility with both x86_64 and ARM64 on Windows.",
      agent: "Alineado. Implementé detección de arquitectura vía platform.machine() y enlace al release oficial de livekit-server-windows-amd64.tar.gz.",
      agentEn: "Aligned. Implemented architecture detection via platform.machine() and bound official livekit-server-windows-amd64.tar.gz release asset.",
      file: "openbase_coder_cli\\services\\livekit_bin.py",
      addStats: "+19",
      delStats: "-2",
      actionDesc: "Super Agent descargó livekit-server.exe (38 MB) y validó suma SHA-256",
      actionDescEn: "Super Agent fetched livekit-server.exe (38 MB) and verified SHA-256 checksum",
      codeHtml: `<span class="code-line num">12</span><span class="code-line code-comment"># Native Windows LiveKit binary asset resolution</span>
<span class="code-line num">13</span><span class="code-line code-add"><span class="diff-marker">+</span><span class="code-kw">def</span> <span class="code-fn">get_windows_binary_url</span>() -&gt; <span class="code-type">str</span>:</span>
<span class="code-line num">14</span><span class="code-line code-add"><span class="diff-marker">+</span>    arch = platform.machine().lower()</span>
<span class="code-line num">15</span><span class="code-line code-add"><span class="diff-marker">+</span>    target = <span class="code-str">"windows_arm64"</span> <span class="code-kw">if</span> <span class="code-str">"arm"</span> <span class="code-kw">in</span> arch <span class="code-kw">else</span> <span class="code-str">"windows_amd64"</span></span>
<span class="code-line num">16</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">return</span> f<span class="code-str">"https://github.com/livekit/livekit/releases/download/v1.8.2/livekit_1.8.2_{target}.tar.gz"</span></span>`
    },
    {
      user: "Configura el bloqueo concurrente de archivos para los agentes usando las APIs nativas de Windows msvcrt.",
      userEn: "Configure concurrent file locking for multi-agent workflows using native Windows msvcrt APIs.",
      agent: "Listo. Reemplacé fcntl.flock por msvcrt.locking con política de 5 reintentos y retroceso exponencial sobre sistemas NTFS.",
      agentEn: "Done. Replaced fcntl.flock with msvcrt.locking featuring 5 adaptive retries and exponential backoff on NTFS.",
      file: "openbase_coder_cli\\utils\\locks.py",
      addStats: "+34",
      delStats: "-12",
      actionDesc: "Pruebas de concurrencia NTFS completadas: 100 agentes concurrentes sin colisión",
      actionDescEn: "NTFS concurrency tests passed: 100 parallel agent workers with zero lock collisions",
      codeHtml: `<span class="code-line num">22</span><span class="code-line code-comment"># Cross-platform concurrency lock for NTFS filesystems</span>
<span class="code-line num">23</span><span class="code-line code-add"><span class="diff-marker">+</span><span class="code-kw">import</span> msvcrt</span>
<span class="code-line num">24</span><span class="code-line code-add"><span class="diff-marker">+</span><span class="code-kw">def</span> <span class="code-fn">windows_flock</span>(fd, flags, retries=5):</span>
<span class="code-line num">25</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">for</span> attempt <span class="code-kw">in</span> range(retries):</span>
<span class="code-line num">26</span><span class="code-line code-add"><span class="diff-marker">+</span>        <span class="code-kw">try</span>:</span>
<span class="code-line num">27</span><span class="code-line code-add"><span class="diff-marker">+</span>            msvcrt.locking(fd.fileno(), msvcrt.LK_NBLCK, 1)</span>
<span class="code-line num">28</span><span class="code-line code-add"><span class="diff-marker">+</span>            <span class="code-kw">return</span> <span class="code-kw">True</span></span>
<span class="code-line num">29</span><span class="code-line code-add"><span class="diff-marker">+</span>        <span class="code-kw">except</span> OSError:</span>
<span class="code-line num">30</span><span class="code-line code-add"><span class="diff-marker">+</span>            time.sleep(0.05 * (2 ** attempt))</span>`
    }
  ];

  const current = scenarios[scenarioIdx];

  // Canvas Waveform Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let phase = 0;
    let animId;

    const renderWave = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const barCount = 42;
      const barWidth = width / barCount - 3;

      for (let i = 0; i < barCount; i++) {
        let barHeight;
        if (isAudioActive) {
          const distFromCenter = Math.abs(i - barCount / 2) / (barCount / 2);
          const bellFactor = Math.cos(distFromCenter * (Math.PI / 2));
          const wave1 = Math.sin(phase * 3 + i * 0.4);
          const wave2 = Math.cos(phase * 2 + i * 0.2);
          barHeight = Math.max(6, (20 + (wave1 * 15 + wave2 * 12)) * bellFactor);
        } else {
          barHeight = 4;
        }

        const x = i * (barWidth + 3);
        const y = (height - barHeight) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        grad.addColorStop(0, '#38bdf8');
        grad.addColorStop(0.5, '#0ea5e9');
        grad.addColorStop(1, '#0078D4');

        ctx.fillStyle = grad;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, barWidth, barHeight, 3);
        } else {
          ctx.rect(x, y, barWidth, barHeight);
        }
        ctx.fill();
      }

      phase += 0.04;
      animId = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => cancelAnimationFrame(animId);
  }, [isAudioActive]);

  const handleNextScenario = () => {
    setScenarioIdx((prev) => (prev + 1) % scenarios.length);
    setApproved(false);
  };

  return (
    <section className="demo-section" id="demo">
      <div className="section-header">
        <span className="section-tag" id="demo-section-tag">{t.demoSectionTag}</span>
        <h2 className="section-title" id="demo-section-title">{t.demoSectionTitle}</h2>
        <p className="section-desc" id="demo-section-desc">
          {t.demoSectionDesc}
        </p>
      </div>

      {/* Windows 11 Styled App Mockup */}
      <div className="windows-app-window" id="windows-app-window">
        {/* Title Bar */}
        <div className="win-title-bar">
          <div className="win-tabs-bar" role="tablist">
            <button 
              onClick={() => setActiveTab('voice')}
              className={`win-tab ${activeTab === 'voice' ? 'active' : ''}`}
              role="tab" 
              aria-selected={activeTab === 'voice'}
            >
              <span className="tab-indicator voice-pulse"></span>
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
              <span id="tab-title-voice">{t.tabTitleVoice}</span>
            </button>

            <button 
              onClick={() => setActiveTab('terminal')}
              className={`win-tab ${activeTab === 'terminal' ? 'active' : ''}`}
              role="tab" 
              aria-selected={activeTab === 'terminal'}
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              <span id="tab-title-terminal">{t.tabTitleTerminal}</span>
            </button>

            <button 
              onClick={() => setActiveTab('supervisor')}
              className={`win-tab ${activeTab === 'supervisor' ? 'active' : ''}`}
              role="tab" 
              aria-selected={activeTab === 'supervisor'}
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              <span id="tab-title-supervisor">{t.tabTitleSupervisor}</span>
            </button>
          </div>

          <div className="win-controls">
            <span className="win-btn win-minimize"></span>
            <span className="win-btn win-maximize"></span>
            <span className="win-btn win-close"></span>
          </div>
        </div>

        {/* Window Body */}
        <div className="win-window-body">
          
          {/* TAB 1: Voice Studio */}
          {activeTab === 'voice' && (
            <div className="tab-panel active">
              <div className="voice-studio-grid">
                
                {/* Left: Voice Surface */}
                <div className="call-surface-panel">
                  <div className="call-status-header">
                    <div className="call-indicator-group">
                      <span className="live-dot"></span>
                      <span className="call-state-text" id="call-state-text">{t.callStateText}</span>
                    </div>
                    <span className="call-timer" id="call-timer-counter">04:18</span>
                  </div>

                  {/* Audio Visualizer Canvas */}
                  <div className="visualizer-wrapper">
                    <canvas ref={canvasRef} id="voice-canvas" width="480" height="70" className="visualizer-canvas"></canvas>
                    <div className="visualizer-overlay">
                      <span className="active-speaker-pill">
                        <span className="speaker-role" id="speaker-role-label">{t.speakerRoleLabel}</span>
                        <span className="speaker-name" id="speaker-name-display">
                          {isAudioActive ? 'Ingeniero (Tú)' : 'Silenciado (Mute)'}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Transcript Stream */}
                  <div className="transcript-stream" id="transcript-stream">
                    <div className="chat-bubble user-msg">
                      <div className="bubble-header">
                        <span className="sender-name">Tú (Voz)</span>
                        <span className="bubble-time">17:24:02</span>
                      </div>
                      <p className="bubble-text" id="transcript-user-text">
                        {lang === 'es' ? current.user : current.userEn}
                      </p>
                    </div>

                    <div className="chat-bubble agent-msg">
                      <div className="bubble-header">
                        <span className="sender-name">Openbase Agent (LiveKit)</span>
                        <span className="bubble-time">17:24:04</span>
                      </div>
                      <p className="bubble-text" id="transcript-agent-text">
                        {lang === 'es' ? current.agent : current.agentEn}
                      </p>
                    </div>
                  </div>

                  {/* Simulation Controls Bar */}
                  <div className="simulation-controls-bar">
                    <button 
                      onClick={handleNextScenario}
                      className="sim-action-btn primary-sim-btn" 
                      id="sim-trigger-task-btn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span id="sim-btn-text">{t.simBtnText}</span>
                    </button>
                    
                    <button 
                      onClick={() => setIsAudioActive(!isAudioActive)}
                      className={`sim-action-btn ${isAudioActive ? 'active' : ''}`} 
                      id="sim-toggle-audio-btn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                      <span id="sim-audio-text">{t.simAudioText}</span>
                    </button>

                    <button 
                      onClick={() => setApproved(true)}
                      className="sim-action-btn danger-sim-btn" 
                      id="sim-approve-diff-btn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span id="sim-approve-text">{approved ? "¡Cambios Aprobados!" : t.simApproveText}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Live Code Diff & Windows Execution Stream */}
                <div className="code-stream-panel">
                  <div className="code-panel-header">
                    <div className="file-tab">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      <span>{current.file}</span>
                    </div>
                    <span className="diff-stats">
                      <span className="diff-add">{current.addStats}</span>
                      <span className="diff-del">{current.delStats}</span>
                    </span>
                  </div>

                  <div className="diff-code-viewer" id="diff-code-viewer">
                    <pre><code dangerouslySetInnerHTML={{ __html: current.codeHtml }}></code></pre>
                  </div>

                  <div className="agent-activity-footer">
                    <div className="activity-status">
                      <span className="pulse-mini"></span>
                      <span id="agent-action-desc">
                        {approved ? "Cambios confirmados en el sistema de archivos NTFS" : (lang === 'es' ? current.actionDesc : current.actionDescEn)}
                      </span>
                    </div>
                    <span className="test-badge pass">PASS 42/42</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PowerShell 7 Terminal */}
          {activeTab === 'terminal' && (
            <div className="tab-panel active">
              <div className="interactive-terminal">
                <div className="terminal-body" id="powershell-terminal-output">
                  <div className="term-row"><span className="term-muted">PowerShell 7.4.2 — Native Windows 11 x64 Subsystem</span></div>
                  <div className="term-row"><span className="term-muted">Copyright (c) Microsoft Corporation. All rights reserved.</span></div>
                  <div className="term-row">&nbsp;</div>
                  <div className="term-row"><span className="term-accent">PS C:\Users\dev\workspace\openbase&gt;</span> <span className="term-cmd">openbase-coder --version</span></div>
                  <div className="term-row"><span className="term-green">openbase-coder, version 2.4.0 (win32-x86_64-native)</span></div>
                  <div className="term-row">&nbsp;</div>
                  <div className="term-row"><span className="term-accent">PS C:\Users\dev\workspace\openbase&gt;</span> <span className="term-cmd">openbase-coder services status</span></div>
                  <div className="term-row"><span className="term-cyan">┌──────────────────────┬─────────┬─────────┬──────────────┬───────────────┐</span></div>
                  <div className="term-row"><span className="term-cyan">│ Service Name         │ Status  │ PID     │ Memory (RSS) │ Port / Socket │</span></div>
                  <div className="term-row"><span className="term-cyan">├──────────────────────┼─────────┼─────────┼──────────────┼───────────────┤</span></div>
                  <div className="term-row">│ livekit-server.exe   │ <span className="term-green">RUNNING</span> │ 14820   │ 18.4 MB      │ 127.0.0.1:7880│</div>
                  <div className="term-row">│ django-cli (API)     │ <span className="term-green">RUNNING</span> │ 19204   │ 22.1 MB      │ 127.0.0.1:7999│</div>
                  <div className="term-row">│ livekit-agent        │ <span className="term-green">RUNNING</span> │ 8912    │ 31.8 MB      │ WebSocket-Sync│</div>
                  <div className="term-row">│ code-sync-watcher    │ <span className="term-green">RUNNING</span> │ 23041   │ 11.2 MB      │ Win32 ReadDir │</div>
                  <div className="term-row"><span className="term-cyan">└──────────────────────┴─────────┴─────────┴──────────────┴───────────────┘</span></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Win32 Supervisor Explorer */}
          {activeTab === 'supervisor' && (
            <div className="tab-panel active">
              <div className="interactive-terminal">
                <div className="terminal-body">
                  <div className="term-row"><span className="term-muted"># Win32 JSON Service Units Inspector (~/.openbase/windows-units)</span></div>
                  <div className="term-row"><span className="term-accent">PS C:\Users\dev&gt;</span> <span className="term-cmd">Get-Content ~/.openbase/windows-units/livekit-server.json</span></div>
                  <div className="term-row">{`{`}</div>
                  <div className="term-row">&nbsp;&nbsp;<span className="term-cyan">"unit_name"</span>: <span className="term-green">"livekit-server"</span>,</div>
                  <div className="term-row">&nbsp;&nbsp;<span className="term-cyan">"exec_start"</span>: <span className="term-green">"C:\\Users\\dev\\.openbase\\bin\\livekit-server.exe --dev"</span>,</div>
                  <div className="term-row">&nbsp;&nbsp;<span className="term-cyan">"creation_flags"</span>: <span className="term-yellow">["DETACHED_PROCESS", "CREATE_NEW_PROCESS_GROUP"]</span>,</div>
                  <div className="term-row">&nbsp;&nbsp;<span className="term-cyan">"restart_policy"</span>: <span className="term-green">"always"</span>,</div>
                  <div className="term-row">&nbsp;&nbsp;<span className="term-cyan">"port_probe"</span>: 7999</div>
                  <div className="term-row">{`}`}</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
