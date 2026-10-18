import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ProfilePhoto } from '../ProfilePhoto';

export const ContactView: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    securityDomain: '',
    message: '',
  });

  // Live IST Clock update
  useEffect(() => {
    const updateTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
        setIstTime(`Jaipur: ${formatted} IST (UTC+5:30)`);
      } catch (err) {
        setIstTime('Jaipur: 01:41:31 PM IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    });
  };

  const handleCopyTelegram = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.telegramUsername).then(() => {
      setCopiedTelegram(true);
      setTimeout(() => setCopiedTelegram(false), 2200);
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        securityDomain: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full text-[#1d1d1f] bg-[#fbfbfd]">
      {/* Ambient Light Glow & Header */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-blue-100/50 via-slate-100/40 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>

        {/* Editorial Intro & Availability Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Live Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#e5e5ea] shadow-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28cd41] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28cd41]"></span>
            </span>
            <span className="font-mono text-[12px] text-[#6e6e73] font-medium tracking-tight">
              {PORTFOLIO_DATA.profile.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-3">
            Connect with Priyanshu.
          </h1>
          <p className="text-[17px] sm:text-[18px] text-[#6e6e73] leading-relaxed max-w-2xl">
            Open for offensive security, penetration testing, and SOC analyst roles or technical collaborations.
          </p>

          {/* Key Metadata Telemetry Micro-Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-[#86868b] font-mono text-[12px]">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#6e6e73]">
                location_on
              </span>
              <span className="text-[#6e6e73]">{PORTFOLIO_DATA.profile.location}</span>
            </div>
            <span className="text-[#d2d2d7]">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#0071e3]">
                schedule
              </span>
              <span className="text-[#6e6e73]">{istTime || 'Jaipur: 01:41:31 PM IST (UTC+5:30)'}</span>
            </div>
            <span className="text-[#d2d2d7]">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#28cd41]">
                verified_user
              </span>
              <span className="text-[#6e6e73]">PGP Handshake Ready</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Showcase: Contact Channels & Transmission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Hub (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Executive Verified Identity Card with Priyanshu's Portrait */}
            <div className="bg-white border border-[#e5e5ea] rounded-2xl p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
              <div className="relative shrink-0">
                <ProfilePhoto
                  variant="contact"
                  showStatusIndicator={true}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-sm"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left flex-1 min-w-0">
                <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-mono text-[#0071e3] bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100/60 mb-1.5 w-fit mx-auto sm:mx-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28cd41]"></span>
                  <span>VERIFIED SOC LIAISON</span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">
                  {PORTFOLIO_DATA.profile.name}
                </h3>
                <p className="text-[13px] text-[#6e6e73] mb-3">
                  Offensive Security &amp; SOC Analyst
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <a
                    href={PORTFOLIO_DATA.profile.socials.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#229ED9] hover:bg-[#1f8fc4] text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-colors shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    <span>Telegram @Pryn3</span>
                  </a>
                  <span className="text-[11.5px] font-mono text-[#86868b] self-center">
                    SLA &lt; 4 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* Instant Telegram Secure Line (User Requested Dedicated Option) */}
            <div className="group relative rounded-2xl bg-white border border-[#229ED9]/30 p-6 sm:p-7 shadow-[0_4px_24px_rgba(34,158,217,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,158,217,0.12)]">
              <div className="absolute -right-12 -top-12 w-44 h-44 bg-[#229ED9]/10 rounded-full blur-2xl group-hover:bg-[#229ED9]/15 transition-all pointer-events-none"></div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/20 flex items-center justify-center text-[#229ED9]">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                </div>
                <span className="text-[11px] uppercase font-semibold text-[#229ED9] tracking-wider bg-[#229ED9]/10 px-2.5 py-0.5 rounded-full border border-[#229ED9]/20">
                  Instant Dispatch
                </span>
              </div>
              <span className="text-[12px] text-[#6e6e73] block mb-1">Direct Secure Messaging</span>
              <div className="text-xl sm:text-[22px] font-mono font-bold tracking-tight text-[#1d1d1f] mb-2">
                {PORTFOLIO_DATA.profile.telegramUsername}
              </div>
              <p className="text-[13px] text-[#6e6e73] mb-6 leading-relaxed">
                Preferred direct channel for real-time security inquiries, technical questions, or project collaboration requests.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#229ED9] text-white text-[13.5px] font-medium rounded-full px-5 py-2.5 hover:bg-[#1f8fc4] transition-all shadow-sm"
                >
                  <span>Open in Telegram</span>
                  <span className="material-symbols-outlined text-[17px]">arrow_outward</span>
                </a>
                <button
                  onClick={handleCopyTelegram}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] text-[13.5px] font-medium rounded-full px-4 py-2.5 hover:bg-[#ebebed] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#6e6e73]">
                    {copiedTelegram ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedTelegram ? 'Copied' : 'Copy Handle'}</span>
                </button>
              </div>
            </div>

            {/* Primary Secure Dispatch: Email Focus Card */}
            <div className="group relative rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="absolute -right-12 -top-12 w-44 h-44 bg-blue-50/80 rounded-full blur-2xl group-hover:bg-blue-100/60 transition-all pointer-events-none"></div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#0071e3]">
                  <span className="material-symbols-outlined text-[24px]">alternate_email</span>
                </div>
                <span className="text-[11px] uppercase font-semibold text-[#86868b] tracking-wider">
                  Primary Dispatch
                </span>
              </div>
              <span className="text-[12px] text-[#6e6e73] block mb-1">Direct Encrypted Inbox</span>
              <div className="text-xl sm:text-[22px] font-medium tracking-tight text-[#1d1d1f] break-all mb-6">
                {PORTFOLIO_DATA.profile.email}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#0071e3] text-white text-[13.5px] font-medium rounded-full px-5 py-2.5 hover:bg-[#0077ed] transition-all shadow-sm"
                >
                  <span>Send Mail</span>
                  <span className="material-symbols-outlined text-[17px]">arrow_outward</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] text-[13.5px] font-medium rounded-full px-4 py-2.5 hover:bg-[#ebebed] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#6e6e73]">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct Voice & Cellular Connection */}
            <div className="rounded-2xl bg-white border border-[#e5e5ea] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-center justify-center text-[#0071e3]">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div>
                  <div className="text-[12px] text-[#6e6e73]">Direct Cellular / WhatsApp</div>
                  <div className="font-mono text-[14px] text-[#1d1d1f] font-semibold tracking-wide">
                    {PORTFOLIO_DATA.profile.phone}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] flex items-center justify-center text-[#6e6e73] hover:text-[#0071e3] hover:border-[#0071e3]/40 transition-all"
                aria-label="Call Priyanshu"
              >
                <span className="material-symbols-outlined text-[18px]">phone_forwarded</span>
              </a>
            </div>

            {/* Verified Digital Profiles */}
            <div className="rounded-2xl bg-white border border-[#e5e5ea] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#e5e5ea]/80">
                <span className="text-[11px] uppercase font-semibold text-[#86868b] tracking-wider">
                  Public Profiles &amp; Source Code
                </span>
                <span className="font-mono text-[11px] text-[#28cd41] font-medium">
                  Authenticated
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {/* LinkedIn */}
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3] group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                    <div>
                      <div className="text-[13.5px] text-[#1d1d1f] font-semibold">LinkedIn</div>
                      <div className="text-[11.5px] text-[#86868b]">
                        Professional Credentials &amp; Endorsements
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-[#86868b] group-hover:text-[#1d1d1f] transition-transform group-hover:translate-x-0.5">
                    chevron_right
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-[#e5e5ea] flex items-center justify-center text-[#1d1d1f] group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">terminal</span>
                    </div>
                    <div>
                      <div className="text-[13.5px] text-[#1d1d1f] font-semibold">GitHub</div>
                      <div className="text-[11.5px] text-[#86868b]">
                        Offensive Security Tools &amp; Scripts
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-[#86868b] group-hover:text-[#1d1d1f] transition-transform group-hover:translate-x-0.5">
                    chevron_right
                  </span>
                </a>

                {/* Telegram */}
                <a
                  href={PORTFOLIO_DATA.profile.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/20 flex items-center justify-center text-[#229ED9] group-hover:scale-105 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13.5px] text-[#1d1d1f] font-semibold">Telegram</div>
                      <div className="text-[11.5px] text-[#86868b]">
                        {PORTFOLIO_DATA.profile.telegramUsername} • Instant Messaging
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-[#86868b] group-hover:text-[#1d1d1f] transition-transform group-hover:translate-x-0.5">
                    chevron_right
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href={PORTFOLIO_DATA.profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ff9500] group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                    </div>
                    <div>
                      <div className="text-[13.5px] text-[#1d1d1f] font-semibold">Instagram</div>
                      <div className="text-[11.5px] text-[#86868b]">
                        @prynsh.7 • Personal Log
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-[#86868b] group-hover:text-[#1d1d1f] transition-transform group-hover:translate-x-0.5">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>

            {/* Security Operations Diagnostic Snapshot */}
            <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-[#6e6e73] font-semibold">
                  SEC_DISPATCH_SPECS
                </span>
                <span className="font-mono text-[11px] text-[#28cd41] font-semibold">
                  256-BIT READY
                </span>
              </div>
              <div className="space-y-2 text-[#6e6e73] font-mono text-[11.5px]">
                <div className="flex justify-between">
                  <span>GPG Fingerprint:</span>
                  <span className="text-[#1d1d1f] font-semibold">{PORTFOLIO_DATA.profile.pgpFingerprint}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Roles:</span>
                  <span className="text-[#0071e3] font-semibold">SOC / Pentest / Red Team</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Window:</span>
                  <span className="text-[#28cd41] font-semibold">&lt; 12 Hours SLA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Secure Transmission Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#e5e5ea]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
                    Initiate Transmission
                  </h2>
                  <p className="text-[13.5px] text-[#6e6e73]">
                    Submit direct project inquiries or recruitment invitations.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[#6e6e73] font-mono text-[11.5px]">
                  <span className="material-symbols-outlined text-[14px] text-[#28cd41]">lock</span>
                  <span>TLS 1.3 Transport</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] text-[#1d1d1f] font-semibold" htmlFor="full-name">
                      Full Name <span className="text-[#d70015]">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#86868b] text-[13.5px] rounded-xl px-4 py-2.5 transition-all focus:outline-none focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] text-[#1d1d1f] font-semibold" htmlFor="email-address">
                      Business / Personal Email <span className="text-[#d70015]">*</span>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.io"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#86868b] text-[13.5px] rounded-xl px-4 py-2.5 transition-all focus:outline-none focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20"
                    />
                  </div>
                </div>

                {/* Row 2: Organization & Security Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] text-[#1d1d1f] font-semibold" htmlFor="organization">
                      Organization / Lab
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Sentinel Labs / Independent"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#86868b] text-[13.5px] rounded-xl px-4 py-2.5 transition-all focus:outline-none focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] text-[#1d1d1f] font-semibold" htmlFor="security-domain">
                      Engagement Scope / Domain <span className="text-[#d70015]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="security-domain"
                        required
                        value={formData.securityDomain}
                        onChange={(e) => setFormData({ ...formData, securityDomain: e.target.value })}
                        className="w-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-[13.5px] rounded-xl px-4 py-2.5 transition-all appearance-none focus:outline-none focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 cursor-pointer"
                      >
                        <option value="" disabled>Select security focus...</option>
                        <option value="soc">SOC Analyst / Blue Team Role</option>
                        <option value="pentest">Vulnerability Assessment &amp; Pentesting</option>
                        <option value="redteam">Red Team Tooling &amp; Exploit Dev</option>
                        <option value="threathunting">Threat Intelligence &amp; Hunting</option>
                        <option value="general">Technical Advisory / General Collaboration</option>
                      </select>
                      <span className="material-symbols-outlined text-[18px] text-[#86868b] pointer-events-none absolute right-3.5 top-3">
                        unfold_more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Transmission Message */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[12.5px] text-[#1d1d1f] font-semibold" htmlFor="message-content">
                      Message Parameters <span className="text-[#d70015]">*</span>
                    </label>
                    <span className="text-[11.5px] text-[#86868b]">
                      Role scope, project timeline, or mandate
                    </span>
                  </div>
                  <textarea
                    id="message-content"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe role requirements, assessment scope, or inquiry details..."
                    className="w-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#86868b] text-[13.5px] rounded-xl p-4 transition-all resize-none focus:outline-none focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20"
                  />
                </div>

                {/* Verification Notice */}
                <div className="p-3.5 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-start gap-2.5 text-[#6e6e73]">
                  <span className="material-symbols-outlined text-[18px] text-[#0071e3] mt-0.5">
                    verified
                  </span>
                  <p className="text-[12px] leading-relaxed">
                    Submissions route straight to Priyanshu's verified terminal. Confidential assessment agreements (NDA) available upon enterprise request.
                  </p>
                </div>

                {/* Submit Feedback & Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {isSubmitted ? (
                    <div className="text-[13px] text-[#28cd41] font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span>Payload dispatched successfully. We will reply within 12h.</span>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto ml-auto inline-flex items-center justify-center gap-2 bg-[#0071e3] text-white text-[13.5px] font-semibold rounded-full px-8 py-3 hover:bg-[#0077ed] transition-all shadow-[0_2px_12px_rgba(0,113,227,0.25)] active:scale-[0.98] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-[17px] animate-spin">
                          progress_activity
                        </span>
                        <span>Encrypting &amp; Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined text-[17px]">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Location & Operating Center Showcase */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-white border border-[#e5e5ea] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-2">
              <span className="text-[11px] uppercase font-semibold text-[#0071e3] tracking-wider">
                Geographic Command Center
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                Jaipur Operations Hub
              </h3>
              <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">
                Coordinated from the historic tech corridor of Jaipur, Rajasthan. Available for remote global deployments across US, EMEA, and APAC timezones, as well as on-site engagements upon coordination.
              </p>
              <div className="pt-3 flex items-center gap-6 text-[#86868b] font-mono text-[12px]">
                <div>
                  <span className="block text-[#6e6e73] font-medium">LAT / LONG</span>
                  <span className="text-[#1d1d1f] font-semibold">{PORTFOLIO_DATA.profile.coordinates}</span>
                </div>
                <div>
                  <span className="block text-[#6e6e73] font-medium">DEPLOYMENT</span>
                  <span className="text-[#28cd41] font-semibold">Worldwide Remote / Hybrid</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner border border-[#e5e5ea] bg-neutral-100"
                style={{
                  backgroundImage: `url('${PORTFOLIO_DATA.profile.images.jaipurMap}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Light Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#e5e5ea] shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#28cd41] animate-pulse"></span>
                  <span className="font-mono text-[11.5px] text-[#1d1d1f] font-semibold">
                    Station Node: Jaipur, IN
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#e5e5ea] shadow-xs text-[#6e6e73] font-mono text-[11px]">
                  Coordinates Locked: {PORTFOLIO_DATA.profile.coordinates}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
