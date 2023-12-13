import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Batista - Portfólio',
  description: 'Olá seja bem vindo ao meu mundo, neste portfólio guardado meus projetos, informações de contato e experiência profissional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
