import '@/app/ui/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const revalidate = 3600

export const metadata = {
  title: 'Турфирма Travel',
  description:
    'Турфирма Travel – это команда профессионалов с многолетним опытом в сфере туризма. Мы сотрудничаем с лучшими отелями, авиакомпаниями и экскурсионными агентствами по всему миру, чтобы предложить вам только самые качественные и надежные услуги.'
}

import { cn } from '@/app/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

import { Providers } from './providers'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          'bg-primary-color font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
