import { RowCard } from './row-card'
import React from 'react'

export function ResponsiveTable<T>({
  headers, rows, renderRow, renderCard
}: {
  headers: string[]
  rows: T[]
  renderRow: (row: T) => React.ReactNode
  renderCard: (row: T) => React.ReactNode
}) {
  return (
    <>
      <div className="hidden lg:block rounded-lg border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5">
            <tr>{headers.map(h => <th key={h} className="text-left px-4 py-2">{h}</th>)}</tr>
          </thead>
          <tbody>{rows.map(renderRow)}</tbody>
        </table>
      </div>
      <div className="lg:hidden space-y-3">
        {rows.map((r, i) => <RowCard key={i}>{renderCard(r)}</RowCard>)}
      </div>
    </>
  )
}
