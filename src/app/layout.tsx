import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({ src: './font/Flexo-Regular.ttf' })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'An interactive Pokedex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
