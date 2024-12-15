// src/app/layout.tsx
import './styles/Layout.css';
import Link from 'next/link';

export const metadata = {
  title: 'My App',
  description: 'A Next.js multi-page application',
  openGraph: {
    title: 'My App',
    description: 'A Next.js multi-page application',
    images: [
      {
        url: '/banner_bg.jpg', // Replace with your actual image path
        width: 800,
        height: 600,
        alt: 'My App Logo',
      },
    ],
  },
  icons: {
    icon: '/banner_bg.jpg', // Replace with your favicon path
    apple: '/banner_bg.jpg', // Optional: Apple touch icon
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <main className="content">{children}</main>
          <footer className="footer">© 2024 My Website</footer>
        </div>
      </body>
    </html>
  );
}
