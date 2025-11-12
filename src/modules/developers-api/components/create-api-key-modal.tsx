'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, AlertCircle } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createAPIKeySchema, type CreateAPIKeyFormData } from '../schemas/create-api-key.schema';

interface CreateAPIKeyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateKey: (data: CreateAPIKeyFormData) => void;
}

export function CreateAPIKeyModal({
  open,
  onOpenChange,
  onCreateKey,
}: CreateAPIKeyModalProps) {
  const [selectedPermission, setSelectedPermission] = useState<string>('read-only');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateAPIKeyFormData>({
    resolver: zodResolver(createAPIKeySchema),
    defaultValues: {
      name: '',
      permissions: 'read-only',
    },
  });

  const onSubmit = (data: CreateAPIKeyFormData) => {
    onCreateKey(data);
    reset();
    setSelectedPermission('read-only');
  };

  const handleCancel = () => {
    reset();
    setSelectedPermission('read-only');
    onOpenChange(false);
  };

  const handlePermissionChange = (value: string) => {
    setSelectedPermission(value);
    setValue('permissions', value as 'read-only' | 'read-write' | 'full-access');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0A0F1C] border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Create API Key</DialogTitle>
          <DialogDescription className="text-[#B0B6C1]">
            Generate a new API key for your application
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 py-4">
            {/* Key Name */}
            <div>
              <Label htmlFor="name" className="text-white">
                Key Name
              </Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="e.g., Production API, Mobile App"
                className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-[#B0B6C1]"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Permissions */}
            <div>
              <Label htmlFor="permissions" className="text-white">
                Permissions
              </Label>
              <Select
                value={selectedPermission}
                onValueChange={handlePermissionChange}
              >
                <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select permissions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="read-only">Read Only</SelectItem>
                  <SelectItem value="read-write">Read & Write</SelectItem>
                  <SelectItem value="full-access">Full Access</SelectItem>
                </SelectContent>
              </Select>
              {errors.permissions && (
                <p className="text-red-400 text-sm mt-1">{errors.permissions.message}</p>
              )}
            </div>

            {/* Warning Message */}
            <div className="p-4 rounded-lg bg-[#00AEEF]/10 border border-[#00AEEF]/30">
              <p className="text-[#00AEEF] text-sm">
                Make sure to copy your API key now. You won't be able to see it again!
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="border-white/10 text-white hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Key
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
