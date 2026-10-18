import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { NavTab } from '../Navbar';

interface ExperienceViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({ onTabChange, onOpenResume }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'scan' | 'findings' | 'playbook'>('scan');

  return (
    <div className="flex flex-col w-full text-[#1d1d1f]">
      {/* Header */}
      <div className="relative w-full bg-white border-b border-[#e5e5ea] overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#e8f2ff] via-[#f5f9ff] to-transparent blur-3xl pointer-events-none rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 relative z-10">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0071e3]"></span>
              <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
                Operational Track Record
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
              Field Experience &amp; Leadership.
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#6e6e73] mt-2 leading-relaxed">
              Real-world vulnerability assessments, network perimeter hardening, and peer cybersecurity mentorship within collegiate and institutional environments.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-12 sm:gap-16">
        {/* Experience Item 1: Eduversity */}
        <section className="bg-white border border-[#e5e5ea] rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#e5e5ea]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center text-[#0071e3] shrink-0">
                <span className="material-symbols-outlined text-[30px]">shield</span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">Eduversity</h2>
                  <span className="font-mono text-[12px] text-[#28cd41] bg-[#28cd41]/10 px-2.5 py-0.5 rounded-full font-semibold">
                    Verified Internship
                  </span>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#0071e3] font-semibold mt-0.5">
                  Cybersecurity Intern — Practical Threat Assessment &amp; Hardening
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-[#6e6e73]">
              <span className="bg-[#f5f5f7] border border-[#e5e5ea] px-3 py-1 rounded-full">
                3 Months Operational
              </span>
              <span className="bg-[#f5f5f7] border border-[#e5e5ea] px-3 py-1 rounded-full">
                Jaipur, Rajasthan, India
              </span>
            </div>
          </div>

          {/* Interactive Telemetry Inspection Console */}
          <div className="rounded-xl bg-[#fbfbfd] border border-[#d2d2d7] overflow-hidden shadow-xs font-mono">
            <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                <span className="text-[12px] text-[#6e6e73] font-medium ml-1">
                  eduversity_telemetry_terminal.sh
                </span>
              </div>

              <div className="flex items-center gap-1 text-[11.5px]">
                <button
                  onClick={() => setActiveConsoleTab('scan')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeConsoleTab === 'scan'
                      ? 'bg-white text-[#0071e3] shadow-xs font-semibold'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Audit Scan
                </button>
                <button
                  onClick={() => setActiveConsoleTab('findings')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeConsoleTab === 'findings'
                      ? 'bg-white text-[#0071e3] shadow-xs font-semibold'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Findings (14)
                </button>
                <button
                  onClick={() => setActiveConsoleTab('playbook')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeConsoleTab === 'playbook'
                      ? 'bg-white text-[#0071e3] shadow-xs font-semibold'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Playbook
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 text-[12.5px] text-[#1d1d1f] space-y-2">
              {activeConsoleTab === 'scan' && (
                <>
                  <p className="text-[#86868b]">// Initializing authorized enterprise staging penetration test...</p>
                  <p className="text-[#0071e3] font-semibold">$ nmap -sC -sV -p- -T4 --script vuln 10.14.0.0/24</p>
                  <p className="text-[#424245]">[+] Scanned 256 hosts in 10.14.0.0/24 subnet (42 live nodes active)</p>
                  <p className="text-[#d70015] font-semibold">
                    &gt; 14 critical patch deviations cataloged across unquoted service paths
                  </p>
                  <p className="text-[#28cd41] font-semibold">
                    &gt; Zero-day mitigation vector generated: SSH forced public-key authentication enforced
                  </p>
                </>
              )}

              {activeConsoleTab === 'findings' && (
                <>
                  <p className="text-[#86868b]">// Vulnerability Breakdown &amp; CVSS Severity Distribution</p>
                  <p className="text-[#d70015]">
                    [HIGH - CVSS 8.4] Port 8080 Tomcat AJP unauthenticated packet injection
                  </p>
                  <p className="text-[#f56300]">
                    [MEDIUM - CVSS 6.5] Unquoted executable service paths found in staging Windows hosts
                  </p>
                  <p className="text-[#28cd41]">
                    [RESOLVED] Perimeter iptables closed port 445; null session enumeration mitigated
                  </p>
                </>
              )}

              {activeConsoleTab === 'playbook' && (
                <>
                  <p className="text-[#86868b]">// Structured Hardening Protocol Deployed for Network Leads</p>
                  <p className="text-[#1d1d1f]">
                    1. Enforce strict TLS 1.3 ciphers with PFS across reverse proxies.
                  </p>
                  <p className="text-[#1d1d1f]">
                    2. Deprecate SMBv1 across internal subnets; isolate storage nodes.
                  </p>
                  <p className="text-[#0071e3]">
                    3. Continuous telemetry logging with Wireshark PCAP hooks.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Key Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#fbfbfd] p-5 rounded-xl border border-[#e5e5ea]">
              <div className="w-8 h-8 rounded-lg bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[18px]">search_check</span>
              </div>
              <h3 className="font-bold text-[15px] text-[#1d1d1f] mb-1">Asset Audit</h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                Audited network assets and internal endpoints to detect latent configuration weaknesses and missing high-priority security updates.
              </p>
            </div>

            <div className="bg-[#fbfbfd] p-5 rounded-xl border border-[#e5e5ea]">
              <div className="w-8 h-8 rounded-lg bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[18px]">radar</span>
              </div>
              <h3 className="font-bold text-[15px] text-[#1d1d1f] mb-1">Lateral Tracking</h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                Conducted controlled penetration runs and service mapping utilizing Nmap, Metasploit, and deep frame analysis in Wireshark.
              </p>
            </div>

            <div className="bg-[#fbfbfd] p-5 rounded-xl border border-[#e5e5ea]">
              <div className="w-8 h-8 rounded-lg bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[18px]">description</span>
              </div>
              <h3 className="font-bold text-[15px] text-[#1d1d1f] mb-1">Remediation Reports</h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                Prepared vulnerability documentation and structured remediation guidance for technical leads, directly reducing attack surfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Item 2: Algo Club */}
        <section className="bg-white border border-[#e5e5ea] rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#e5e5ea]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center text-[#0071e3] shrink-0">
                <span className="material-symbols-outlined text-[30px]">terminal</span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">Algo Club</h2>
                  <span className="font-mono text-[12px] text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-0.5 rounded-full font-semibold">
                    Core Technical Body
                  </span>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#0071e3] font-semibold mt-0.5">
                  Core Member — Leadership &amp; Peer Training
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-[#6e6e73]">
              <span className="bg-[#f5f5f7] border border-[#e5e5ea] px-3 py-1 rounded-full">
                2024 – Present
              </span>
              <span className="bg-[#f5f5f7] border border-[#e5e5ea] px-3 py-1 rounded-full">
                UEM Jaipur, India
              </span>
            </div>
          </div>

          <p className="text-[15.5px] text-[#6e6e73] leading-relaxed max-w-4xl">
            Leading institutional technology workshops, instilling secure software engineering habits early in the development lifecycle, and driving departmental hackathons. Mentoring peers on algorithmic rigor, systems thinking, and secure programming paradigms.
          </p>

          {/* Focus Vectors Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#fbfbfd] p-5 rounded-xl border border-[#e5e5ea]">
              <span className="text-[11px] font-mono text-[#0071e3] font-bold uppercase tracking-wider block mb-1">
                Focus Vector 01
              </span>
              <h3 className="font-bold text-[15px] text-[#1d1d1f] mb-1.5">
                Secure Coding Practices
              </h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                OWASP Top 10 awareness, boundary testing, input sanitization, and defensive API design workshops for undergraduate students.
              </p>
            </div>

            <div className="bg-[#fbfbfd] p-5 rounded-xl border border-[#e5e5ea]">
              <span className="text-[11px] font-mono text-[#0071e3] font-bold uppercase tracking-wider block mb-1">
                Focus Vector 02
              </span>
              <h3 className="font-bold text-[15px] text-[#1d1d1f] mb-1.5">
                Hackathon Execution
              </h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                Rapid architecture mentorship, guiding student teams in building resilient prototypes under strict time constraints.
              </p>
            </div>

            <div className="bg-[#fbfbfd] p-5 rounded-xl border border-[#e5e5ea]">
              <span className="text-[11px] font-mono text-[#0071e3] font-bold uppercase tracking-wider block mb-1">
                Focus Vector 03
              </span>
              <h3 className="font-bold text-[15px] text-[#1d1d1f] mb-1.5">
                Algorithmic Rigor
              </h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                Systems optimization, memory management in C/C++, and algorithmic data structures training.
              </p>
            </div>
          </div>
        </section>

        {/* Action Callout Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-[#f5f5f7] via-white to-[#f5f5f7] border border-[#e5e5ea] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-[#1d1d1f]">
              Ready to review detailed operational writeups?
            </h3>
            <p className="text-[13.5px] text-[#6e6e73] mt-0.5">
              Request formal audit reports or view verified CV documentation.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] text-[13px] font-medium hover:bg-[#f5f5f7] transition-all"
            >
              Curriculum Vitae
            </button>
            <button
              onClick={() => onTabChange('contact')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-all shadow-sm"
            >
              Contact Priyanshu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
