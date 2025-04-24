import { Inter, Taviraj } from 'next/font/google'
import { Navbar } from "./navbar"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const taviraj = Taviraj({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-taviraj',
})

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div lang="th" className={`${inter.className} ${taviraj.className}`}>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
        {children}
      </main>
    </div>
  );
} 