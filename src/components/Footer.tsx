import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { NavTab } from './Navbar';

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange, onOpenResume }) => {
  return (
    <footer className="w-full bg-[#f5f5f7] border-t border-[#e5e5ea] text-[#6e6e73]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] uppercase font-semibold text-[#1d1d1f] tracking-wider">
              Intelligence &amp; Bio
            </span>
            <button
              onClick={() => onTabChange('overview')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => onTabChange('experience')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Career Trajectory
            </button>
            <button
              onClick={() => onTabChange('skills')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Security Toolchain
            </button>
            <button
              onClick={() => onTabChange('certifications')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Accreditations
            </button>
            <button
              onClick={onOpenResume}
              className="text-left text-[14px] text-[#0071e3] hover:text-[#0077ed] font-medium transition-colors"
            >
              Curriculum Vitae (CV)
            </button>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] uppercase font-semibold text-[#1d1d1f] tracking-wider">
              Offensive &amp; Defensive
            </span>
            <button
              onClick={() => onTabChange('projects')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Threat Intelligence Engines
            </button>
            <button
              onClick={() => onTabChange('projects')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Kernel Hardening Labs
            </button>
            <button
              onClick={() => onTabChange('projects')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Zero-Trust Architecture
            </button>
            <button
              onClick={() => onTabChange('projects')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Vulnerability Disclosures
            </button>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] uppercase font-semibold text-[#1d1d1f] tracking-wider">
              Specialized Fields
            </span>
            <span className="text-[14px] text-[#6e6e73]">Application Security</span>
            <span className="text-[14px] text-[#6e6e73]">Cloud Infrastructure Sec</span>
            <span className="text-[14px] text-[#6e6e73]">Cryptography &amp; PKI</span>
            <span className="text-[14px] text-[#6e6e73]">Penetration Testing</span>
            <span className="text-[14px] text-[#6e6e73]">Memory Disassembly</span>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] uppercase font-semibold text-[#1d1d1f] tracking-wider">
              Connect
            </span>
            <button
              onClick={() => onTabChange('contact')}
              className="text-left text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Encrypted Contact
            </button>
            <a
              href={PORTFOLIO_DATA.profile.socials.telegram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-left text-[14px] text-[#229ED9] hover:underline font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              <span>Telegram: @Pryn3</span>
            </a>
            <span className="font-mono text-[13px] text-[#0071e3] font-semibold">
              PGP: {PORTFOLIO_DATA.profile.pgpKey}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28cd41] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28cd41]"></span>
              </span>
              <span className="text-[12px] text-[#86868b] font-medium">System Node Online</span>
            </div>
            <div className="text-[12px] text-[#86868b] mt-1 font-mono">
              {PORTFOLIO_DATA.profile.coordinates}
            </div>
          </div>
        </div>

        {/* Security Notice Card */}
        <div className="bg-white border border-[#e5e5ea] p-4 sm:p-5 rounded-xl mb-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <p className="text-[12px] text-[#86868b] leading-relaxed">
            <strong className="text-[#1d1d1f] font-semibold">Security Notice:</strong> All research, exploit telemetry, security audit reports, and defensive playbooks hosted on this domain are curated strictly for non-adversarial educational and institutional defensive engineering purposes. All penetration assessments cited reflect authorized scope compliance.
          </p>
        </div>

        {/* Copyright and Legal Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#86868b] text-[12px] border-t border-[#e5e5ea]/80 pt-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-center md:text-left">
            <span className="text-[#6e6e73]">© 2025 Priyanshu Choudhary. All rights reserved.</span>
            <span className="text-[#d2d2d7] hidden sm:inline">•</span>
            <button
              onClick={() => onTabChange('overview')}
              className="hover:text-[#1d1d1f] transition-colors"
            >
              Security Policy
            </button>
            <span className="text-[#d2d2d7] hidden sm:inline">•</span>
            <button
              onClick={() => onTabChange('overview')}
              className="hover:text-[#1d1d1f] transition-colors"
            >
              Responsible Disclosure
            </button>
            <span className="text-[#d2d2d7] hidden sm:inline">•</span>
            <button
              onClick={() => onTabChange('contact')}
              className="hover:text-[#1d1d1f] transition-colors"
            >
              PGP Key Archive
            </button>
          </div>
          <div className="font-mono text-[12px] text-[#86868b]">
            Designed with Apple Minimalist Discipline
          </div>
        </div>
      </div>
    </footer>
  );
};
