import './globals.css'

export const metadata = {
  title: 'Portfolio - Rohit Jadhav',
  description: 'Aspiring Data Scientist passionate about turning data into meaningful insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
