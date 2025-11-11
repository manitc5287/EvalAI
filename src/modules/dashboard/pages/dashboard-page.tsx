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
      <div className="space-y-6">
        {/* Header (Search removed; start with Dashboard heading) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl lg:text-4xl font-bold mb-2">Dashboard</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => refetch()}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-4 h-10 border border-white/10 text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-4 h-10 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 rounded-lg transition-all text-sm font-semibold">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title={STAT_LABELS.TOTAL_USERS}
            value={isLoading ? '...' : formatNumber(stats?.totalUsers || 0)}
            change={12.5}
            changeType="increase"
            icon={Users}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="up"
          />
          
          <StatsCard
            title={STAT_LABELS.TOTAL_EVALUATIONS}
            value={isLoading ? '...' : formatNumber(stats?.totalEvaluations || 0)}
            change={8.2}
            changeType="increase"
            icon={Activity}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="up"
          />
          
          <StatsCard
            title={STAT_LABELS.ACTIVE_MODELS}
            value={isLoading ? '...' : stats?.activeModels || 0}
            change={2.4}
            changeType="decrease"
            icon={Brain}
            iconColor="bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]"
            trend="down"
          />
          
          <StatsCard
            title={STAT_LABELS.AVERAGE_ACCURACY}
            value={isLoading ? '...' : formatPercentage(stats?.averageAccuracy || 0)}
            change={3.1}
            changeType="increase"
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
