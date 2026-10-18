import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { NavTab } from '../Navbar';

interface CertificationsViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const CertificationsView: React.FC<CertificationsViewProps> = ({ onTabChange, onOpenResume }) => {
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
                Accreditations &amp; Recognition
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
              Certifications &amp; Distinctions.
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#6e6e73] mt-2 leading-relaxed">
              Standardized industry credentials, competitive hackathon awards, and verified language proficiencies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Java FullStack */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e5ea] shadow-sm flex flex-col justify-between hover:border-[#b0b0b5] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3] mb-4">
                <span className="material-symbols-outlined text-[24px]">layers</span>
              </div>
              <span className="font-mono text-[11px] text-[#0071e3] uppercase font-bold tracking-wider">
                Target / Credential
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mt-1 mb-2">
                Java FullStack Developer Specialization
              </h3>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed mb-4">
                Coursera &amp; Board Infinity curriculum covering enterprise Java backends, Spring Boot, REST APIs, and microservice architectures.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[12px] font-mono text-[#86868b]">
              <span>ISSUANCE</span>
              <span className="text-[#0071e3] font-bold">March 2026</span>
            </div>
          </div>

          {/* Card 2: Intro to Cybersecurity */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e5ea] shadow-sm flex flex-col justify-between hover:border-[#b0b0b5] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-[#28cd41] mb-4">
                <span className="material-symbols-outlined text-[24px]">security</span>
              </div>
              <span className="font-mono text-[11px] text-[#28cd41] uppercase font-bold tracking-wider">
                Verified Complete
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mt-1 mb-2">
                Introduction to Cybersecurity
              </h3>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed mb-4">
                Foundational defense concepts, cryptography primitives, perimeter security protocols, and threat vectors on Coursera.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[12px] font-mono text-[#86868b]">
              <span>ISSUED</span>
              <span className="text-[#1d1d1f] font-bold">2024</span>
            </div>
          </div>

          {/* Card 3: HackUEM Finalist */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e5ea] shadow-sm flex flex-col justify-between hover:border-[#b0b0b5] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#f56300] mb-4">
                <span className="material-symbols-outlined text-[24px]">military_tech</span>
              </div>
              <span className="font-mono text-[11px] text-[#0071e3] uppercase font-bold tracking-wider">
                Competitive Distinction
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mt-1 mb-2">
                Top 10 Finalist — HackUEM
              </h3>
              <p className="text-[13.5px] text-[#6e6e73] leading-relaxed mb-4">
                Recognized for resilient system architecture and rapid time-bound prototype execution in an institutional hackathon.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[12px] font-mono text-[#86868b]">
              <span>ORGANIZER</span>
              <span className="text-[#1d1d1f] font-bold">UEM Jaipur</span>
            </div>
          </div>

          {/* Card 4: Linguistic Fluency */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e5ea] shadow-sm flex flex-col justify-between hover:border-[#b0b0b5] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#0071e3] mb-4">
                <span className="material-symbols-outlined text-[24px]">translate</span>
              </div>
              <span className="font-mono text-[11px] text-[#0071e3] uppercase font-bold tracking-wider">
                Communication Protocol
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mt-1 mb-2">
                Linguistic Fluency
              </h3>
              <div className="space-y-2 mt-2 mb-4">
                <div className="flex justify-between items-center text-[13px] bg-[#f5f5f7] p-2 rounded-lg">
                  <span className="text-[#1d1d1f] font-semibold">English</span>
                  <span className="font-mono text-[11px] text-[#0071e3] bg-white px-2 py-0.5 rounded border border-[#e5e5ea] font-bold">
                    C1 • Working
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] bg-[#f5f5f7] p-2 rounded-lg">
                  <span className="text-[#1d1d1f] font-semibold">Hindi</span>
                  <span className="font-mono text-[11px] text-[#28cd41] bg-white px-2 py-0.5 rounded border border-[#e5e5ea] font-bold">
                    C2 • Native
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#e5e5ea] flex justify-between items-center text-[12px] font-mono text-[#86868b]">
              <span>CEFR STANDARD</span>
              <span className="text-[#1d1d1f] font-bold">Bilingual Tech</span>
            </div>
          </div>
        </div>

        {/* Academic Baseline Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e5e5ea] shadow-sm">
          <div className="mb-6">
            <span className="text-[12px] uppercase font-semibold text-[#0071e3] tracking-wider">
              Academic Degree &amp; Core STEM
            </span>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mt-1">
              Educational Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fbfbfd] p-6 rounded-xl border border-[#e5e5ea]">
              <span className="text-[11px] uppercase font-semibold text-[#0071e3] font-mono">
                2024 – 2027 (ACTIVE)
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mt-1">
                Bachelor of Computer Applications (BCA) — Cybersecurity
              </h3>
              <p className="text-[14px] text-[#6e6e73] mt-1 mb-3">
                University of Engineering and Management • Jaipur, India
              </p>
              <div className="flex items-center gap-2 text-[#0071e3] font-mono text-[13px] font-bold">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Cumulative GPA: 7.5 / 10.0</span>
              </div>
            </div>

            <div className="bg-[#fbfbfd] p-6 rounded-xl border border-[#e5e5ea]">
              <span className="text-[11px] uppercase font-semibold text-[#86868b] font-mono">
                2024 GRADUATE
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mt-1">
                Class XII — Science &amp; Mathematics
              </h3>
              <p className="text-[14px] text-[#6e6e73] mt-1 mb-3">
                Gurukripa Public School • Sikar, India
              </p>
              <div className="flex items-center gap-2 text-[#28cd41] font-mono text-[13px] font-bold">
                <span className="material-symbols-outlined text-[18px]">school</span>
                <span>STEM Curriculum Completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Resume Action */}
        <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#1d1d1f]">
              Need a formal, printable version of these credentials?
            </h3>
            <p className="text-[13px] text-[#6e6e73]">
              View Priyanshu's verified curriculum vitae with full contact and project history.
            </p>
          </div>
          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-all shadow-sm"
          >
            Open Printable CV
          </button>
        </div>
      </div>
    </div>
  );
};
