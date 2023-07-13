export type NavbarLogoProps = {
  children: React.ReactNode;
};

export function NavbarLogo({ children }: NavbarLogoProps) {
  return <div className='my-2 mx-4'>{children}</div>;
}
