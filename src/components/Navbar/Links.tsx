export type NavbarLinksProps = {
  children: React.ReactNode;
};

export function NavbarLinks({ children }: NavbarLinksProps) {
  return <div className='my-2 mx-4'>{children}</div>;
}
