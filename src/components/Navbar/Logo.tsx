import Link from 'next/link';

export type NavbarLogoProps = {
  children: React.ReactNode;
};

export function NavbarLogo({ children }: NavbarLogoProps) {
  return (
    <Link href='/' className='mx-4 my-2 flex items-center'>
      {children}
    </Link>
  );
}
