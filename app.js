/**
 * Openbase Coder — Windows Native Release Landing JavaScript
 * Dynamic interactive features, audio waveform synthesizer, terminal runner,
 * system doctor diagnostics, installation switcher & bilingual engine.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTabs();
  initAudioVisualizer();
  initVoiceSimulator();
  initDoctorSimulator();
  initInstallSwitcher();
  initClipboard();
  initChangelogModal();
});

/* ==========================================================================
   Bilingual Translation Engine (Spanish / English)
   ========================================================================== */
const translations = {
  es: {
    bannerTag: "NUEVO LANZAMIENTO",
    bannerText: "<strong>Openbase Coder v2.4 para Windows</strong> — Soporte 100% nativo Win32, LiveKit integrado y cero necesidad de Docker.",
    bannerCta: "Probar en Windows →",
    navOverview: "Resumen",
    navDemo: "Demo en Vivo",
    navComparison: "Arquitectura",
    navFeatures: "Capacidades",
    navDiagnostics: "Diagnóstico",
    navInstall: "Instalación",
    navBtnText: "Descargar para Windows",
    heroBadgeText: "Arquitectura Nativa para Windows x64 & ARM64",
    heroTitle: "El IDE de Voz para Ingeniería Real.<br><span class='hero-gradient-text'>Ahora 100% Nativo en Windows.</span>",
    heroDescription: "Antes requería Docker y máquinas virtuales pesadas. Hoy Openbase Coder se ejecuta directamente en el kernel de Windows: supervisor de servicios Win32 desacoplado, motor de voz LiveKit en tiempo real, integración fluida con PowerShell y cero latencia.",
    heroBtnDownload: "Instalar en Windows",
    heroBtnDemo: "Ver Demostración en Vivo",
    specEngine: "Motor Nativo:",
    specMemory: "Consumo RAM:",
    specVoice: "Latencia de Voz:",
    specDocker: "Docker Requerido:",
    demoSectionTag: "EXPERIENCIA INTERACTIVA",
    demoSectionTitle: "Openbase Coder en Acción sobre Windows",
    demoSectionDesc: "Observa cómo el motor de voz se comunica con el despachador de agentes y ejecuta cambios reales en tu sistema de archivos de Windows.",
    tabTitleVoice: "Llamada de Voz & Despachador",
    tabTitleTerminal: "PowerShell 7 Windows Terminal",
    tabTitleSupervisor: "Supervisor Win32 (~/.openbase/run)",
    callStateText: "CANAL DE VOZ ACTIVO (LiveKit Server Win32)",
    speakerRoleLabel: "Hablando:",
    simBtnText: "Simular Nueva Orden de Voz",
    simAudioText: "Audio Demo",
    simApproveText: "Aprobar Cambios",
    agentActionDesc: "Super Agent modificó windows.py y pasó 42 tests de pytest en Windows",
    compTag: "EL SALTO GENERACIONAL",
    compTitle: "¿Por qué la Versión Nativa de Windows Cambia Todo?",
    compDesc: "Compara la antigua aproximación basada en contenedores Docker contra la nueva arquitectura Win32 optimizada.",
    metricRamTitle: "Uso de Memoria RAM",
    metricRamSub: "De 4,000 MB (Docker) a solo 45 MB en reposo.",
    metricLatTitle: "Latencia de Respuesta de Voz",
    metricLatSub: "Comunicación instantánea sin puentes de red virtuales.",
    metricVmTitle: "Tiempo de Arranque de VM",
    metricVmSub: "Inicio instantáneo desde cualquier ventana de PowerShell.",
    metricCompatTitle: "Compatibilidad con Windows Tools",
    metricCompatSub: "VS Code, Windows Terminal, Tailscale y Git nativo.",
    featTag: "PILARES TÉCNICOS",
    featTitle: "Construido Específicamente para el Ecosistema Windows",
    featDesc: "No es una simple adaptación: cada módulo del runtime fue rediseñado para aprovechar las APIs del kernel de Windows.",
    feat1Title: "Supervisor de Servicios Win32 Desacoplado",
    feat1Desc: "Reemplazo nativo de launchd y systemd. Utiliza descriptores JSON en ~/.openbase/windows-units y procesos detached con flags CREATE_NEW_PROCESS_GROUP para garantizar disponibilidad 24/7.",
    feat2Title: "Servidor de Voz LiveKit Nativo (.exe)",
    feat2Desc: "Descarga y gestiona automáticamente el binario oficial de livekit-server.exe para Windows x86_64 y ARM64. Provee WebRTC de grado de producción y salas de audio bidireccionales en tu propio host.",
    feat3Title: "Integración Nativa con PowerShell 7 & Terminal",
    feat3Desc: "Comandos de consola optimizados para PowerShell y CMD. Normalización de separadores de ruta (\\ vs /) sin escapes accidentales y soporte para terminaciones ejecutables .exe, .cmd y .bat.",
    feat4Title: "Sonda de Procesos y Sockets Win32 (Netstat)",
    feat4Desc: "Detección de puertos y estado de procesos directamente con la API de Windows OpenProcess y netstat -ano, eliminando cualquier dependencia de herramientas UNIX como lsof o ps.",
    feat5Title: "Sincronización y Control Remoto con Móviles",
    feat5Desc: "Empareja tu iPhone o teléfono Android con tu PC Windows a través de Tailscale o red local. Controla llamadas de voz, aprueba permisos de ejecución y revisa diffs mientras estás lejos de tu escritorio.",
    feat6Title: "Bloqueo de Archivos Concurrente (msvcrt.locking)",
    feat6Desc: "Manejo seguro de concurrencia para múltiples agentes trabajando en paralelo. Implementación especializada con reintentos y _windows_flock para evitar bloqueos en el sistema de archivos NTFS.",
    diagTag: "HERRAMIENTA DE DIAGNÓSTICO",
    diagTitle: "Prueba el Diagnóstico de Windows en Vivo",
    diagDesc: "Ejecuta la herramienta integrada openbase-coder doctor y verifica cómo inspecciona cada componente en un entorno Windows nativo.",
    diagSubheading: "Simulador de openbase-coder doctor",
    diagSubdesc: "Comprueba la salud del puerto 7999, LiveKit server nativo, backend de audio y directorios de unidades de Windows.",
    runDoctorBtnText: "Ejecutar Diagnóstico",
    installTag: "INSTALACIÓN SENCILLA",
    installTitle: "Empieza a Usar Openbase Coder en Windows",
    installDesc: "Elige el método que mejor se adapte a tu flujo de trabajo: instalador de un clic o mediante herramientas de línea de comandos.",
    step1Title: "Instala la CLI nativa con uv",
    step1Desc: "Ejecuta en PowerShell como tu usuario normal (sin privilegios de administrador requeridos):",
    step2Title: "Ejecuta el Asistente de Configuración Guiada",
    step2Desc: "Configura tu proveedor de voz (Cartesia/ElevenLabs), backend de código y autenticación:",
    step3Title: "Inicia los Servicios en Segundo Plano",
    step3Desc: "El supervisor Win32 levantará LiveKit Server y la API automáticamente:",
    footerTagline: "El entorno de ingeniería por voz y agentes autónomos de código abierto.",
    footerStatusText: "Servicios Windows Nativo: Operacionales"
  },
  en: {
    bannerTag: "NEW RELEASE",
    bannerText: "<strong>Openbase Coder v2.4 for Windows</strong> — 100% Native Win32 support, built-in LiveKit, and zero Docker requirement.",
    bannerCta: "Try on Windows →",
    navOverview: "Overview",
    navDemo: "Live Demo",
    navComparison: "Architecture",
    navFeatures: "Capabilities",
    navDiagnostics: "Diagnostics",
    navInstall: "Installation",
    navBtnText: "Download for Windows",
    heroBadgeText: "Native Architecture for Windows x64 & ARM64",
    heroTitle: "The Voice IDE for Real Engineering.<br><span class='hero-gradient-text'>Now 100% Native on Windows.</span>",
    heroDescription: "Previously required Docker and heavy virtual machines. Today Openbase Coder runs directly on the Windows kernel: detached Win32 service supervisor, real-time LiveKit voice engine, seamless PowerShell integration, and zero latency.",
    heroBtnDownload: "Install on Windows",
    heroBtnDemo: "Watch Live Demo",
    specEngine: "Native Engine:",
    specMemory: "RAM Usage:",
    specVoice: "Voice Latency:",
    specDocker: "Docker Required:",
    demoSectionTag: "INTERACTIVE EXPERIENCE",
    demoSectionTitle: "Openbase Coder in Action on Windows",
    demoSectionDesc: "Watch how the voice engine connects with the agent dispatcher and performs live changes directly on your Windows filesystem.",
    tabTitleVoice: "Voice Call & Dispatcher",
    tabTitleTerminal: "PowerShell 7 Windows Terminal",
    tabTitleSupervisor: "Win32 Supervisor (~/.openbase/run)",
    callStateText: "ACTIVE VOICE CHANNEL (LiveKit Server Win32)",
    speakerRoleLabel: "Speaking:",
    simBtnText: "Simulate New Voice Task",
    simAudioText: "Audio Demo",
    simApproveText: "Approve Changes",
    agentActionDesc: "Super Agent modified windows.py and passed 42 pytest test cases on Windows",
    compTag: "THE GENERATIONAL LEAP",
    compTitle: "Why the Windows Native Version Changes Everything",
    compDesc: "Compare the previous containerized approach with the new streamlined native Win32 architecture.",
    metricRamTitle: "RAM Memory Usage",
    metricRamSub: "From 4,000 MB (Docker) down to just 45 MB idle.",
    metricLatTitle: "Voice Response Latency",
    metricLatSub: "Instant communication with no virtualized network bridges.",
    metricVmTitle: "VM Boot Up Time",
    metricVmSub: "Instant zero-second launch from any PowerShell prompt.",
    metricCompatTitle: "Windows Tools Compatibility",
    metricCompatSub: "VS Code, Windows Terminal, Tailscale, and native Git.",
    featTag: "TECHNICAL PILLARS",
    featTitle: "Engineered Specifically for the Windows Ecosystem",
    featDesc: "Not a naive port: each runtime module was rewritten to harness the native Windows kernel APIs.",
    feat1Title: "Detached Win32 Service Supervisor",
    feat1Desc: "Native replacement for launchd and systemd. Uses JSON descriptors in ~/.openbase/windows-units and detached processes with CREATE_NEW_PROCESS_GROUP flags for 24/7 uptime.",
    feat2Title: "Native LiveKit Voice Server Binary (.exe)",
    feat2Desc: "Automatically downloads and manages the official livekit-server.exe for Windows x86_64 and ARM64. Delivers production-grade WebRTC and bidirectional audio rooms.",
    feat3Title: "PowerShell 7 & Windows Terminal Integration",
    feat3Desc: "Optimized CLI commands for PowerShell and CMD. Clean path separator handling (\\ vs /) without escape corruption and native support for .exe, .cmd, and .bat suffixes.",
    feat4Title: "Kernel-Level Process & Socket Probe (Netstat)",
    feat4Desc: "Port detection and process state verification using the Windows OpenProcess API and netstat -ano, completely eliminating UNIX dependencies like lsof or ps.",
    feat5Title: "Mobile Sync & Remote Control (iOS / Android)",
    feat5Desc: "Pair your iPhone or Android device with your Windows workstation via Tailscale or local network. Control voice calls, approve execution permissions, and review diffs on the go.",
    feat6Title: "Concurrent File Locking (msvcrt.locking)",
    feat6Desc: "Safe multi-agent concurrency. Custom implementation with adaptive retries and _windows_flock to prevent deadlocks on NTFS filesystems.",
    diagTag: "DIAGNOSTIC TOOL",
    diagTitle: "Test Live Windows Diagnostics",
    diagDesc: "Run the built-in openbase-coder doctor tool and watch how it verifies every runtime component on a native Windows environment.",
    diagSubheading: "openbase-coder doctor simulator",
    diagSubdesc: "Checks port 7999 availability, native LiveKit server binary, audio backend, and Windows unit directories.",
    runDoctorBtnText: "Run Diagnostics",
    installTag: "STREAMLINED INSTALLATION",
    installTitle: "Get Started with Openbase Coder on Windows",
    installDesc: "Choose the method that best fits your developer setup: one-click installer or command line tooling.",
    step1Title: "Install the native CLI using uv",
    step1Desc: "Run in PowerShell under your regular user account (no admin elevation required):",
    step2Title: "Run Guided Setup Wizard",
    step2Desc: "Configure your voice provider (Cartesia/ElevenLabs), coding backend, and authentication:",
    step3Title: "Start Background Services",
    step3Desc: "The Win32 supervisor will automatically launch LiveKit Server and the local API:",
    footerTagline: "The open-source voice-driven engineering & autonomous agent environment.",
    footerStatusText: "Windows Native Services: Operational"
  }
};

let currentLanguage = 'es';

function initLanguage() {
  const langBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('current-lang');

  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    langLabel.textContent = currentLanguage.toUpperCase();
    applyLanguage(currentLanguage);
  });
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  const mapping = {
    'banner-tag': t.bannerTag,
    'banner-text': t.bannerText,
    'banner-cta': t.bannerCta,
    'nav-link-overview': t.navOverview,
    'nav-link-demo': t.navDemo,
    'nav-link-comparison': t.navComparison,
    'nav-link-features': t.navFeatures,
    'nav-link-diagnostics': t.navDiagnostics,
    'nav-link-install': t.navInstall,
    'nav-btn-text': t.navBtnText,
    'hero-badge-text': t.heroBadgeText,
    'hero-title': t.heroTitle,
    'hero-description': t.heroDescription,
    'hero-btn-download': t.heroBtnDownload,
    'hero-btn-demo': t.heroBtnDemo,
    'spec-engine-lbl': t.specEngine,
    'spec-memory-lbl': t.specMemory,
    'spec-voice-lbl': t.specVoice,
    'spec-docker-lbl': t.specDocker,
    'demo-section-tag': t.demoSectionTag,
    'demo-section-title': t.demoSectionTitle,
    'demo-section-desc': t.demoSectionDesc,
    'tab-title-voice': t.tabTitleVoice,
    'tab-title-terminal': t.tabTitleTerminal,
    'tab-title-supervisor': t.tabTitleSupervisor,
    'call-state-text': t.callStateText,
    'speaker-role-label': t.speakerRoleLabel,
    'sim-btn-text': t.simBtnText,
    'sim-audio-text': t.simAudioText,
    'sim-approve-text': t.simApproveText,
    'agent-action-desc': t.agentActionDesc,
    'comp-tag': t.compTag,
    'comp-title': t.compTitle,
    'comp-desc': t.compDesc,
    'metric-ram-title': t.metricRamTitle,
    'metric-ram-sub': t.metricRamSub,
    'metric-lat-title': t.metricLatTitle,
    'metric-lat-sub': t.metricLatSub,
    'metric-vm-title': t.metricVmTitle,
    'metric-vm-sub': t.metricVmSub,
    'metric-compat-title': t.metricCompatTitle,
    'metric-compat-sub': t.metricCompatSub,
    'feat-tag': t.featTag,
    'feat-title': t.featTitle,
    'feat-desc': t.featDesc,
    'feat-1-title': t.feat1Title,
    'feat-1-desc': t.feat1Desc,
    'feat-2-title': t.feat2Title,
    'feat-2-desc': t.feat2Desc,
    'feat-3-title': t.feat3Title,
    'feat-3-desc': t.feat3Desc,
    'feat-4-title': t.feat4Title,
    'feat-4-desc': t.feat4Desc,
    'feat-5-title': t.feat5Title,
    'feat-5-desc': t.feat5Desc,
    'feat-6-title': t.feat6Title,
    'feat-6-desc': t.feat6Desc,
    'diag-tag': t.diagTag,
    'diag-title': t.diagTitle,
    'diag-desc': t.diagDesc,
    'diag-subheading': t.diagSubheading,
    'diag-subdesc': t.diagSubdesc,
    'run-doctor-btn-text': t.runDoctorBtnText,
    'install-tag': t.installTag,
    'install-title': t.installTitle,
    'install-desc': t.installDesc,
    'step1-title': t.step1Title,
    'step1-desc': t.step1Desc,
    'step2-title': t.step2Title,
    'step2-desc': t.step2Desc,
    'step3-title': t.step3Title,
    'step3-desc': t.step3Desc,
    'footer-tagline': t.footerTagline,
    'footer-status-text': t.footerStatusText
  };

  for (const [id, value] of Object.entries(mapping)) {
    const el = document.getElementById(id);
    if (el) {
      if (value.includes('<') && value.includes('>')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  }
}

/* ==========================================================================
   Tab Navigation in Windows App Mockup
   ========================================================================== */
function initTabs() {
  const tabs = [
    { btn: document.getElementById('tab-voice-btn'), content: document.getElementById('tab-voice-content') },
    { btn: document.getElementById('tab-terminal-btn'), content: document.getElementById('tab-terminal-content') },
    { btn: document.getElementById('tab-supervisor-btn'), content: document.getElementById('tab-supervisor-content') }
  ];

  tabs.forEach(({ btn, content }) => {
    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      tabs.forEach(t => {
        if (t.btn) {
          t.btn.classList.remove('active');
          t.btn.setAttribute('aria-selected', 'false');
        }
        if (t.content) {
          t.content.classList.remove('active');
          t.content.hidden = true;
        }
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      content.classList.add('active');
      content.hidden = false;
    });
  });
}

/* ==========================================================================
   Audio Spectrum Visualizer on Canvas
   ========================================================================== */
let isAudioActive = true;
let animFrameId = null;

function initAudioVisualizer() {
  const canvas = document.getElementById('voice-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let phase = 0;

  function renderWave() {
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const barCount = 42;
    const barWidth = width / barCount - 3;

    for (let i = 0; i < barCount; i++) {
      let barHeight;
      if (isAudioActive) {
        // Natural frequency curve combined with sine oscillations
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

      // Color gradient: Windows Blue into Cyan
      const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
      grad.addColorStop(0, '#38bdf8');
      grad.addColorStop(0.5, '#0ea5e9');
      grad.addColorStop(1, '#0078D4');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 3);
      ctx.fill();
    }

    phase += 0.04;
    animFrameId = requestAnimationFrame(renderWave);
  }

  renderWave();

  // Toggle Audio Demo button
  const toggleBtn = document.getElementById('sim-toggle-audio-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isAudioActive = !isAudioActive;
      const speakerDisplay = document.getElementById('speaker-name-display');
      if (speakerDisplay) {
        speakerDisplay.textContent = isAudioActive ? 'Ingeniero (Tú)' : 'Silenciado (Mute)';
      }
      toggleBtn.classList.toggle('active', isAudioActive);
    });
  }
}

/* ==========================================================================
   Voice IDE Simulation Scenarios
   ========================================================================== */
const simulationScenarios = [
  {
    user: "Despachador, agrega el nuevo supervisor de servicios nativo para Windows y valida que livekit-server.exe arranque automáticamente.",
    agent: "Entendido. Creé el descriptor JSON en ~/.openbase/windows-units/livekit-server.json y el proceso detached supervisor. Ejecutando verificación de puertos con netstat en Windows...",
    file: "openbase_coder_cli\\services\\windows.py",
    code: `<span class="code-line num">38</span><span class="code-line code-comment"># Detach the supervisor so it outlives the CLI invocation</span>
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
<span class="code-line num">51</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">return</span> wait_for_pid(svc)</span>`,
    status: "Super Agent modificó windows.py y pasó 42 tests de pytest en Windows"
  },
  {
    user: "Optimiza la detección de procesos vivos en Windows usando Win32 OpenProcess en lugar de señales POSIX.",
    agent: "Modificando process_probe.py para llamar directamente a OpenProcess con PROCESS_QUERY_LIMITED_INFORMATION y GetExitCodeProcess.",
    file: "openbase_coder_cli\\process_probe.py",
    code: `<span class="code-line num">14</span><span class="code-line code-comment"># Native Win32 Kernel Process State Verification</span>
<span class="code-line num">15</span><span class="code-line code-add"><span class="diff-marker">+</span><span class="code-kw">def</span> <span class="code-fn">pid_alive_windows</span>(pid: <span class="code-type">int</span>) -&gt; <span class="code-type">bool</span>:</span>
<span class="code-line num">16</span><span class="code-line code-add"><span class="diff-marker">+</span>    handle = ctypes.windll.kernel32.OpenProcess(0x1000, <span class="code-kw">False</span>, pid)</span>
<span class="code-line num">17</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">if not</span> handle:</span>
<span class="code-line num">18</span><span class="code-line code-add"><span class="diff-marker">+</span>        <span class="code-kw">return</span> <span class="code-kw">False</span></span>
<span class="code-line num">19</span><span class="code-line code-add"><span class="diff-marker">+</span>    exit_code = ctypes.c_ulong()</span>
<span class="code-line num">20</span><span class="code-line code-add"><span class="diff-marker">+</span>    ctypes.windll.kernel32.GetExitCodeProcess(handle, ctypes.byref(exit_code))</span>
<span class="code-line num">21</span><span class="code-line code-add"><span class="diff-marker">+</span>    ctypes.windll.kernel32.CloseHandle(handle)</span>
<span class="code-line num">22</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">return</span> exit_code.value == 259  <span class="code-comment"># STILL_ACTIVE</span></span>`,
    status: "Process Probe actualizado con ctypes Win32 nativo (0 overhead)"
  },
  {
    user: "Revisa que los locks concurrentes en NTFS funcionen usando msvcrt.locking.",
    agent: "Implementé _windows_flock() usando msvcrt.LK_NBLCK con reintentos exponenciales suaves para evitar colisiones de agentes concurrentes.",
    file: "openbase_coder_cli\\file_lock.py",
    code: `<span class="code-line num">54</span><span class="code-line code-comment"># Win32 non-blocking file lock delegation</span>
<span class="code-line num">55</span><span class="code-line code-add"><span class="diff-marker">+</span><span class="code-kw">def</span> <span class="code-fn">_windows_flock</span>(descriptor: <span class="code-type">int</span>, operation: <span class="code-type">int</span>) -&gt; <span class="code-type">None</span>:</span>
<span class="code-line num">56</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">import</span> msvcrt</span>
<span class="code-line num">57</span><span class="code-line code-add"><span class="diff-marker">+</span>    msvcrt.locking(descriptor, msvcrt.LK_NBLCK, 1)</span>
<span class="code-line num">58</span><span class="code-line code-dim"></span>
<span class="code-line num">59</span><span class="code-line code-dim"><span class="code-kw">def</span> <span class="code-fn">acquire_lock</span>(path: Path) -&gt; FileLock:</span>
<span class="code-line num">60</span><span class="code-line code-add"><span class="diff-marker">+</span>    <span class="code-kw">return</span> WindowsFileLock(path) <span class="code-kw">if</span> is_windows() <span class="code-kw">else</span> PosixFileLock(path)</span>`,
    status: "File Lock concurrente verificado para NTFS con msvcrt"
  }
];

let scenarioIndex = 0;

function initVoiceSimulator() {
  const triggerBtn = document.getElementById('sim-trigger-task-btn');
  const approveBtn = document.getElementById('sim-approve-diff-btn');
  const transcriptStream = document.getElementById('transcript-stream');
  const diffViewer = document.getElementById('diff-code-viewer');
  const agentActionDesc = document.getElementById('agent-action-desc');

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      scenarioIndex = (scenarioIndex + 1) % simulationScenarios.length;
      const data = simulationScenarios[scenarioIndex];

      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      // Add user message
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user-msg';
      userBubble.innerHTML = `
        <div class="bubble-header">
          <span class="sender-name">${currentLanguage === 'es' ? 'Ingeniero (Tú)' : 'Engineer (You)'}</span>
          <span class="bubble-time">${timeStr}</span>
        </div>
        <p class="bubble-text">"${data.user}"</p>
      `;
      transcriptStream.appendChild(userBubble);
      transcriptStream.scrollTop = transcriptStream.scrollHeight;

      // Simulate agent response after 600ms
      setTimeout(() => {
        const agentBubble = document.createElement('div');
        agentBubble.className = 'chat-bubble agent-msg';
        agentBubble.innerHTML = `
          <div class="bubble-header">
            <span class="sender-name">Openbase Super Agent #${scenarioIndex + 1}</span>
            <span class="bubble-time">${timeStr}</span>
          </div>
          <p class="bubble-text">"${data.agent}"</p>
        `;
        transcriptStream.appendChild(agentBubble);
        transcriptStream.scrollTop = transcriptStream.scrollHeight;

        // Update code diff
        if (diffViewer) {
          diffViewer.innerHTML = `<pre><code>${data.code}</code></pre>`;
        }

        if (agentActionDesc) {
          agentActionDesc.innerHTML = `<code>${data.file}</code> — ${data.status}`;
        }
      }, 600);
    });
  }

  if (approveBtn) {
    approveBtn.addEventListener('click', () => {
      const origText = approveBtn.innerHTML;
      approveBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${currentLanguage === 'es' ? '¡Cambios Aprobados y Aplicados!' : 'Changes Approved & Committed!'}</span>
      `;
      approveBtn.style.background = '#10b981';
      approveBtn.style.color = '#ffffff';

      setTimeout(() => {
        approveBtn.innerHTML = origText;
        approveBtn.style.background = '';
        approveBtn.style.color = '';
      }, 2500);
    });
  }
}

/* ==========================================================================
   System Doctor Diagnostics Simulator
   ========================================================================== */
function initDoctorSimulator() {
  const runBtn = document.getElementById('run-doctor-btn');
  const placeholder = document.getElementById('doctor-placeholder');
  const resultsList = document.getElementById('doctor-results-list');

  if (!runBtn || !resultsList) return;

  const checks = [
    { name: "Sistema Operativo Host", detail: "Microsoft Windows 11 Pro (build 22631.3447) x64", status: "OK" },
    { name: "Entorno Python", detail: "Python 3.12.3 en Scripts\\openbase-coder.exe (uv managed)", status: "OK" },
    { name: "Supervisor Win32", detail: "Directorio ~/.openbase/windows-units inicializado", status: "OK" },
    { name: "Binario LiveKit Server", detail: "livekit-server.exe v1.8.0 verificado en el PATH", status: "OK" },
    { name: "Detección de Puertos (Netstat)", detail: "Puerto 7999 (Django API) y 7880 (LiveKit) libres", status: "OK" },
    { name: "Submapa de Audio WASAPI", detail: "Dispositivo de captura y altavoces estéreo listos (latencia 12ms)", status: "OK" },
    { name: "Bloqueo NTFS (msvcrt)", detail: "Driver de concurrencia de archivos validado", status: "OK" }
  ];

  runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    runBtn.style.opacity = '0.6';
    if (placeholder) placeholder.hidden = true;
    resultsList.hidden = false;
    resultsList.innerHTML = '';

    checks.forEach((chk, index) => {
      setTimeout(() => {
        const row = document.createElement('div');
        row.className = 'doctor-row';
        row.innerHTML = `
          <div class="diag-item-left">
            <span class="diag-icon-ok">✓</span>
            <strong>${chk.name}</strong>
          </div>
          <div class="diag-item-right">${chk.detail}</div>
        `;
        resultsList.appendChild(row);

        if (index === checks.length - 1) {
          runBtn.disabled = false;
          runBtn.style.opacity = '1';
        }
      }, index * 200);
    });
  });
}

/* ==========================================================================
   Installation Switcher (UV, PowerShell, Winget, Binary)
   ========================================================================== */
function initInstallSwitcher() {
  const tabs = document.querySelectorAll('.install-tab-btn');
  const content = document.getElementById('install-method-content');

  const methods = {
    uv: [
      {
        num: 1,
        title_es: "Instala la CLI nativa con uv",
        title_en: "Install native CLI with uv",
        desc_es: "Ejecuta en PowerShell como tu usuario normal (sin privilegios de administrador requeridos):",
        desc_en: "Run in PowerShell under your regular user account (no admin elevation required):",
        code: "uv tool install openbase-coder"
      },
      {
        num: 2,
        title_es: "Ejecuta el Asistente de Configuración Guiada",
        title_en: "Run Guided Setup Wizard",
        desc_es: "Configura tu proveedor de voz (Cartesia/ElevenLabs), backend de código y autenticación:",
        desc_en: "Configure your voice provider (Cartesia/ElevenLabs), coding backend, and authentication:",
        code: "openbase-coder setup"
      },
      {
        num: 3,
        title_es: "Inicia los Servicios en Segundo Plano",
        title_en: "Start Background Services",
        desc_es: "El supervisor Win32 levantará LiveKit Server y la API automáticamente:",
        desc_en: "The Win32 supervisor will automatically launch LiveKit Server and the local API:",
        code: "openbase-coder services start"
      }
    ],
    powershell: [
      {
        num: 1,
        title_es: "Instalación en una sola línea de PowerShell",
        title_en: "PowerShell One-Liner Quick Install",
        desc_es: "Descarga, compila el entorno virtual y agrega openbase-coder al PATH de Windows:",
        desc_en: "Downloads, compiles virtualenv, and registers openbase-coder to Windows PATH:",
        code: "irm https://openbase.cloud/install.ps1 | iex"
      },
      {
        num: 2,
        title_es: "Verificar instalación",
        title_en: "Verify installation",
        desc_es: "Ejecuta la diagnosis rápida del sistema:",
        desc_en: "Run the system diagnostic check:",
        code: "openbase-coder doctor"
      }
    ],
    winget: [
      {
        num: 1,
        title_es: "Instalar con Windows Package Manager",
        title_en: "Install with Windows Package Manager",
        desc_es: "Instalación oficial y gestión de actualizaciones desde el catálogo de Microsoft:",
        desc_en: "Official installation and update management from Microsoft's catalog:",
        code: "winget install Openbase.Coder"
      },
      {
        num: 2,
        title_es: "Inicializar entorno",
        title_en: "Initialize environment",
        desc_es: "Lanza la configuración inicial interactiva:",
        desc_en: "Launch the interactive initial setup:",
        code: "openbase-coder setup"
      }
    ],
    binary: [
      {
        num: 1,
        title_es: "Descargar Instalador de Windows (.exe / MSIX)",
        title_en: "Download Windows Installer (.exe / MSIX)",
        desc_es: "Instalador con asistente gráfico para Windows 10 y Windows 11 (x64 / ARM64):",
        desc_en: "Graphical installer for Windows 10 and Windows 11 (x64 / ARM64):",
        code: "https://openbase.cloud/downloads/openbase-coder-setup-win64.exe"
      },
      {
        num: 2,
        title_es: "Ejecutar el instalador",
        title_en: "Run Installer",
        desc_es: "Sigue las instrucciones del instalador y reinicia tu terminal.",
        desc_en: "Follow the installer steps and restart your terminal.",
        code: ".\\openbase-coder-setup-win64.exe /SILENT"
      }
    ]
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const method = tab.getAttribute('data-method');
      const steps = methods[method] || methods.uv;

      renderSteps(steps);
    });
  });

  function renderSteps(steps) {
    if (!content) return;
    const isEs = currentLanguage === 'es';

    content.innerHTML = steps.map(s => `
      <div class="install-step-box">
        <div class="step-num">${s.num}</div>
        <div class="step-details">
          <h4>${isEs ? s.title_es : s.title_en}</h4>
          <p>${isEs ? s.desc_es : s.desc_en}</p>
          <div class="code-copy-row">
            <code>${s.code}</code>
            <button class="copy-btn mini" data-clipboard="${s.code}" aria-label="Copiar comando">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    initClipboard();
  }
}

/* ==========================================================================
   Clipboard Copying
   ========================================================================== */
function initClipboard() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.onclick = async () => {
      const textToCopy = btn.getAttribute('data-clipboard') || btn.previousElementSibling?.textContent || '';
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy.trim());
        btn.classList.add('copied');

        const tooltip = btn.querySelector('.copy-tooltip');
        if (tooltip) {
          const orig = tooltip.textContent;
          tooltip.textContent = currentLanguage === 'es' ? '¡Copiado!' : 'Copied!';
          setTimeout(() => {
            tooltip.textContent = orig;
            btn.classList.remove('copied');
          }, 2000);
        } else {
          setTimeout(() => {
            btn.classList.remove('copied');
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy', err);
      }
    };
  });
}

/* ==========================================================================
   Changelog Modal
   ========================================================================== */
function initChangelogModal() {
  const openBtn = document.getElementById('open-changelog-modal-btn');
  const modal = document.getElementById('changelog-modal');
  const closeBtn = document.getElementById('close-changelog-modal-btn');
  const ackBtn = document.getElementById('modal-ack-btn');

  if (!modal) return;

  function openModal() {
    modal.hidden = false;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (ackBtn) ackBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}
