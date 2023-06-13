import './globals.css'
import { Inter } from 'next/font/google'
import { useDarkTheme } from './store/globals'
import { ProviderTheme } from './components/providerTheme'

const inter = Inter({ subsets: ['latin'] })

const theme = useDarkTheme.getState().theme

export const metadata = {
  title: 'Hewerton',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ProviderTheme>{children}</ProviderTheme>
      </body>
    </html>
  );
}