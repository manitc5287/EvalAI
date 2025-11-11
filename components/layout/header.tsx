'use client';

import { Bell, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Search removed per latest design spec (no search bar on dashboard/header)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0F1C]/80 border-b border-white/10">
      <div className="px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
          {/* Brand text per provided design */}
          <span className="text-white font-semibold text-base">EvalAI</span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-white/5 rounded-lg transition-all group">
            <Bell className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0A0F1C]" />
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-white/5 rounded-lg transition-all group hidden sm:block">
            <Settings className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
          </button>

          {/* User Profile */}
          <div className="hidden sm:flex items-center gap-3 pl-3 ml-2 border-l border-white/10">
            <div className="text-right">
              <p className="text-white text-sm font-medium">Admin User</p>
              <p className="text-muted-foreground text-xs">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
              <span className="text-[#0A0F1C] font-semibold text-sm">AD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 p-4 bg-[#0A0F1C]">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
              <span className="text-[#0A0F1C] font-semibold text-sm">AD</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Admin User</p>
              <p className="text-muted-foreground text-xs">admin@evalai.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

