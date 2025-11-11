'use client';

import { Plus, ChevronRight } from 'lucide-react';
import { KPIPackCard } from '../components/kpi-pack-card';
import { KPIRecommendations } from '../components/kpi-recommendations';
import { KPIListItem } from '../components/kpi-list-item';
import { KPISearchBar } from '../components/kpi-search-bar';
import { KPI, KPIPack } from '../types';

// Sample KPI Packs
const kpiPacks: KPIPack[] = [
  {
    id: '1',
    name: 'IT Support Pack',
    emoji: '🎯',
    description: 'Ticket resolution, response time, satisfaction',
    kpiCount: 12,
  },
  {
    id: '2',
    name: 'Sales Pack',
    emoji: '💰',
    description: 'Revenue, conversion, pipeline velocity',
    kpiCount: 8,
  },
  {
    id: '3',
    name: 'HR Pack',
    emoji: '👥',
    description: 'Retention, engagement, recruitment metrics',
    kpiCount: 10,
  },
  {
    id: '4',
    name: 'Engineering Pack',
    emoji: '💻',
    description: 'Code quality, deployment frequency, bug resolution',
    kpiCount: 15,
  },
];

// Sample Active KPIs
const activeKPIs: KPI[] = [
  {
    id: '1',
    name: 'Customer Satisfaction Score',
    department: 'Support',
    weight: 30,
    status: 'active',
    isAIGenerated: true,
  },
  {
    id: '2',
    name: 'First Response Time',
    department: 'Support',
    weight: 25,
    status: 'active',
    isAIGenerated: true,
  },
  {
    id: '3',
    name: 'Ticket Resolution Rate',
    department: 'Support',
    weight: 20,
    status: 'active',
    isAIGenerated: false,
  },
  {
    id: '4',
    name: 'Sales Conversion Rate',
    department: 'Sales',
    weight: 35,
    status: 'active',
    isAIGenerated: true,
  },
  {
    id: '5',
    name: 'Pipeline Velocity',
    department: 'Sales',
    weight: 25,
    status: 'draft',
    isAIGenerated: false,
  },
  {
    id: '6',
    name: 'Code Review Quality',
    department: 'Engineering',
    weight: 30,
    status: 'active',
    isAIGenerated: true,
  },
];

export function KPIsPage() {
  const handleCreateKPI = () => {
    console.log('Create KPI clicked');
    // Handle create KPI - open modal or navigate to form
  };

  const handleAddPack = (pack: KPIPack) => {
    console.log('Add pack:', pack);
    // Handle add pack
  };

  const handleViewAllPacks = () => {
    console.log('View all packs clicked');
    // Handle view all packs
  };

  const handleViewRecommendations = () => {
    console.log('View recommendations clicked');
    // Handle view AI recommendations
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search
  };

  const handleFilter = () => {
    console.log('Filter clicked');
    // Handle filter
  };

  const handleEditKPI = (kpi: KPI) => {
    console.log('Edit KPI:', kpi);
    // Handle edit KPI
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">KPI Management</h1>
            <p className="text-[#B0B6C1]">Define, track, and optimize key performance indicators</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              data-slot="dialog-trigger"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
              type="button"
              onClick={handleCreateKPI}
            >
              <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
              Create KPI
            </button>
          </div>
        </div>

        {/* KPI Packs Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl">KPI Packs</h2>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 text-[#00F5C6] hover:text-[#00F5C6]/80"
              onClick={handleViewAllPacks}
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiPacks.map((pack) => (
              <KPIPackCard key={pack.id} pack={pack} onAddPack={handleAddPack} />
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <KPIRecommendations onViewRecommendations={handleViewRecommendations} />

        {/* Search Bar */}
        <KPISearchBar onSearch={handleSearch} onFilter={handleFilter} />

        {/* Active KPIs List */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
            <div className="p-6">
              <h3 className="text-white text-lg mb-4">Active KPIs</h3>
              <div className="space-y-3">
                {activeKPIs.map((kpi) => (
                  <KPIListItem key={kpi.id} kpi={kpi} onEdit={handleEditKPI} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
