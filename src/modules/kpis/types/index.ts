export type KPIStatus = 'active' | 'draft' | 'inactive';

export interface KPI {
  id: string;
  name: string;
  department: string;
  weight: number; // Percentage (0-100)
  status: KPIStatus;
  isAIGenerated?: boolean;
}

export interface KPIPack {
  id: string;
  name: string;
  emoji: string;
  description: string;
  kpiCount: number;
}
