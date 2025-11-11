export type RoleType = 'system' | 'custom';

export interface Permission {
  name: string;
  enabled: boolean;
}

export interface Role {
  id: string;
  name: string;
  type: RoleType;
  userCount: number;
  description: string;
  permissions: Permission[];
  canEdit: boolean;
  canDelete: boolean;
}
