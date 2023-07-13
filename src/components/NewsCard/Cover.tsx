import Image, { ImageProps } from 'next/image';

export type NewsCardCoverProps = ImageProps & {};

export function NewsCardCover({ alt, src, ...props }: NewsCardCoverProps) {
  return (
    <Image
      alt={alt}
      src={src}
      width={160}
      height={160}
      className='object-cover rounded-l-md'
      {...props}
    />
  );
}
