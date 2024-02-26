import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './tailwind-global.scss'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
 })

export const metadata: Metadata = {
  title: 'Yustik Gimenez',
  description: 'programador, programadora, desarrollador web, desarrolladora web, hacer pagina web, pagina web, landing page, diseño web, diseñadora web, empleada programadora, empleado programador, mundo tech, mundo it, programacion, web developr, frontend developer, freelance, freelancer developer',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
