import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Nav from './components/Nav'

const nunito_sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minimal',
  description: 'A minimalistic responsive nav',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
