'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Menu, X } from 'lucide-react';

export default function AppLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"></div>
            <span className="text-white">EvalAI</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center size-9 rounded-md text-white hover:bg-white/5 transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar - Only visible when menu is open */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-screen z-50">
          <Sidebar variant="full" onNavigate={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* Desktop Sidebar - Always visible on desktop */}
      <div className="hidden lg:block">
        <Sidebar variant="full" />
      </div>

      {/* Main Content offset for fixed sidebar */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Add top padding on mobile to account for fixed header */}
        <main className="flex-1 overflow-x-hidden pt-16 lg:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}

