'use client';

import { User, UserStatus } from '../types';
import { MoreVertical, Eye, Edit, UserX } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface UserTableProps {
  users?: User[];
  onUserClick?: (user: User) => void;
  onEditClick?: (user: User) => void;
  onDeactivateClick?: (user: User) => void;
}

// Default sample data
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    role: 'Engineering Manager',
    department: 'Engineering',
    status: 'active',
    skillScore: 85,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@company.com',
    role: 'Senior Developer',
    department: 'Engineering',
    status: 'active',
    skillScore: 92,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@company.com',
    role: 'Product Manager',
    department: 'Product',
    status: 'active',
    skillScore: 78,
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.k@company.com',
    role: 'UX Designer',
    department: 'Design',
    status: 'active',
    skillScore: 88,
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    email: 'jessica.t@company.com',
    role: 'HR Specialist',
    department: 'HR',
    status: 'pending',
    skillScore: 71,
  },
  {
    id: '6',
    name: 'Robert Martinez',
    email: 'robert.m@company.com',
    role: 'Sales Lead',
    department: 'Sales',
    status: 'active',
    skillScore: 82,
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function getStatusClasses(status: UserStatus): string {
  switch (status) {
    case 'active':
      return 'border-[#00F5C6]/50 text-[#00F5C6]';
    case 'pending':
      return 'border-yellow-400/50 text-yellow-400';
    case 'inactive':
      return 'border-red-400/50 text-red-400';
    default:
      return 'border-white/50 text-white';
  }
}

export function UserTable({ users = mockUsers, onUserClick, onEditClick, onDeactivateClick }: UserTableProps) {
  const handleViewDetails = (user: User, e: React.MouseEvent) => {
    e.stopPropagation();
    onUserClick?.(user);
  };

  const handleEdit = (user: User, e: React.MouseEvent) => {
    e.stopPropagation();
    onEditClick?.(user);
  };

  const handleDeactivate = (user: User, e: React.MouseEvent) => {
    e.stopPropagation();
    onDeactivateClick?.(user);
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
        <div className="overflow-x-auto">
          <div data-slot="table-container" className="relative w-full overflow-x-auto">
            <table data-slot="table" className="w-full caption-bottom text-sm">
              <thead data-slot="table-header" className="[&_tr]:border-b">
                <tr
                  data-slot="table-row"
                  className="data-[state=selected]:bg-muted border-b transition-colors border-white/10 hover:bg-transparent"
                >
                  <th
                    data-slot="table-head"
                    className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-[#B0B6C1]"
                  >
                    User
                  </th>
                  <th
                    data-slot="table-head"
                    className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-[#B0B6C1]"
                  >
                    Role
                  </th>
                  <th
                    data-slot="table-head"
                    className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-[#B0B6C1]"
                  >
                    Department
                  </th>
                  <th
                    data-slot="table-head"
                    className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-[#B0B6C1]"
                  >
                    Status
                  </th>
                  <th
                    data-slot="table-head"
                    className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-[#B0B6C1]"
                  >
                    Skill Score
                  </th>
                  <th
                    data-slot="table-head"
                    className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-[#B0B6C1]"
                  ></th>
                </tr>
              </thead>
              <tbody data-slot="table-body" className="[&_tr:last-child]:border-0">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    data-slot="table-row"
                    className="data-[state=selected]:bg-muted border-b transition-colors border-white/10 hover:bg-white/5 cursor-pointer"
                    onClick={() => onUserClick?.(user)}
                  >
                    <td
                      data-slot="table-cell"
                      className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          data-slot="avatar"
                          className="relative flex size-10 shrink-0 overflow-hidden rounded-full"
                        >
                          <span
                            data-slot="avatar-fallback"
                            className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] text-white"
                          >
                            {getInitials(user.name)}
                          </span>
                        </span>
                        <div>
                          <p className="text-white">{user.name}</p>
                          <p className="text-[#B0B6C1] text-sm">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white"
                    >
                      {user.role}
                    </td>
                    <td
                      data-slot="table-cell"
                      className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white"
                    >
                      {user.department}
                    </td>
                    <td
                      data-slot="table-cell"
                      className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                      <span
                        data-slot="badge"
                        className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground ${getStatusClasses(user.status)}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                            style={{ width: `${user.skillScore}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm min-w-[3ch]">{user.skillScore}</span>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 text-[#B0B6C1] hover:text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem
                            onClick={(e: React.MouseEvent) => handleViewDetails(user, e)}
                            className="cursor-pointer"
                          >
                            <Eye className="w-4 h-4 mr-2 text-[#00AEEF]" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e: React.MouseEvent) => handleEdit(user, e)}
                            className="cursor-pointer"
                          >
                            <Edit className="w-4 h-4 mr-2 text-[#00F5C6]" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={(e: React.MouseEvent) => handleDeactivate(user, e)}
                            className="cursor-pointer text-red-400 focus:text-red-400"
                          >
                            <UserX className="w-4 h-4 mr-2" />
                            Deactivate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
