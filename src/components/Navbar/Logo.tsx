import Link from 'next/link';

export type NavbarLogoProps = {
  children: React.ReactNode;
};

export function NavbarLogo({ children }: NavbarLogoProps) {
  return (
    <Link href='/' className='my-2 mx-4 flex items-center'>
      {children}
    </Link>
  );
}
