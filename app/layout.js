import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata = {
  title: 'Portfolio - Rohit Jadhav',
  description: 'Aspiring Data Scientist passionate about turning data into meaningful insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
