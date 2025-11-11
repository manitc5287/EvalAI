'use client';

import { 
  Users, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Download, 
  RefreshCw,
  Activity,
  Zap
} from 'lucide-react';
import { StatsCard } from '../components/stats-card';
import { DashboardInsights } from '../components/dashboard-insights';
import { RecentActivityCard } from '../components/recent-activity-card';
import { useDashboardStats } from '../hooks/use-dashboard-stats';
import { formatNumber, formatPercentage } from '../lib/dashboard-helpers';
import { STAT_LABELS } from '../constants';

export default function DashboardPage() {
  const { stats, isLoading, error, refetch } = useDashboardStats();

  if (error) {
    return (
      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-4 border-red-500/50 bg-red-500/10">
            <p className="text-red-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">Dashboard</h1>
            <p className="text-[#B0B6C1]">Welcome back! Here's what's happening with your organization.</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
            <Zap className="w-4 h-4 mr-2" />
            Quick Start AI Setup
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Active Users"
            value="1,284"
            change="↑ 12% from last month"
            icon={Users}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="up"
          />
          
          <StatsCard
            title="Avg Skill Score"
            value="78.5"
            change="↑ 5.2 points"
            icon={TrendingUp}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="up"
          />
          
          <StatsCard
            title="Engagement Rate"
            value="85%"
            change="↑ 3% from last week"
            icon={Activity}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="up"
          />
          
          <StatsCard
            title="Token Usage"
            value="75K"
            change="↑ 25K remaining"
            icon={Zap}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="up"
          />
        </div>

        {/* Insights & Charts Section */}
        <DashboardInsights />

        {/* Recent Activity */}
        <RecentActivityCard />

      </div>
    </div>
  );
}
