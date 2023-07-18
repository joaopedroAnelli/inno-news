export type NavbarLinksProps = {
  children: React.ReactNode;
};

export function NavbarLinks({ children }: NavbarLinksProps) {
  return <div className='mx-4 my-2'>{children}</div>;
}
