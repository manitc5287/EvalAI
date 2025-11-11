"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Building2,
  Shield, 
  Target,
  FileText,
  Brain,
  ChartColumn,
  Bell,
  Lock,
  CreditCard,
  FileCheck,
  Plug,
  Code,
  Settings,
  ChevronLeft,
  X
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/users", icon: Users, label: "Users" },
  { href: "/departments", icon: Building2, label: "Departments" },
  { href: "/roles", icon: Shield, label: "Roles & Permissions" },
  { href: "/kpis", icon: Target, label: "KPI Management" },
  { href: "/assessments", icon: FileText, label: "Assessments" },
  { href: "/ai-management", icon: Brain, label: "AI Management" },
  { href: "/organization-setup", icon: Building2, label: "Organization Setup" },
  { href: "/reports", icon: ChartColumn, label: "Reports" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/security-compliance", icon: Lock, label: "Security & Compliance" },
  { href: "/billing-tokens", icon: CreditCard, label: "Billing & Tokens" },
  { href: "/audit-logs", icon: FileCheck, label: "Audit Logs" },
  { href: "/integrations", icon: Plug, label: "Integrations" },
  { href: "/developers-api", icon: Code, label: "Developers (API)" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ variant = "full", onNavigate }: { variant?: "full" | "icon"; onNavigate?: () => void }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const isCollapsed = variant === "icon" || collapsed;

  return (
    <aside
      className={cn(
        "h-screen z-40 border-r border-white/10 backdrop-blur-xl bg-[rgba(255,255,255,0.04)] transition-all duration-300 flex flex-col",
        "fixed top-0 left-0",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0A0F1C] font-bold text-lg">E</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <h1 className="text-white font-bold text-lg truncate">EvalAI</h1>
                <p className="text-muted-foreground text-xs truncate">Admin Panel</p>
              </div>
            )}
          </div>
          {/* Close button for mobile */}
          {!isCollapsed && (
            <button
              onClick={() => onNavigate?.()}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-all"
            >
              <X className="w-5 h-5 text-[#B0B6C1] hover:text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onNavigate?.()}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                  isActive
                    ? "bg-gradient-to-r from-[#00F5C6]/20 to-[#00AEEF]/20 text-[#00F5C6] shadow-lg shadow-[#00F5C6]/20"
                    : "text-[#B0B6C1] hover:text-white hover:bg-white/5",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "w-6 h-6")} aria-hidden="true" />
                {!isCollapsed && (
                  <span className="text-sm">{item.label}</span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Profile Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-all">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0A0F1C] font-semibold text-sm">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Admin User</p>
              <p className="text-muted-foreground text-xs truncate">admin@evalai.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Collapse Button - Desktop Only */}
      {variant === "full" && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-[#0A0F1C] border border-white/10 hidden lg:flex items-center justify-center hover:bg-white/5 transition-all"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className={cn("w-4 h-4 text-muted-foreground transition-transform", collapsed && "rotate-180")} />
        </button>
      )}
    </aside>
  );
}

