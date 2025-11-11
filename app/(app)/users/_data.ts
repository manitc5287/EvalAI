export type User = { id:string; name:string; role:string; department:string; status:'Active'|'Inactive' }
export async function fetchUsers(): Promise<User[]> {
  return [
    { id:'1', name:'Jane Cooper', role:'Manager', department:'Support', status:'Active' },
    { id:'2', name:'Dev Patel', role:'Agent', department:'Support', status:'Active' },
    { id:'3', name:'Isha Rao', role:'Lead', department:'IT', status:'Inactive' }
  ]
}
