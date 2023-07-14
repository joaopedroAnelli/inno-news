export type NavbarLinksProps = {
  children: React.ReactNode;
};

export function NavbarLinks({ children }: NavbarLinksProps) {
  return <div className='m-4'>{children}</div>;
}
