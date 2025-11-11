'use client';

import { Plus } from 'lucide-react';
import { RoleStats } from '../components/role-stats';
import { RoleSearchBar } from '../components/role-search-bar';
import { RoleCard } from '../components/role-card';
import { Role } from '../types';

// Default sample roles data
const defaultRoles: Role[] = [
  {
    id: '1',
    name: 'Super Admin',
    type: 'system',
    userCount: 2,
    description: 'Full system access with all permissions',
    permissions: [
      { name: 'Users & Teams', enabled: true },
      { name: 'Departments', enabled: true },
      { name: 'KPI Management', enabled: true },
      { name: 'Assessments', enabled: true },
      { name: 'Reports & Analytics', enabled: true },
      { name: 'AI Management', enabled: true },
      { name: 'Settings & Security', enabled: true },
    ],
    canEdit: true,
    canDelete: false,
  },
  {
    id: '2',
    name: 'Manager',
    type: 'system',
    userCount: 12,
    description: 'Team management and evaluation capabilities',
    permissions: [
      { name: 'Users & Teams', enabled: true },
      { name: 'Departments', enabled: true },
      { name: 'KPI Management', enabled: true },
      { name: 'Assessments', enabled: true },
      { name: 'Reports & Analytics', enabled: true },
      { name: 'AI Management', enabled: true },
      { name: 'Settings & Security', enabled: true },
    ],
    canEdit: true,
    canDelete: false,
  },
  {
    id: '3',
    name: 'HR Specialist',
    type: 'custom',
    userCount: 4,
    description: 'Human resources and talent management',
    permissions: [
      { name: 'Users & Teams', enabled: true },
      { name: 'Departments', enabled: true },
      { name: 'KPI Management', enabled: true },
      { name: 'Assessments', enabled: true },
      { name: 'Reports & Analytics', enabled: true },
      { name: 'AI Management', enabled: true },
      { name: 'Settings & Security', enabled: true },
    ],
    canEdit: true,
    canDelete: true,
  },
  {
    id: '4',
    name: 'Team Lead',
    type: 'custom',
    userCount: 8,
    description: 'Lead team evaluations and performance tracking',
    permissions: [
      { name: 'Users & Teams', enabled: true },
      { name: 'Departments', enabled: true },
      { name: 'KPI Management', enabled: true },
      { name: 'Assessments', enabled: true },
      { name: 'Reports & Analytics', enabled: true },
      { name: 'AI Management', enabled: true },
      { name: 'Settings & Security', enabled: true },
    ],
    canEdit: true,
    canDelete: true,
  },
  {
    id: '5',
    name: 'Employee',
    type: 'system',
    userCount: 35,
    description: 'Basic access for regular employees',
    permissions: [
      { name: 'Users & Teams', enabled: true },
      { name: 'Departments', enabled: true },
      { name: 'KPI Management', enabled: true },
      { name: 'Assessments', enabled: true },
      { name: 'Reports & Analytics', enabled: true },
    ],
    canEdit: true,
    canDelete: false,
  },
];

export function RolesPage() {
  const roles = defaultRoles;

  const handleAddRole = () => {
    console.log('Add role clicked');
    // Handle add role - open modal or navigate to form
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search
  };

  const handleEditRole = (role: Role) => {
    console.log('Edit role:', role);
    // Handle edit role
  };

  const handleDeleteRole = (role: Role) => {
    console.log('Delete role:', role);
    // Handle delete role
  };

  const totalRoles = roles.length;
  const systemRoles = roles.filter((r) => r.type === 'system').length;
  const customRoles = roles.filter((r) => r.type === 'custom').length;

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">Roles & Permissions</h1>
            <p className="text-[#B0B6C1]">Manage user roles and access permissions</p>
          </div>
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
            onClick={handleAddRole}
          >
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Add Role
          </button>
        </div>

        {/* Stats */}
        <RoleStats totalRoles={totalRoles} systemRoles={systemRoles} customRoles={customRoles} />

        {/* Search Bar */}
        <RoleSearchBar onSearch={handleSearch} />

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              onEdit={handleEditRole}
              onDelete={handleDeleteRole}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
