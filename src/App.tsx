/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { OverviewView } from './components/views/OverviewView';
import { ProjectsView } from './components/views/ProjectsView';
import { SkillsView } from './components/views/SkillsView';
import { ExperienceView } from './components/views/ExperienceView';
import { CertificationsView } from './components/views/CertificationsView';
import { ContactView } from './components/views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Synchronize active tab with URL hash for deep linking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      const validTabs: NavTab[] = [
        'overview',
        'experience',
        'projects',
        'skills',
        'certifications',
        'contact',
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    // Check initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1d1d1f]">
      {/* Cupertino Top Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Screen Body */}
      <main className="w-full pt-12 flex-1">
        {activeTab === 'overview' && (
          <OverviewView
            onTabChange={handleTabChange}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />
        )}
        {activeTab === 'experience' && (
          <ExperienceView
            onTabChange={handleTabChange}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />
        )}
        {activeTab === 'projects' && (
          <ProjectsView onTabChange={handleTabChange} />
        )}
        {activeTab === 'skills' && (
          <SkillsView onTabChange={handleTabChange} />
        )}
        {activeTab === 'certifications' && (
          <CertificationsView
            onTabChange={handleTabChange}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />
        )}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Cupertino Global Directory Footer */}
      <Footer
        onTabChange={handleTabChange}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
