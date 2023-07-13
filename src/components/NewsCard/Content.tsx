export type NewsCardContent = {
  children: React.ReactNode;
};

export function NewsCardContent({ children }: NewsCardContent) {
  return <div className='flex flex-col flex-1'>{children}</div>;
}
