export type NavbarLogoProps = {
  children: React.ReactNode;
};

export function NavbarLogo({ children }: NavbarLogoProps) {
  return <div className='m-4'>{children}</div>;
}
