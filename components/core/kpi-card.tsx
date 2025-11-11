export function KpiCard({ title, value, delta }:{
  title:string; value:string; delta?:string;
}) {
  return (
    <div className="rounded-lg bg-[color:var(--surface)] backdrop-blur p-4 md:p-6 border border-white/10">
      <div className="text-text-secondary text-xs">{title}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl">{value}</span>
        {delta && <span className={`text-xs px-2 py-0.5 rounded ${delta.startsWith('+')?'bg-emerald-500/15 text-emerald-300':'bg-red-500/15 text-red-300'}`}>{delta}</span>}
      </div>
    </div>
  )
}
