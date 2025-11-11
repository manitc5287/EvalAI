import type { Metadata } from 'next'
import './globals.css'
import { ReduxProvider } from '@/src/providers/redux-provider'

export const metadata: Metadata = { title: 'EvalAI Admin', description: 'EvalAI Admin Portal' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
