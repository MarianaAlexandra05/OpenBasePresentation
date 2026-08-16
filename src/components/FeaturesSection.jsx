import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.feat1Title || "Supervisor de Servicios Win32 Desacoplado",
      desc: t.feat1Desc || "Reemplazo nativo de launchd y systemd. Utiliza descriptores JSON en ~/.openbase/windows-units y procesos detached con flags CREATE_NEW_PROCESS_GROUP para garantizar disponibilidad 24/7.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: t.feat2Title || "Servidor de Voz LiveKit Nativo (.exe)",
      desc: t.feat2Desc || "Descarga y gestiona automáticamente el binario oficial de livekit-server.exe para Windows x86_64 y ARM64. Provee WebRTC de grado de producción y salas de audio bidireccionales en tu propio host.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      )
    },
    {
      title: t.feat3Title || "Integración Nativa con PowerShell 7 & Terminal",
      desc: t.feat3Desc || "Comandos de consola optimizados para PowerShell y CMD. Normalización de separadores de ruta (\\ vs /) sin escapes accidentales y soporte para terminaciones ejecutables .exe, .cmd y .bat.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      )
    },
    {
      title: t.feat4Title || "Sonda de Procesos y Sockets Win32 (Netstat)",
      desc: t.feat4Desc || "Detección de puertos y estado de procesos directamente con la API de Windows OpenProcess y netstat -ano, eliminando cualquier dependencia de herramientas UNIX como lsof o ps.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: t.feat5Title || "Sincronización y Control Remoto con Móviles",
      desc: t.feat5Desc || "Empareja tu iPhone o teléfono Android con tu PC Windows a través de Tailscale o red local. Controla llamadas de voz, aprueba permisos de ejecución y revisa diffs mientras estás lejos de tu escritorio.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: t.feat6Title || "Bloqueo de Archivos Concurrente (msvcrt.locking)",
      desc: t.feat6Desc || "Manejo seguro de concurrencia para múltiples agentes trabajando en paralelo. Implementación especializada con reintentos y _windows_flock para evitar bloqueos en el sistema de archivos NTFS.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <span className="section-tag" id="feat-tag">{t.featTag || "PILARES TÉCNICOS"}</span>
        <h2 className="section-title" id="feat-title">{t.featTitle || "Construido Específicamente para el Ecosistema Windows"}</h2>
        <p className="section-desc" id="feat-desc">
          {t.featDesc || "No es una simple adaptación: cada módulo del runtime fue rediseñado para aprovechar las APIs del kernel de Windows."}
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon-wrapper">
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
