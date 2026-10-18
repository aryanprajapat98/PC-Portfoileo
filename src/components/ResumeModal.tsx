import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const resumeText = `PRIYANSHU CHOUDHARY
${PORTFOLIO_DATA.profile.location} • ${PORTFOLIO_DATA.profile.phone} • ${PORTFOLIO_DATA.profile.email}
Telegram: ${PORTFOLIO_DATA.profile.socials.telegram} (${PORTFOLIO_DATA.profile.telegramUsername})
LinkedIn: ${PORTFOLIO_DATA.profile.socials.linkedin}
GitHub: ${PORTFOLIO_DATA.profile.socials.github}

PROFESSIONAL SUMMARY
${PORTFOLIO_DATA.profile.executiveSummary}

TECHNICAL SKILLS
- Programming: Python, Bash, C, C++, Java, Go, SQL
- Frameworks & Libraries: Scapy, Requests, Cryptography, Socket
- Security Tools: Kali Linux, Metasploit, Ghidra, Wireshark, Nmap, Burp Suite, Cobalt Strike
- Systems & Infrastructure: Linux (Debian/Arch), Docker, ELK Stack, Git
- Core Competencies: Network Penetration Testing, Malware Analysis, Traffic Inspection, Vulnerability Assessment

PROFESSIONAL EXPERIENCE
Cybersecurity Intern — Eduversity (3 Months)
- Audited network assets and internal endpoints to detect configuration weaknesses.
- Conducted controlled penetration runs and service mapping utilizing Nmap, Metasploit, and Wireshark.
- Prepared vulnerability documentation and structured remediation guidance for technical leads.

Core Member — Algo Club (2024 – Present)
- Leading institutional technology workshops, secure coding practices (OWASP Top 10), and departmental hackathons.

PROJECTS
1. External Network Penetration Testing Suite (Python, Kali Linux, Metasploit, Nmap)
2. Automated Threat Detection Engine (Go, Wireshark, ELK Stack, Python)
3. Ransomware Decryption & Payload Analysis Tool (C++, C, Ghidra)
4. Honeypot Telemetry Node (Java, Docker, Wireshark, Bash)

EDUCATION
- Bachelor of Computer Applications (BCA) — Cybersecurity (2024–2027) | University of Engineering and Management (CGPA: 7.5 / 10.0)
- Senior Secondary (Class XII) — Science & Mathematics (2024) | Gurukripa Public School, Sikar

CERTIFICATIONS & AWARDS
- Java FullStack Developer Specialization – Coursera & Board Infinity
- Introduction to Cybersecurity – Coursera
- Top 10 Finalist – HackUEM Hackathon`;

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden z-10 border border-[#d2d2d7]">
        {/* Modal Top Bar */}
        <div className="no-print bg-[#f5f5f7] border-b border-[#e5e5ea] px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0071e3]"></span>
            <span className="font-semibold text-[14px] text-[#1d1d1f]">
              Priyanshu Choudhary — Verified Resume
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono bg-white border border-[#e5e5ea] text-[#6e6e73] px-2 py-0.5 rounded-full">
              A4 Print Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-white border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#ebebed] text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#0071e3]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#0071e3] text-white hover:bg-[#0077ed] text-[12px] font-medium px-3.5 py-1.5 rounded-full shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">print</span>
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#ebebed] transition-colors ml-1"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 resume-printable-container bg-white text-[#111111] font-sans leading-normal">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border-b-2 border-[#222222] pb-4 mb-4">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-[#111111]">
                  {PORTFOLIO_DATA.profile.name}
                </h1>
                <span className="material-symbols-outlined text-[#0071e3] text-[20px]" title="Verified SOC Analyst">
                  verified
                </span>
              </div>
              <p className="text-[13.5px] font-semibold text-[#0071e3] mb-2">
                Cybersecurity Undergraduate &amp; SOC Analyst
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-[12.5px] text-[#333333]">
                <span>{PORTFOLIO_DATA.profile.location}</span>
                <span>•</span>
                <span>{PORTFOLIO_DATA.profile.phone}</span>
                <span>•</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="text-[#0071e3] hover:underline"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>
                <span>•</span>
                <a
                  href={PORTFOLIO_DATA.profile.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#229ED9] font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  Telegram: {PORTFOLIO_DATA.profile.telegramUsername}
                </a>
                <span>•</span>
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0071e3] hover:underline"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0071e3] hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Professional Portrait Photo */}
            <div className="shrink-0 flex flex-col items-center">
              <ProfilePhoto
                variant="resume"
                className="shadow-xs border-[#111111]/25 print:border-black"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-[#777777] pb-0.5 mb-1.5 text-black">
              Professional Summary
            </h2>
            <p className="text-[13px] text-[#222222] leading-relaxed">
              {PORTFOLIO_DATA.profile.executiveSummary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-[#777777] pb-0.5 mb-1.5 text-black">
              Technical Skills
            </h2>
            <div className="space-y-1 text-[13px] text-[#222222]">
              <p>
                <strong>Programming:</strong> Python, Bash, C, C++, Java, Go, SQL
              </p>
              <p>
                <strong>Frameworks &amp; Libraries:</strong> Python Security Libraries (Scapy, Requests, Cryptography, Socket)
              </p>
              <p>
                <strong>Security Tools:</strong> Kali Linux, Metasploit, Ghidra, Wireshark, Nmap, Burp Suite, Cobalt Strike
              </p>
              <p>
                <strong>Systems &amp; Infrastructure:</strong> Linux (Debian/Arch), Docker, ELK Stack, Git
              </p>
              <p>
                <strong>Core Competencies:</strong> Network Penetration Testing, Malware Analysis, Traffic Inspection, Vulnerability Assessment
              </p>
              <p>
                <strong>Professional Attributes:</strong> Problem-Solving, Technical Communication, Incident Triage, Team Leadership
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-[#777777] pb-0.5 mb-1.5 text-black">
              Professional Experience
            </h2>

            <div className="mb-3">
              <div className="flex justify-between items-baseline font-semibold text-[13.5px]">
                <span>Cybersecurity Intern</span>
                <span>Eduversity</span>
              </div>
              <div className="flex justify-between items-baseline italic text-[12.5px] text-[#444444] mb-1">
                <span>Practical Threat Assessment &amp; Hardening</span>
                <span>3 Months Operational</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-[13px] text-[#222222] space-y-1">
                <li>Audited network assets and internal endpoints to detect configuration weaknesses, unquoted service paths, and patch deviations.</li>
                <li>Conducted controlled penetration runs and service mapping utilizing Nmap, Metasploit, and Wireshark.</li>
                <li>Prepared vulnerability documentation and structured remediation guidance for technical leads.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-[13.5px]">
                <span>Core Member</span>
                <span>Algo Club</span>
              </div>
              <div className="flex justify-between items-baseline italic text-[12.5px] text-[#444444] mb-1">
                <span>Leadership &amp; Peer Training</span>
                <span>2024 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-[13px] text-[#222222] space-y-1">
                <li>Leading institutional technology workshops, instilling secure software engineering habits early in the development lifecycle.</li>
                <li>Mentoring peers on OWASP Top 10 vulnerabilities, algorithmic problem solving, and departmental hackathons.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-[#777777] pb-0.5 mb-1.5 text-black">
              Featured Security Projects
            </h2>

            <div className="space-y-2.5 text-[13px] text-[#222222]">
              <div>
                <div className="flex justify-between items-baseline font-semibold">
                  <span>External Network Penetration Testing Suite</span>
                  <span className="font-mono text-[12px] font-normal text-[#555555]">Python, Kali Linux, Metasploit, Nmap</span>
                </div>
                <p className="text-[12.5px] text-[#333333]">
                  Automated port enumeration, banner grabbing, and service discovery across simulated enterprise subnets; generated prioritized remediation matrices.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold">
                  <span>Automated Threat Detection Engine</span>
                  <span className="font-mono text-[12px] font-normal text-[#555555]">Go, Wireshark, ELK Stack, Python</span>
                </div>
                <p className="text-[12.5px] text-[#333333]">
                  High-throughput packet analysis pipeline parsing live traffic flows for brute-force signatures; indexed anomalous events into Elasticsearch.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold">
                  <span>Ransomware Decryption &amp; Payload Analysis Tool</span>
                  <span className="font-mono text-[12px] font-normal text-[#555555]">C++, C, Ghidra, x86_64 ASM</span>
                </div>
                <p className="text-[12.5px] text-[#333333]">
                  Disassembled malicious PE binaries to identify structural flaws in custom encryption implementations; recovered files via 32-bit PRNG seed brute-force.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold">
                  <span>Honeypot Telemetry Node</span>
                  <span className="font-mono text-[12px] font-normal text-[#555555]">Java, Docker, Wireshark, Bash</span>
                </div>
                <p className="text-[12.5px] text-[#333333]">
                  Constructed low-interaction containerized decoys recording exploit traffic, authentication attempts, and shell payloads with automated Bash reporting.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-[#777777] pb-0.5 mb-1.5 text-black">
              Education
            </h2>

            <div className="mb-2">
              <div className="flex justify-between items-baseline font-semibold text-[13.5px]">
                <span>Bachelor of Computer Applications (BCA) — Cybersecurity</span>
                <span>2024 – 2027</span>
              </div>
              <div className="flex justify-between items-baseline italic text-[12.5px] text-[#444444]">
                <span>University of Engineering and Management • Jaipur, India</span>
                <span className="font-medium text-[#0071e3]">CGPA: 7.5 / 10.0</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-[13.5px]">
                <span>Class XII — Science &amp; Mathematics</span>
                <span>2024</span>
              </div>
              <div className="flex justify-between items-baseline italic text-[12.5px] text-[#444444]">
                <span>Gurukripa Public School • Sikar, India</span>
                <span>STEM Curriculum</span>
              </div>
            </div>
          </section>

          {/* Certifications & Distinctions */}
          <section>
            <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-[#777777] pb-0.5 mb-1.5 text-black">
              Certifications, Distinctions &amp; Languages
            </h2>
            <ul className="list-disc list-outside ml-4 text-[13px] text-[#222222] space-y-1">
              <li>
                <strong>Java FullStack Developer Specialization</strong> – Coursera &amp; Board Infinity (March 2026)
              </li>
              <li>
                <strong>Introduction to Cybersecurity</strong> – Coursera (2024)
              </li>
              <li>
                <strong>Top 10 Finalist — HackUEM Hackathon</strong> (Recognized for architecture design and time-bound prototype execution)
              </li>
              <li>
                <strong>Linguistic Fluency:</strong> English (C1 • Professional Working), Hindi (C2 • Native)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
