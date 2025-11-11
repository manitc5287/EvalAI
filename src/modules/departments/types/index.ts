/**
 * Department Types
 * Type definitions for department management
 */

export interface Department {
  id: string;
  name: string;
  description: string;
  headOfDepartment: string;
  headOfDepartmentId: string;
  employeeCount: number;
  kpiCount: number;
  status: DepartmentStatus;
  budget?: number;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export type DepartmentStatus = 'active' | 'inactive' | 'archived';

export interface DepartmentFilters {
  search?: string;
  status?: DepartmentStatus;
  minEmployees?: number;
  maxEmployees?: number;
}

export interface DepartmentStats {
  totalDepartments: number;
  activeDepartments: number;
  totalEmployees: number;
  averageEmployeesPerDept: number;
}
