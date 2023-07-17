import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import ServiceWorker from '@/components/ServiceWorker';
import { HomeIcon } from '@heroicons/react/20/solid';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InnoNews',
  description: 'InnoNews é o blog de novidades do Aster',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <ServiceWorker />
        <Navbar.Root>
          <Navbar.Logo>
            <h1>Inno News</h1>
          </Navbar.Logo>
          <Navbar.Links>
            <Link
              className='flex items-center hover:bg-cyan-50 hover:text-cyan-800 p-2 rounded-md transition-all'
              href='/'
            >
              <HomeIcon className='inline mr-2' style={{ width: 20 }} />
              Home
            </Link>
          </Navbar.Links>
        </Navbar.Root>
        {children}
      </body>
    </html>
  );
}
