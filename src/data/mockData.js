export const voiceScenarios = [
  {
    id: 1,
    speaker: "Developer",
    command: "“Corrige la condición de carrera en el session refresh y corre la suite de pytest”",
    commandEn: "“Fix the race condition in the session refresh and run the pytest suite”",
    agentName: "Codex Agent",
    fileTarget: "openbase/auth/session.py",
    approvalCmd: "pytest tests/test_auth.py -v",
    runningStatus: "Ejecutando 24 tests unitarios en Windows...",
    runningStatusEn: "Running 24 unit tests on Windows...",
    resultMsg: "Todos los 24 tests pasaron en 1.4s. Bloqueo seguro aplicado con msvcrt.locking.",
    resultMsgEn: "All 24 tests passed in 1.4s. Safe concurrency locked with msvcrt.locking.",
    diff: {
      file: "auth/session.py",
      additions: 14,
      deletions: 3,
      lines: [
        { type: "context", text: "def refresh_token(user_id: str):" },
        { type: "context", text: "    lock_path = get_lock_file(user_id)" },
        { type: "remove", text: "-   if os.path.exists(lock_path): return cached_token" },
        { type: "add", text: "+   with open_windows_lock(lock_path, msvcrt.LK_NBLCK):" },
        { type: "add", text: "+       token = issue_new_jwt(user_id)" },
        { type: "add", text: "+       write_token_atomic(token)" },
        { type: "context", text: "    return token" }
      ]
    }
  },
  {
    id: 2,
    speaker: "Developer",
    command: "“Inicia el servidor LiveKit en segundo plano y verifica que el puerto 7999 esté libre”",
    commandEn: "“Start the LiveKit server in the background and verify port 7999 is free”",
    agentName: "Supervisor Agent",
    fileTarget: "~/.openbase/windows-units/livekit.json",
    approvalCmd: "openbase run --detached livekit-server",
    runningStatus: "Arrancando servicio Win32 desacoplado (PID: 14820)...",
    runningStatusEn: "Starting detached Win32 service (PID: 14820)...",
    resultMsg: "LiveKit server v1.8.2 inicializado en localhost:7999. WebRTC listo para audio.",
    resultMsgEn: "LiveKit server v1.8.2 initialized on localhost:7999. WebRTC audio ready.",
    diff: {
      file: "windows-units/livekit.json",
      additions: 8,
      deletions: 0,
      lines: [
        { type: "context", text: "{" },
        { type: "add", text: '+  "unit_name": "livekit-server",' },
        { type: "add", text: '+  "command": "livekit-server.exe --dev",' },
        { type: "add", text: '+  "port": 7999,' },
        { type: "add", text: '+  "creation_flags": "CREATE_NEW_PROCESS_GROUP"' },
        { type: "context", text: "}" }
      ]
    }
  },
  {
    id: 3,
    speaker: "Developer",
    command: "“Genera un endpoint FastAPI para el WebSocket de audio bidireccional”",
    commandEn: "“Generate a FastAPI endpoint for bidirectional audio streaming WebSockets”",
    agentName: "Claude Code",
    fileTarget: "openbase/api/voice_ws.py",
    approvalCmd: "uvicorn openbase.api:app --reload --port 8000",
    runningStatus: "Creando handler asíncrono con backpressure y buffer PCM...",
    runningStatusEn: "Creating async handler with backpressure and PCM buffer...",
    resultMsg: "Endpoint /ws/voice creado. Soporta streaming de 24kHz Opus/PCM.",
    resultMsgEn: "Endpoint /ws/voice created. Supports 24kHz Opus/PCM streaming.",
    diff: {
      file: "api/voice_ws.py",
      additions: 19,
      deletions: 2,
      lines: [
        { type: "context", text: "@app.websocket('/ws/voice')" },
        { type: "add", text: "+async def voice_channel(websocket: WebSocket):" },
        { type: "add", text: "+    await websocket.accept()" },
        { type: "add", text: "+    async for chunk in websocket.iter_bytes():" },
        { type: "add", text: "+        await process_audio_frame(chunk)" },
        { type: "context", text: "    await websocket.close()" }
      ]
    }
  }
];

export const mockSupervisorUnits = [
  {
    name: "livekit-server.exe",
    port: 7999,
    status: "RUNNING",
    pid: 14820,
    uptime: "4h 22m",
    cpu: "0.4%",
    ram: "18.2 MB",
    type: "Win32 Process Group"
  },
  {
    name: "openbase-api-worker",
    port: 8000,
    status: "RUNNING",
    pid: 9244,
    uptime: "4h 22m",
    cpu: "0.2%",
    ram: "24.6 MB",
    type: "FastAPI Daemon"
  },
  {
    name: "agent-dispatcher-win32",
    port: 8088,
    status: "IDLE",
    pid: 18104,
    uptime: "1h 10m",
    cpu: "0.0%",
    ram: "12.1 MB",
    type: "Worker Subprocess"
  },
  {
    name: "tailscale-tunnel",
    port: 41641,
    status: "CONNECTED",
    pid: 3108,
    uptime: "12h 45m",
    cpu: "0.1%",
    ram: "8.4 MB",
    type: "WireGuard P2P"
  }
];

export const terminalCommands = {
  "openbase status": [
    "Openbase Coder v2.4.0 (Windows x86_64)",
    "  • Win32 Supervisor: RUNNING (4 units active)",
    "  • LiveKit Engine:   OK (Port 7999, WASAPI audio buffer)",
    "  • Memory Footprint: 44.8 MB (vs 4,200 MB Docker legacy)",
    "  • Remote Mobile:    Connected (iOS iPhone 16 Pro via Tailscale)"
  ],
  "openbase doctor": [
    "[PASS] Windows OS version: Windows 11 Build 22631 (x64) OK",
    "[PASS] Native LiveKit Server binary found at ~/.openbase/bin/livekit-server.exe",
    "[PASS] TCP Port 7999 is available and bound to 127.0.0.1",
    "[PASS] Audio subsystem: DirectSound / WASAPI 24-bit 48kHz OK",
    "[PASS] Unit registry directory ~/.openbase/windows-units exists and is writable",
    "[PASS] Safe file locking (msvcrt.locking) verified on NTFS filesystem",
    "[SUCCESS] All 6 diagnostic checks passed without warnings."
  ],
  "pytest tests/test_auth.py": [
    "============================= test session starts ==============================",
    "platform win32 -- Python 3.12.3, pytest-8.1.1",
    "rootdir: C:\\Users\\alexa\\openbase",
    "collected 24 items",
    "",
    "tests/test_auth.py::test_jwt_signature PASSED                           [  4%]",
    "tests/test_auth.py::test_token_refresh_race_condition PASSED            [ 50%]",
    "tests/test_auth.py::test_windows_file_locking PASSED                    [ 75%]",
    "tests/test_auth.py::test_session_expiry PASSED                          [100%]",
    "",
    "============================== 24 passed in 1.42s =============================="
  ],
  "openbase units list": [
    "UNIT                   PORT   PID     STATE    RAM      UPTIME",
    "----------------------------------------------------------------",
    "livekit-server.exe     7999   14820   RUNNING  18.2 MB  4h 22m",
    "openbase-api-worker    8000   9244    RUNNING  24.6 MB  4h 22m",
    "agent-dispatcher       8088   18104   IDLE     12.1 MB  1h 10m",
    "tailscale-tunnel       41641  3108    ACTIVE    8.4 MB 12h 45m"
  ],
  "help": [
    "Available commands to try:",
    "  openbase status       - Check health of Windows supervisor & voice stack",
    "  openbase doctor       - Run full subsystem self-diagnostics",
    "  openbase units list   - Inspect native Win32 background services",
    "  pytest tests/test_auth.py - Execute test suite",
    "  cls or clear          - Clear terminal screen"
  ]
};

export const integrationsData = [
  { id: "codex", name: "OpenAI Codex", category: "agents", icon: "Bot", color: "#10A37F", desc: "Native autonomous agent loop with function calling." },
  { id: "claude", name: "Claude Code", category: "agents", icon: "Sparkles", color: "#D97706", desc: "Anthropic's terminal agent with deep codebase context." },
  { id: "cursor", name: "Cursor AI", category: "agents", icon: "Terminal", color: "#3B82F6", desc: "AI-first code editor integration and voice diff apply." },
  { id: "gemini", name: "Gemini CLI", category: "agents", icon: "Cpu", color: "#8B5CF6", desc: "Google DeepMind high-speed code reasoning agents." },
  { id: "vscode", name: "VS Code", category: "editors", icon: "Code", color: "#007ACC", desc: "Bi-directional extension syncing cursor & approvals." },
  { id: "warp", name: "Warp Terminal", category: "terminals", icon: "SquareTerminal", color: "#06B6D4", desc: "Modern GPU-accelerated terminal for Windows." },
  { id: "pwsh", name: "PowerShell 7", category: "terminals", icon: "TerminalSquare", color: "#2563EB", desc: "Native Windows shell with full pipeline support." },
  { id: "github", name: "GitHub / Git", category: "source", icon: "GitBranch", color: "#F97316", desc: "Direct commit, branch staging, and pull request creation." },
  { id: "uv", name: "Astral uv", category: "runtime", icon: "Zap", color: "#E11D48", desc: "10x faster Python package manager & runner." },
  { id: "tailscale", name: "Tailscale", category: "runtime", icon: "Radio", color: "#6366F1", desc: "Zero-config WireGuard mesh network for mobile pairing." }
];

export const doctorSteps = [
  { id: "os", name: "Windows Architecture & Kernel Check", detail: "Win32 API + NT 10.0 Kernel (x64/ARM64)" },
  { id: "bin", name: "Native LiveKit Server Executable", detail: "~/.openbase/bin/livekit-server.exe" },
  { id: "port", name: "Port 7999 Binding & Socket Probe", detail: "TCP Netstat verification (0 collisions)" },
  { id: "audio", name: "Windows DirectSound / WASAPI Driver", detail: "Low-latency bidirectional audio buffer" },
  { id: "units", name: "Win32 Units Registry (~/.openbase/windows-units)", detail: "JSON unit descriptor engine" },
  { id: "lock", name: "NTFS Concurrency & File Lock (msvcrt)", detail: "Non-blocking atomic multi-agent access" }
];
