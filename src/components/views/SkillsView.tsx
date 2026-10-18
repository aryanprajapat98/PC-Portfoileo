import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { NavTab } from '../Navbar';

interface SkillsViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ onTabChange }) => {
  return (
    <div className="flex flex-col w-full text-[#1d1d1f]">
      {/* Subtle Ambient Scrim */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbfbfd] via-white to-white border-b border-[#e5e5ea]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#0071e3]/5 blur-3xl pointer-events-none rounded-full"></div>

        {/* Page Lead: Apple Spec Header Style */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-10 sm:pb-14 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] text-[#0071e3] font-mono text-[12px] border border-[#e5e5ea]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28cd41]"></span>
                SYS.SPEC // ARCHITECTURE &amp; OPERATIONS
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
                Field Operations &amp; Engineering Matrix.
              </h1>
              <p className="text-[16px] sm:text-[18px] text-[#6e6e73] leading-relaxed">
                Auditing attack surfaces, designing hardened micro-perimeters, and executing rigorous penetration assessments with defensive discipline.
              </p>
            </div>

            {/* Telemetry Pill Indicators */}
            <div className="flex items-center gap-3 self-start md:self-auto bg-[#f5f5f7] border border-[#e5e5ea] px-4 py-2.5 rounded-xl shadow-xs">
              <div className="flex flex-col">
                <span className="text-[11px] text-[#86868b] uppercase tracking-wider font-semibold">
                  Status
                </span>
                <span className="font-mono text-[13px] text-[#28cd41] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span> Clear for Assessment
                </span>
              </div>
              <div className="w-px h-8 bg-[#e5e5ea] mx-1"></div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#86868b] uppercase tracking-wider font-semibold">
                  Primary Stack
                </span>
                <span className="font-mono text-[13px] text-[#1d1d1f] font-semibold">
                  Python • C • Linux
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 1: FIELD EXPERIENCE & IMPACT */}
      <section className="w-full bg-[#fbfbfd] py-12 sm:py-16 border-b border-[#e5e5ea]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
                Operational Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-1">
                Field Experience &amp; Impact
              </h2>
            </div>
            <span className="font-mono text-[12px] text-[#86868b] hidden sm:inline">
              NODES: 02 // LOGS_ACTIVE
            </span>
          </div>

          {/* Bento Cluster: Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Main Intern Card: 8 Columns */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#e5e5ea] shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0071e3]/5 pointer-events-none rounded-bl-full"></div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-center justify-center text-[#0071e3]">
                      <span className="material-symbols-outlined text-[22px]">shield</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">Eduversity</h3>
                      <p className="text-[13.5px] text-[#0071e3] font-semibold">
                        Cybersecurity Intern — Practical Threat Assessment &amp; Hardening
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[12px] bg-[#f5f5f7] text-[#6e6e73] px-3 py-1 rounded-full border border-[#e5e5ea]">
                    3 Months Operational
                  </span>
                </div>

                {/* Terminal-styled Auditing Report */}
                <div className="bg-[#f5f5f7] rounded-xl p-4 sm:p-5 my-4 font-mono text-[12.5px] border border-[#e5e5ea]">
                  <div className="flex items-center justify-between pb-2 mb-3 text-[#86868b] text-[11px] border-b border-[#e5e5ea]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
                      <span className="ml-2 text-[#6e6e73] font-medium">
                        audit_engagement_telemetry.log
                      </span>
                    </span>
                    <span>ENC: AES-256</span>
                  </div>
                  <p className="text-[#86868b]">// Engagement Scope: Internal Segment Subnets &amp; Edge Services</p>
                  <p className="text-[#0071e3] mt-1 font-semibold">
                    $ nmap -sC -sV -p- -T4 --script vuln 10.14.0.0/24
                  </p>
                  <p className="text-[#6e6e73] mt-1">
                    &gt; 14 critical patch deviations cataloged across enterprise endpoints
                  </p>
                  <p className="text-[#28cd41] mt-1 font-semibold">
                    &gt; Structured remediation playbooks deployed for dev leads
                  </p>
                </div>

                {/* Detail List */}
                <div className="space-y-3.5 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0071e3]">
                      <span className="material-symbols-outlined text-[15px]">search_check</span>
                    </div>
                    <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                      Audited network assets and internal endpoints to detect latent configuration weaknesses, unquoted service paths, and missing high-priority security updates.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0071e3]">
                      <span className="material-symbols-outlined text-[15px]">radar</span>
                    </div>
                    <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                      Conducted controlled penetration runs and service mapping utilizing{' '}
                      <span className="text-[#1d1d1f] font-semibold">Nmap</span>,{' '}
                      <span className="text-[#1d1d1f] font-semibold">Metasploit</span>, and deep frame analysis in{' '}
                      <span className="text-[#1d1d1f] font-semibold">Wireshark</span> to isolate anomalous lateral movement patterns.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0071e3]">
                      <span className="material-symbols-outlined text-[15px]">description</span>
                    </div>
                    <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                      Prepared vulnerability documentation and structured remediation guidance for technical leads, directly assisting in mitigation workflows and attack surface reduction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Micro-metrics */}
              <div className="pt-5 mt-5 flex flex-wrap items-center gap-2 border-t border-[#e5e5ea]">
                {['#PenetrationTesting', '#ThreatHardening', '#CVSS-Analysis', '#Nmap-NSE'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] bg-[#f5f5f7] px-2.5 py-1 rounded-full text-[#0071e3] border border-[#e5e5ea]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Algo Club Card: 4 Columns */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-[#e5e5ea] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-center justify-center text-[#0071e3]">
                  <span className="material-symbols-outlined text-[22px]">terminal</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-[#86868b] tracking-wider">
                    Leadership &amp; Peer Training
                  </span>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mt-0.5">Algo Club</h3>
                  <p className="text-[13px] text-[#0071e3] font-medium">Core Member • 2024 – Present</p>
                </div>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  Leading institutional technology workshops, instilling secure software engineering habits early in the development lifecycle, and driving departmental hackathons.
                </p>

                {/* Diagnostic Metric Block */}
                <div className="space-y-2 pt-1">
                  <div className="bg-[#f5f5f7] p-3 rounded-xl border border-[#e5e5ea]">
                    <span className="text-[10px] uppercase font-semibold text-[#86868b]">Focus Vector 01</span>
                    <p className="text-[12.5px] text-[#1d1d1f] font-semibold mt-0.5">
                      Secure Coding Practices &amp; OWASP Top 10 Awareness
                    </p>
                  </div>
                  <div className="bg-[#f5f5f7] p-3 rounded-xl border border-[#e5e5ea]">
                    <span className="text-[10px] uppercase font-semibold text-[#86868b]">Focus Vector 02</span>
                    <p className="text-[12.5px] text-[#1d1d1f] font-semibold mt-0.5">
                      Hackathon Execution &amp; Rapid Architecture Mentorship
                    </p>
                  </div>
                  <div className="bg-[#f5f5f7] p-3 rounded-xl border border-[#e5e5ea]">
                    <span className="text-[10px] uppercase font-semibold text-[#86868b]">Focus Vector 03</span>
                    <p className="text-[12.5px] text-[#1d1d1f] font-semibold mt-0.5">
                      Algorithmic Rigor &amp; Systems Optimization
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-[#28cd41] font-mono text-[12px] border-t border-[#e5e5ea] mt-4">
                <span className="material-symbols-outlined text-[17px]">groups</span>
                <span>Active Student Chapter Contribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL SPECIFICATIONS / APPLE GRID MATRIX */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-10">
            <div>
              <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
                System Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mt-1">
                Technical Architecture &amp; Matrix
              </h2>
            </div>
            <p className="text-[14px] text-[#86868b] max-w-sm">
              Benchmarked proficiency standards across exploit research, systems programming, and high-assurance network auditing.
            </p>
          </div>

          {/* Bento Grid 1: Languages & Proficiency Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Programming Specs (7 cols) */}
            <div className="lg:col-span-7 bg-[#fbfbfd] rounded-2xl p-6 sm:p-8 border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#0071e3] text-[24px]">code</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f]">
                    Programming Languages
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#86868b]">
                  6 COMPILED / SCRIPTED
                </span>
              </div>

              {/* Spec Rows */}
              <div className="divide-y divide-[#e5e5ea]">
                {PORTFOLIO_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0 space-y-1.5">
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-[#1d1d1f] font-semibold font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></span>
                        {lang.name}
                      </span>
                      <span className="text-[#0071e3] font-mono text-[11.5px] font-medium truncate ml-2">
                        {lang.role}
                      </span>
                    </div>
                    <div className="w-full bg-[#e8e8ed] rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#0071e3] h-full rounded-full transition-all duration-700"
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Systems (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Frameworks & Security Libraries */}
              <div className="bg-[#fbfbfd] rounded-2xl p-6 sm:p-7 border border-[#e5e5ea] shadow-sm flex-1">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="material-symbols-outlined text-[#0071e3] text-[22px]">developer_board</span>
                  <h3 className="text-lg font-bold text-[#1d1d1f]">
                    Frameworks &amp; Libraries
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {PORTFOLIO_DATA.frameworksAndLibs.map((item, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#e5e5ea] shadow-xs">
                      <span className="font-mono text-[13px] text-[#0071e3] font-bold block">
                        {item.name}
                      </span>
                      <span className="text-[11.5px] text-[#86868b] leading-tight block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems & Platform */}
              <div className="bg-[#fbfbfd] rounded-2xl p-6 sm:p-7 border border-[#e5e5ea] shadow-sm flex-1">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="material-symbols-outlined text-[#0071e3] text-[22px]">dns</span>
                  <h3 className="text-lg font-bold text-[#1d1d1f]">
                    Systems &amp; Platform
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {PORTFOLIO_DATA.systemsAndPlatform.map((sys, idx) => (
                    <div key={idx} className="bg-white text-center py-3 px-1.5 rounded-xl border border-[#e5e5ea] shadow-xs">
                      <span className="font-mono text-[12.5px] text-[#1d1d1f] font-semibold block">
                        {sys.name}
                      </span>
                      <span className="text-[11px] text-[#86868b] block mt-0.5">
                        {sys.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid 2: Red Team Suite & Core Competency Badges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Red Team Tools (7 cols) */}
            <div className="lg:col-span-7 bg-[#fbfbfd] rounded-2xl p-6 sm:p-8 border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#d70015] text-[24px]">policy</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f]">
                    Security &amp; Red Team Toolchain
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#d70015] bg-[#ff3b30]/10 px-2 py-0.5 rounded font-bold">
                  OFFENSIVE OPS
                </span>
              </div>
              <p className="text-[13.5px] text-[#6e6e73] mb-5">
                Authorized instrumentation used for protocol verification, assembly analysis, and attack simulations.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {PORTFOLIO_DATA.redTeamTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-[#e5e5ea] flex flex-col justify-between h-20 shadow-xs"
                  >
                    <span className="font-mono text-[13px] text-[#1d1d1f] font-bold">
                      {tool.name}
                    </span>
                    <span className="text-[11px] text-[#86868b]">{tool.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies (5 cols) */}
            <div className="lg:col-span-5 bg-[#fbfbfd] rounded-2xl p-6 sm:p-8 border border-[#e5e5ea] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="material-symbols-outlined text-[#28cd41] text-[24px]">verified</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f]">
                    Core Competencies
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#6e6e73] mb-4">
                  Evaluated practical domains mapped to offensive and incident investigation pipelines.
                </p>

                <div className="space-y-2 font-mono text-[12.5px]">
                  {PORTFOLIO_DATA.coreCompetencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e5e5ea] shadow-xs"
                    >
                      <span className="text-[#1d1d1f] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#0071e3] text-[18px]">
                          {comp.icon}
                        </span>
                        {comp.name}
                      </span>
                      <span className="text-[#0071e3] text-[11px] font-semibold bg-[#0071e3]/10 px-2 py-0.5 rounded-full">
                        {comp.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ACADEMIC BACKGROUND & RIGOR */}
      <section className="w-full bg-[#fbfbfd] py-12 sm:py-16 border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
              Academic Baseline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-1">
              Education &amp; Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Higher Education: BCA (8 cols) */}
            <div className="md:col-span-7 lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#e5e5ea] shadow-sm">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#0071e3]">
                    Undergraduate Degree
                  </span>
                  <span className="font-mono text-[11.5px] bg-[#f5f5f7] text-[#0071e3] px-3 py-1 rounded-full font-medium border border-[#e5e5ea]">
                    2024 – 2027 (Active)
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
                    Bachelor of Computer Applications (BCA) — Cybersecurity
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] mt-1">
                    University of Engineering and Management • Jaipur, India
                  </p>
                </div>
                <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                  In-depth specialization emphasizing computer systems security, cryptography, operational network topologies, and systems programming paradigms.
                </p>
              </div>

              <div className="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e5ea]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-center justify-center text-[#0071e3] font-mono font-bold text-xl">
                    7.5
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase text-[#86868b] font-semibold">
                      Cumulative Grade Metric
                    </span>
                    <span className="text-[14px] text-[#1d1d1f] font-semibold">
                      CGPA: 7.5 / 10.0
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#28cd41] font-mono text-[12px]">
                  <span className="material-symbols-outlined text-[17px]">verified</span>
                  <span>In Good Academic Standing</span>
                </div>
              </div>
            </div>

            {/* Secondary School (4 cols) */}
            <div className="md:col-span-5 lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#e5e5ea] shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b]">
                    Senior Secondary
                  </span>
                  <span className="font-mono text-[11px] text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-0.5 rounded-full border border-[#e5e5ea]">
                    2024
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">
                    Class XII — Science &amp; Mathematics
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] mt-1">
                    Gurukripa Public School • Sikar, India
                  </p>
                </div>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  Core academic preparation in analytical mechanics, advanced calculus, linear algebra, and algorithmic logic.
                </p>
              </div>

              <div className="pt-5 flex items-center gap-2 text-[#86868b] font-mono text-[12px] border-t border-[#e5e5ea] mt-5">
                <span className="material-symbols-outlined text-[17px]">school</span>
                <span>STEM Curriculum Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CERTIFICATIONS & DISTINCTIONS */}
      <section className="w-full bg-white py-14 sm:py-20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
              Accreditations &amp; Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-1">
              Certifications &amp; Distinctions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* Cert 1 */}
            <div className="bg-[#fbfbfd] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#e5e5ea] shadow-sm hover:border-[#b0b0b5] transition-all">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e5e5ea] flex items-center justify-center text-[#0071e3] mb-4">
                  <span className="material-symbols-outlined text-[20px]">layers</span>
                </div>
                <span className="font-mono text-[11px] text-[#0071e3] uppercase font-bold">
                  Target / Credential
                </span>
                <h4 className="text-lg font-bold text-[#1d1d1f] mt-1">
                  Java FullStack Developer Specialization
                </h4>
                <p className="text-[13px] text-[#6e6e73] mt-1">Coursera &amp; Board Infinity</p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[11px] font-mono text-[#86868b]">
                <span>ISSUANCE</span>
                <span className="text-[#0071e3] font-bold">March 2026</span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="bg-[#fbfbfd] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#e5e5ea] shadow-sm hover:border-[#b0b0b5] transition-all">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e5e5ea] flex items-center justify-center text-[#28cd41] mb-4">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                </div>
                <span className="font-mono text-[11px] text-[#28cd41] uppercase font-bold">
                  Verified Complete
                </span>
                <h4 className="text-lg font-bold text-[#1d1d1f] mt-1">
                  Introduction to Cybersecurity
                </h4>
                <p className="text-[13px] text-[#6e6e73] mt-1">Coursera</p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[11px] font-mono text-[#86868b]">
                <span>ISSUED</span>
                <span className="text-[#1d1d1f] font-bold">2024</span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="bg-[#fbfbfd] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#e5e5ea] shadow-sm hover:border-[#b0b0b5] transition-all">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e5e5ea] flex items-center justify-center text-[#0071e3] mb-4">
                  <span className="material-symbols-outlined text-[20px]">military_tech</span>
                </div>
                <span className="font-mono text-[11px] text-[#0071e3] uppercase font-bold">
                  Competitive Distinction
                </span>
                <h4 className="text-lg font-bold text-[#1d1d1f] mt-1">
                  Top 10 Finalist — HackUEM
                </h4>
                <p className="text-[12.5px] text-[#6e6e73] mt-1">
                  Recognized for resilient system architecture and rapid time-bound prototype execution.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[11px] font-mono text-[#86868b]">
                <span>ORGANIZER</span>
                <span className="text-[#1d1d1f] font-bold">UEM Jaipur</span>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="bg-[#fbfbfd] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#e5e5ea] shadow-sm hover:border-[#b0b0b5] transition-all">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e5e5ea] flex items-center justify-center text-[#0071e3] mb-4">
                  <span className="material-symbols-outlined text-[20px]">translate</span>
                </div>
                <span className="font-mono text-[11px] text-[#0071e3] uppercase font-bold">
                  Communication Protocol
                </span>
                <h4 className="text-lg font-bold text-[#1d1d1f] mt-1">
                  Linguistic Fluency
                </h4>
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between items-center text-[12.5px]">
                    <span className="text-[#1d1d1f] font-medium">English</span>
                    <span className="font-mono text-[11px] text-[#0071e3] bg-white px-2 py-0.5 rounded border border-[#e5e5ea] font-semibold">
                      C1 • Prof. Working
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[12.5px]">
                    <span className="text-[#1d1d1f] font-medium">Hindi</span>
                    <span className="font-mono text-[11px] text-[#28cd41] bg-white px-2 py-0.5 rounded border border-[#e5e5ea] font-semibold">
                      C2 • Native
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[11px] font-mono text-[#86868b]">
                <span>CEFR STANDARD</span>
                <span className="text-[#1d1d1f] font-bold">Bilingual Tech</span>
              </div>
            </div>
          </div>

          {/* Action Callout Bar */}
          <div className="bg-[#fbfbfd] rounded-2xl p-5 sm:p-6 border border-[#e5e5ea] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 text-[#0071e3]">
                <span className="material-symbols-outlined text-[22px]">terminal</span>
              </div>
              <div>
                <p className="text-[14.5px] text-[#1d1d1f] font-semibold">
                  Ready to review raw audit telemetry or code repositories?
                </p>
                <p className="text-[12.5px] text-[#6e6e73]">
                  Access verified laboratory notes and defensive engineering blueprints.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onTabChange('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0071e3] text-white text-[13px] font-medium rounded-full px-5 py-2 hover:bg-[#0077ed] transition-all"
              >
                <span>Explore Projects</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onTabChange('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white text-[#1d1d1f] text-[13px] font-medium rounded-full px-5 py-2 border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-all"
              >
                <span>Direct Channel</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
