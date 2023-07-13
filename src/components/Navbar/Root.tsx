export type NavbarRootProps = {
  children: React.ReactNode;
};

export function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <div className='flex justify-between bg-white border-b shadow dark:bg-slate-900'>
      {children}
    </div>
  );
}
