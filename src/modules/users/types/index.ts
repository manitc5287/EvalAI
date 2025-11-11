export type UserStatus = 'active' | 'pending' | 'inactive';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: UserStatus;
  skillScore: number;
  avatar?: string;
}
