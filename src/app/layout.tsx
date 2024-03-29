import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({ src: './font/Flexo-Regular.ttf' })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Uma pokedex interativa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${myFont.className} bg-gray-800 overflow-hidden min-h-screen flex flex-col justify-end`}>
        {children}
      </body>
    </html>
  )
}
