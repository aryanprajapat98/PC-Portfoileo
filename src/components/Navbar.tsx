import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

export type NavTab = 'overview' | 'experience' | 'projects' | 'skills' | 'certifications' | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="h-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleTabClick('overview')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
            aria-label="Priyanshu Choudhary Home"
          >
            <img
              alt="PC Monogram Logo"
              className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
              src={PORTFOLIO_DATA.profile.images.monogramLogo}
              onError={(e) => {
                // Resilient fallback in case CDN has issues
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-semibold text-[15px] sm:text-[16px] text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors whitespace-nowrap">
              {PORTFOLIO_DATA.profile.name}
            </span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`text-[13px] font-medium py-1 px-3 rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-black/[0.06] text-[#1d1d1f] font-semibold'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.03]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Telegram Quick Connect Pill */}
          <a
            href={PORTFOLIO_DATA.profile.socials.telegram}
            target="_blank"
            rel="noreferrer"
            title="Instant Telegram Message: @Pryn3"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#229ED9]/10 hover:bg-[#229ED9]/15 text-[#229ED9] text-[12px] font-medium border border-[#229ED9]/25 rounded-full px-3 py-1 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span>@Pryn3</span>
          </a>

          <button
            onClick={() => handleTabClick('contact')}
            className="hidden sm:inline-flex items-center justify-center bg-[#0071e3] text-white text-[13px] font-medium rounded-full px-4 py-1.5 hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
          >
            Get in Touch
          </button>

          <button
            onClick={onOpenResume}
            title="View & Download Resume"
            className="hidden lg:inline-flex items-center justify-center gap-1 bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-[12px] font-medium rounded-full px-3 py-1 hover:bg-[#e5e5ea] transition-all whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[15px] text-[#0071e3]">description</span>
            <span>Resume</span>
          </button>

          {/* User Profile Avatar with Online Pulse */}
          <div
            onClick={() => handleTabClick('contact')}
            title="Priyanshu Choudhary • Verified SOC Analyst (Click to View Profile & Contact)"
            className="relative cursor-pointer transition-transform hover:scale-105 shrink-0"
          >
            <ProfilePhoto variant="avatar" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#0071e3]/30" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#28cd41] ring-2 ring-white"></span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] flex items-center justify-center text-[#1d1d1f] hover:bg-[#e5e5ea] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[19px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-[#e5e5ea] px-4 py-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          {/* User Profile Header in Drawer */}
          <div className="flex items-center gap-3 p-2 mb-2 bg-[#f5f5f7] rounded-xl border border-[#e5e5ea]">
            <ProfilePhoto variant="badge" className="w-10 h-10 rounded-lg shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[13.5px] font-semibold text-[#1d1d1f] truncate">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-[11.5px] text-[#6e6e73] font-mono truncate">
                SOC Analyst • Jaipur
              </span>
            </div>
            <a
              href={PORTFOLIO_DATA.profile.socials.telegram}
              target="_blank"
              rel="noreferrer"
              title="Telegram @Pryn3"
              className="p-1.5 rounded-lg bg-[#229ED9]/10 text-[#229ED9] hover:bg-[#229ED9]/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-1 pb-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center justify-between text-left text-[14px] py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-black/[0.06] text-[#0071e3] font-semibold'
                      : 'text-[#1d1d1f] hover:bg-neutral-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#e5e5ea] flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.profile.socials.telegram}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#229ED9] text-white text-[13px] font-medium py-2 rounded-full hover:bg-[#1f8fc4] transition-colors shadow-xs"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              <span>Message on Telegram (@Pryn3)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-1.5 bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-[13px] font-medium py-2 rounded-full hover:bg-[#ebebed] transition-colors"
            >
              <span className="material-symbols-outlined text-[17px] text-[#0071e3]">description</span>
              <span>Open Resume Preview</span>
            </button>
            <button
              onClick={() => handleTabClick('contact')}
              className="w-full bg-[#0071e3] text-white text-[13px] font-medium py-2 rounded-full hover:bg-[#0077ed] transition-colors shadow-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
