export type NewsCardTitleProps = {
  children: React.ReactNode;
};

export function NewsCardTitle({ children }: NewsCardTitleProps) {
  return <h1 className='text-2xl m-4 mb-2'>{children}</h1>;
}
