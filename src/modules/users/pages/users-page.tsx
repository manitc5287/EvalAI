'use client';

import { Upload, UserPlus } from 'lucide-react';
import { UserTable } from '../components/user-table';
import { UserSearchBar } from '../components/user-search-bar';
import { User } from '../types';

export function UsersPage() {
  const handleUserClick = (user: User) => {
    console.log('User clicked:', user);
    // Handle user click - navigate to detail page or open modal
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search
  };

  const handleFilter = () => {
    console.log('Filter clicked');
    // Handle filter
  };

  const handleExport = () => {
    console.log('Export clicked');
    // Handle export
  };

  const handleImportCSV = () => {
    console.log('Import CSV clicked');
    // Handle CSV import
  };

  const handleAddUser = () => {
    console.log('Add user clicked');
    // Handle add user - open modal or navigate to form
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">Users & Teams</h1>
            <p className="text-[#B0B6C1]">Manage your organization's users and team structure</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 border-white/10 text-white hover:bg-white/5"
              onClick={handleImportCSV}
            >
              <Upload className="w-4 h-4 mr-2" aria-hidden="true" />
              Import CSV
            </button>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
              onClick={handleAddUser}
            >
              <UserPlus className="w-4 h-4 mr-2" aria-hidden="true" />
              Add User
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <UserSearchBar onSearch={handleSearch} onFilter={handleFilter} onExport={handleExport} />

        {/* Users Table */}
        <UserTable onUserClick={handleUserClick} />
      </div>
    </div>
  );
}
