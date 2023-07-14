'use client';

import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ApolloProvider from '@/components/ApolloProvider';
import Link from 'next/link';
import ServiceWorker from '@/components/ServiceWorker';

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
        <ApolloProvider>
          <Navbar.Root>
            <Navbar.Logo>
              <h1>Inno News</h1>
            </Navbar.Logo>
            <Navbar.Links>
              <Link href='/'>Home</Link>
            </Navbar.Links>
          </Navbar.Root>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
