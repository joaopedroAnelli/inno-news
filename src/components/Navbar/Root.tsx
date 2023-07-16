export type NavbarRootProps = {
  children: React.ReactNode;
};

export function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <div className='flex justify-between bg-white border-b shadow dark:bg-slate-800 dark:text-slate-200 dark:border-b-slate-700 dark:shadow-slate-700'>
      {children}
    </div>
  );
}
