'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Shield, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { roleSchema, RoleFormData } from '../schemas/role.schema';
import { Role } from '../types';
import { PERMISSION_CATEGORIES } from '../constants/permissions';

interface RoleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: RoleFormData) => void | Promise<void>;
  role?: Role | null;
  isLoading?: boolean;
  mode?: 'add' | 'edit';
}

export function RoleModal({
  open,
  onOpenChange,
  onSubmit,
  role,
  isLoading = false,
  mode = 'add',
}: RoleModalProps) {
  const isEditMode = mode === 'edit' || !!role;
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const form = useForm({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: '',
      description: '',
      permissions: [] as string[],
      status: 'active' as const,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = form;

  const selectedStatus = watch('status');

  // Populate form when role changes (edit mode)
  useEffect(() => {
    if (role && isEditMode) {
      setValue('name', role.name || '');
      setValue('description', role.description || '');
      setValue('permissions', role.permissionIds || []);
      setValue('status', role.status || 'active');
      setSelectedPermissions(role.permissionIds || []);
    } else if (!isEditMode) {
      reset();
      setSelectedPermissions([]);
    }
  }, [role, isEditMode, setValue, reset]);

  const handlePermissionToggle = (permissionId: string) => {
    setSelectedPermissions((prev) => {
      const newPermissions = prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId];
      setValue('permissions', newPermissions);
      return newPermissions;
    });
  };

  const handleFormSubmit = async (data: any) => {
    try {
      await onSubmit({
        ...data,
        permissions: selectedPermissions,
      } as RoleFormData);
      reset();
      setSelectedPermissions([]);
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = () => {
    reset();
    setSelectedPermissions([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? 'Edit Role' : 'Create New Role'}
          </DialogTitle>
          <DialogDescription>
            {isEditMode
              ? 'Update role information and permissions'
              : 'Define a custom role with specific permissions'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <ScrollArea className="max-h-[calc(90vh-200px)]">
            <div className="space-y-6 py-4 pr-4">
              {/* Role Name */}
              <div>
                <Label htmlFor="name">Role Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Team Lead, Project Manager"
                  className="mt-2"
                  {...register('name')}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of this role's responsibilities"
                  className="mt-2 min-h-[80px]"
                  {...register('description')}
                  aria-invalid={!!errors.description}
                />
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>
                )}
              </div>

              {/* Permissions */}
              <div className="space-y-4">
                <Label>Permissions</Label>
                {errors.permissions && (
                  <p className="text-red-400 text-xs mt-1">{errors.permissions.message}</p>
                )}
                
                {PERMISSION_CATEGORIES.map((category) => (
                  <div
                    key={category.id}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <h4 className="text-white mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#00F5C6]" aria-hidden="true" />
                      {category.name}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.permissions.map((permission: any) => (
                        <div key={permission.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={permission.id}
                            checked={selectedPermissions.includes(permission.id)}
                            onCheckedChange={() => handlePermissionToggle(permission.id)}
                          />
                          <label
                            htmlFor={permission.id}
                            className="text-sm text-[#B0B6C1] cursor-pointer"
                          >
                            {permission.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status (only in edit mode) */}
              {isEditMode && (
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={selectedStatus}
                    onValueChange={(value: 'active' | 'inactive') => setValue('status', value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </ScrollArea>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting || isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || isLoading}>
              {isEditMode ? (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  {isSubmitting || isLoading ? 'Updating...' : 'Update Role'}
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  {isSubmitting || isLoading ? 'Creating...' : 'Create Role'}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
