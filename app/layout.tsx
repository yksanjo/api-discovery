import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Discovery - Browse Free APIs',
  description: 'Discover curated free APIs for your projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased">{children}</body></html>
}
