export type NewsCardRootProps = {
  children: React.ReactNode;
};

export function NewsCardRoot({ children }: NewsCardRootProps) {
  return (
    <div className='bg-white border rounded-md max-w-2xl m-4 flex'>
      {children}
    </div>
  );
}
