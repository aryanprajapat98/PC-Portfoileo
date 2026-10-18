/**
 * Priyanshu Choudhary - Portfolio & Telemetry Dataset
 * Grounded in uploaded HTML specifications, resume, and Cupertino design system
 */

export interface ProjectItem {
  id: string;
  numberTag: string;
  category: 'Offensive Tooling' | 'Binary Exploitation' | 'Live Telemetry';
  title: string;
  tagline: string;
  description: string;
  runtimeBadge: string;
  statusBadge: string;
  techStack: string[];
  metrics: { label: string; value: string; subtext: string }[];
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency: number;
  highlight: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Priyanshu Choudhary',
    role: 'Cybersecurity Undergraduate & SOC Analyst',
    tagline: 'Offensive Security. Threat Correlation. Reverse Engineering.',
    executiveSummary:
      'Cybersecurity undergraduate (BCA) targeting offensive security or SOC analyst roles. Practical experience in vulnerability assessment, threat correlation, and reverse engineering, backed by a 3-month cybersecurity internship and practical red team tooling. Competent across Linux environments, Python scripting, network traffic analysis, and standard exploit frameworks.',
    location: 'Jaipur, Rajasthan, India',
    coordinates: '26.9124° N, 75.7873° E',
    email: 'priyanshukuri9@gmail.com',
    phone: '+91 8107994444',
    pgpKey: '0x8F32B74A',
    pgpFingerprint: 'E204 892B 7A01 C18E',
    timeZone: 'Asia/Kolkata',
    timeZoneLabel: 'UTC+5:30 (IST)',
    status: 'Currently open to Summer & Full-time Security Roles',
    availabilityNote: 'Open to SOC Analyst, Offensive Security, or Security Engineering teams. Remote & Worldwide Relocation ready.',
    socials: {
      linkedin: 'https://linkedin.com/in/priyanshu-choudhary-756136323',
      github: 'https://github.com/priyanshuchoudhary9',
      instagram: 'https://instagram.com/prynsh.7',
      telegram: 'https://t.me/Pryn3',
    },
    telegramUsername: '@Pryn3',
    images: {
      profilePhoto: '/priyanshu_photo.png',
      monogramLogo:
        'https://lh3.googleusercontent.com/aida/AEtjO1VDwBf81_hQN_UVcOyh3ffe-hdXEzQnojGlzw6qCfcRvR0OgLPWZU_2JpqbD84SRPp_9lLrBNrlCILtRzN4pjx964hcCsUAWgEi2ne337A8W55yaIeUWuzpHLFTLePtasVCFGXRGDaLhU2xcCqcFa3ZqoWgyyhzlNf467fkWJ7cEDiqQHye-Hs0dREq0ZXGlOv2SRx7GJecgCX5H4bJaZn7BSu6sJ29psS7BJb_iWZOh0ZzaGFmxQBTED0',
      networkPacketAnatomy:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB9hPhMQoGR-5xjYREtLRXQpNZQXfLfxIjd1BfRGoPCmL6ietbZ9CFdxEpGCmAagItjeAWD_z2oi40T45mvAMZMknhMrBfuuN_opWQIhNoPqexDLOvShTMuhSjG0MVXdLggzQ2r9KW45Ut9TlkF59IRK0ToNdKdGM7CTy4PF0N_2hccOH-5puqQrlOGeb4iyRiS4XghFse137xWR_wx_EUyVOSw-RYn0Gw9JZ7vk-L6EMk23t_fNkU99w',
      kernelExploitAnalysis:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDeUwXAfh7t1Eh8eyNOsDt4QQ7w4fcrZVNuCtiOMExxeQpg-ZRZ1i_Mc-dU_cnSrEF4-O3muOp7rb8NjcIJvMUJ4tYpkn6d_gej5ecMuoEYOWok9Ua3RZZiUWNBoHJ3LJQ6JTZ8OkImfu8u4dVzWzMNL6elEjMxbc-y16ypO3KtrTaVe5du4dX-7PWET9H8KMdGtaipQMFeteBBF6__9J27LMxlOyTHx_qxDwvgGRPkh5RwXjA2ZBzkSQ',
      incidentCorrelationResponse:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDTnU4nEHV9QyfRmLMGAYwMgQ6mtS2wG9HONnP7dUqXdbYNcaLDNATMTRwrLxi6QzDNMiEoLLC1QOzbzqLtZZ41Ta9WPA7aalD_C3pOo7Kov_TVjTbaJY2yZ1MWAPulKo80pMfP9dHA17H0nqpST9iTvThBbiULQxuv2NlEeud_o3DzscVR7JIpqEWAJ0NBQmWYJ4o2UCYAFMG3JQdsTnwfPbz5TJCpmcVhEdPj2Q3whooSa45CsN1Kdw',
      jaipurMap:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAG5PFnDY_KbGMAtDwxKCFMDJqPVe4Rxw6HQqba7-udneLHGuSq9HhbIqJCS4F3_q7L7yhYJ8f19J56hQuZWmbMEdbN7J4aXhKuGFcWUXXe49Yt2iqqQMOsxmqxQQPt6vLwhEI1AWxNmRqEBG6M-NFM8AnkCG-4vMbib7WYljiYezIhRBRW1l-kLUWQQH6d0dn8Bdr4pIvXz5O4nzleSgOkg4WeOdDxuWA9BrJoFUr_b_EmjT4_a8EFA',
    },
  },

  statHighlights: [
    {
      label: 'Arsenal',
      value: '4 Suites',
      subtext: 'Featured Security Engines',
      icon: 'terminal',
      accentColor: 'text-[#0071e3]',
    },
    {
      label: 'Fieldwork',
      value: '3 Months',
      subtext: 'Threat Assessment & Hardening',
      icon: 'security',
      accentColor: 'text-[#0077ed]',
    },
    {
      label: 'Academics',
      value: '7.5 CGPA',
      subtext: 'BCA Cybersecurity',
      icon: 'school',
      accentColor: 'text-[#1d1d1f]',
    },
    {
      label: 'Recognition',
      value: 'Top 10',
      subtext: 'Finalist • HackUEM Flag',
      icon: 'military_tech',
      accentColor: 'text-[#f56300]',
    },
  ],

  projects: [
    {
      id: 'net-pentest-suite',
      numberTag: 'SEC-AUDIT // 01',
      category: 'Offensive Tooling' as const,
      title: 'External Network Penetration Testing Suite',
      tagline: 'Multi-threaded modular recon orchestrator executing socket-level port enumeration and CVE-heuristic payload mapping.',
      description:
        'Automated port enumeration, service discovery, and banner grabbing across enterprise subnet topologies. Generates structured, prioritized remediation reports pinpointing critical perimeter exposure vectors.',
      runtimeBadge: 'ACTIVE RECON SUITE',
      statusBadge: 'ACTIVE RUNNER',
      techStack: ['Python', 'Kali Linux', 'Metasploit', 'Nmap NSE', 'Socket API'],
      metrics: [
        { label: 'Target Scan Speed', value: '1.8s', subtext: 'Per /24 CIDR block' },
        { label: 'NSE Detection Scripts', value: '140+', subtext: 'Custom written checks' },
        { label: 'Telemetry Output', value: 'JSON / MD', subtext: 'SIEM ready pipelines' },
        { label: 'Audit Compliance', value: 'CVSS v3.1', subtext: 'Automated remediation' },
      ],
    },
    {
      id: 'threat-detection-engine',
      numberTag: 'DETECTION-CORE // 02',
      category: 'Live Telemetry' as const,
      title: 'Automated Threat Detection Engine',
      tagline: 'Real-time deep packet inspection pipeline parsing live traffic flows for brute-force signatures and scanning probes.',
      description:
        'High-throughput packet analysis pipeline parsing live traffic flows for brute-force signatures and scanning probes. Indexes anomalous event records directly into Elasticsearch for real-time Kibana query triage.',
      runtimeBadge: 'GOLANG RUNTIME',
      statusBadge: '10 GbE INGESTION',
      techStack: ['Go', 'Wireshark / PCAP', 'ELK Stack', 'Python', 'BPF Filters'],
      metrics: [
        { label: 'Packet Ingestion Rate', value: '34.8 MB/s', subtext: 'Zero-copy ring buffer' },
        { label: 'Events Per Second', value: '41,209 EPS', subtext: 'Peak throughput' },
        { label: 'Correlation Latency', value: '< 4.2ms', subtext: 'Rule engine match' },
        { label: 'Anomaly Spikes', value: '+18.4%', subtext: 'Live heuristic threshold' },
      ],
    },
    {
      id: 'ransomware-decryptor',
      numberTag: 'MALWARE-ANALYSIS // 03',
      category: 'Binary Exploitation' as const,
      title: 'Ransomware Decryption & Payload Analysis Tool',
      tagline: 'Static binary disassembly of malicious PE executables recovering cryptographic key schedules from process memory.',
      description:
        'Disassembled malicious PE binaries to uncover structural cryptographic flaws in custom file-locking implementations. Built a high-performance offline extraction utility in C++ that restores encrypted user assets without ransom compliance.',
      runtimeBadge: 'REVERSE ENG',
      statusBadge: 'PE32+ DISASSEMBLY',
      techStack: ['C++', 'C', 'Ghidra', 'x86_64 ASM', 'IDA Pro'],
      metrics: [
        { label: 'Target Files Restored', value: '100%', subtext: 'Zero private key cost' },
        { label: 'Seed Entropy Space', value: '2^32', subtext: 'Exhausted in ~14 mins' },
        { label: 'Extracted Format', value: 'C / C++', subtext: 'Standalone tool binary' },
        { label: 'Search Space', value: '< 300,000', subtext: 'Boot uptime window' },
      ],
    },
    {
      id: 'honeypot-telemetry-node',
      numberTag: 'DECEPTION-GRID // 04',
      category: 'Live Telemetry' as const,
      title: 'Honeypot Telemetry Node',
      tagline: 'Containerized decoy ecosystem masquerading as exposed enterprise infrastructure to capture live exploits.',
      description:
        'Constructed low-interaction containerized decoys recording exploit traffic, authentication attempts, and shell payloads. Automated protocol telemetry reports via scheduled Bash pipelines.',
      runtimeBadge: 'CONTAINER MESH',
      statusBadge: '6 NODES LIVE',
      techStack: ['Java', 'Docker', 'Wireshark', 'Bash', 'Cowrie SSH', 'Logstash'],
      metrics: [
        { label: 'Exploits Caught', value: '12,480', subtext: 'Worldwide sensors' },
        { label: 'Unique Threat Actors', value: '843', subtext: 'Fingerprinted IPs' },
        { label: 'Zero-Day Artifacts', value: '4 Isolated', subtext: 'Quarantined SHA-256' },
        { label: 'Auto-Cycle Rate', value: '6 Hours', subtext: 'Zero host contamination' },
      ],
    },
  ],

  languages: [
    { name: 'Python', role: 'Automation, Sockets & Threat Scanners', proficiency: 92 },
    { name: 'Bash', role: 'System Scripting & Pipe Automation', proficiency: 88 },
    { name: 'C / C++', role: 'Memory Management, Reversing Foundations', proficiency: 82 },
    { name: 'Java', role: 'Full-Stack Architecture & Enterprise Backends', proficiency: 85 },
    { name: 'Go (Golang)', role: 'Concurrent Net-Scanners & Fast CLI Tools', proficiency: 76 },
    { name: 'SQL', role: 'Relational Schema Hardening & Injection Triage', proficiency: 84 },
  ],

  frameworksAndLibs: [
    { name: 'Scapy', desc: 'Packet crafting, sniffing, spoofing' },
    { name: 'Requests', desc: 'HTTP client automation, session states' },
    { name: 'Cryptography', desc: 'Symmetric ciphers, key derivation' },
    { name: 'Socket', desc: 'Raw transport layering, TCP listeners' },
  ],

  systemsAndPlatform: [
    { name: 'Linux', desc: 'Debian / Arch' },
    { name: 'Docker', desc: 'Isolation' },
    { name: 'ELK', desc: 'Telemetry' },
    { name: 'Git', desc: 'VCS Flow' },
  ],

  redTeamTools: [
    { name: 'Kali Linux', role: 'OS Environment' },
    { name: 'Metasploit', role: 'Exploitation' },
    { name: 'Ghidra', role: 'Reverse Eng.' },
    { name: 'Wireshark', role: 'PCAP Analysis' },
    { name: 'Nmap', role: 'Discovery / NSE' },
    { name: 'Burp Suite', role: 'Web App Proxy' },
    { name: 'Cobalt Strike', role: 'C2 Emulation' },
  ],

  coreCompetencies: [
    { name: 'Network Penetration Testing', tag: 'HIGH_CONF', icon: 'cell_tower' },
    { name: 'Malware Analysis', tag: 'STATIC / DYN', icon: 'bug_report' },
    { name: 'Traffic Inspection', tag: 'DEEP_FRAME', icon: 'stream' },
    { name: 'Vulnerability Assessment', tag: 'CVSS v3.1', icon: 'fact_check' },
    { name: 'Incident Triage', tag: 'RAPID_RESP', icon: 'local_fire_department' },
  ],

  experience: [
    {
      company: 'Eduversity',
      role: 'Cybersecurity Intern',
      track: 'Practical Threat Assessment & Hardening',
      duration: '3 Months Operational',
      dates: '2024',
      location: 'Jaipur, Rajasthan, India',
      scope: 'Controlled Red Team Scope',
      auditLogCmd: '$ nmap -sC -sV -p- -T4 --script vuln 10.14.0.0/24',
      findings: [
        'Audited network assets and internal endpoints to detect latent configuration weaknesses, unquoted service paths, and missing high-priority security updates.',
        'Conducted controlled penetration runs and service mapping utilizing Nmap, Metasploit, and deep frame analysis in Wireshark to isolate anomalous lateral movement patterns.',
        'Prepared vulnerability documentation and structured remediation guidance for technical leads, directly assisting in mitigation workflows and attack surface reduction.',
      ],
      tags: ['#PenetrationTesting', '#ThreatHardening', '#CVSS-Analysis', '#Nmap-NSE'],
    },
    {
      company: 'Algo Club',
      role: 'Core Member',
      track: 'Leadership & Peer Training',
      duration: '2024 – Present',
      dates: '2024 – Present',
      location: 'UEM Jaipur, India',
      scope: 'Active Student Chapter Contribution',
      description:
        'Leading institutional technology workshops, instilling secure software engineering habits early in the development lifecycle, and driving departmental hackathons.',
      focusVectors: [
        { title: 'Focus Vector 01', desc: 'Secure Coding Practices & OWASP Top 10 Awareness' },
        { title: 'Focus Vector 02', desc: 'Hackathon Execution & Rapid Architecture Mentorship' },
        { title: 'Focus Vector 03', desc: 'Algorithmic Rigor & Systems Optimization' },
      ],
      tags: ['#PeerMentorship', '#OWASP', '#SecureDev', '#Hackathons'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA) — Cybersecurity',
      institution: 'University of Engineering and Management',
      location: 'Jaipur, India',
      period: '2024 – 2027 (Active)',
      score: 'CGPA: 7.5 / 10.0',
      standing: 'In Good Academic Standing',
      description:
        'In-depth specialization emphasizing computer systems security, cryptography, operational network topologies, and systems programming paradigms.',
    },
    {
      degree: 'Class XII — Science & Mathematics',
      institution: 'Gurukripa Public School',
      location: 'Sikar, India',
      period: '2024',
      score: 'STEM Curriculum Completed',
      standing: 'Senior Secondary',
      description:
        'Core academic preparation in analytical mechanics, advanced calculus, linear algebra, and algorithmic logic.',
    },
  ],

  certifications: [
    {
      title: 'Java FullStack Developer Specialization',
      issuer: 'Coursera & Board Infinity',
      date: 'March 2026',
      badge: 'Target / Credential',
      icon: 'layers',
      type: 'Specialization',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Coursera',
      date: '2024',
      badge: 'Verified Complete',
      icon: 'security',
      type: 'Verified Course',
    },
    {
      title: 'Top 10 Finalist — HackUEM',
      issuer: 'UEM Jaipur',
      date: '2024',
      badge: 'Competitive Distinction',
      icon: 'military_tech',
      type: 'Distinction',
      note: 'Recognized for resilient system architecture and rapid time-bound prototype execution.',
    },
    {
      title: 'Linguistic Fluency',
      issuer: 'CEFR Standard',
      date: 'Bilingual Tech',
      badge: 'Communication Protocol',
      icon: 'translate',
      type: 'Languages',
      languages: [
        { lang: 'English', level: 'C1 • Prof. Working', color: 'text-primary' },
        { lang: 'Hindi', level: 'C2 • Native', color: 'text-status-secure' },
      ],
    },
  ],
};
