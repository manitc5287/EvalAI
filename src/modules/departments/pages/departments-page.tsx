/**
 * DepartmentsPage Component
 * Main page for department management
 */

'use client';

import { useState } from 'react';
import { Plus, Building2 } from 'lucide-react';
import { useDepartments } from '../hooks/use-departments';
import { DepartmentStats } from '../components/department-stats';
import { DepartmentSearchBar } from '../components/department-search-bar';
import { DepartmentCard } from '../components/department-card';
import { getDepartmentStats } from '../lib/departments-helpers';

export function DepartmentsPage() {
  const { departments, loading, search } = useDepartments();
  const [searchQuery, setSearchQuery] = useState('');
  
  const stats = getDepartmentStats(departments);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    search(value);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading departments...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">Departments</h1>
            <p className="text-[#B0B6C1]">Manage organizational departments and team structure</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Add Department
          </button>
        </div>

        {/* Stats */}
        <DepartmentStats
          totalDepartments={stats.totalDepartments}
          activeDepartments={stats.activeDepartments}
          totalEmployees={stats.totalEmployees}
        />

        {/* Search Bar */}
        <DepartmentSearchBar value={searchQuery} onChange={handleSearch} />

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
              onEdit={(dept) => console.log('Edit', dept)}
              onDelete={(dept) => console.log('Delete', dept)}
            />
          ))}
        </div>

        {/* Empty State */}
        {departments.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-[#B0B6C1] mx-auto mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">No departments found</h3>
            <p className="text-[#B0B6C1] mb-6">
              {searchQuery ? 'Try adjusting your search' : 'Get started by creating your first department'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
