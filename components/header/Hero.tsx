import Image from 'next/image';

export default function Hero() {
  return (
    <div className='absolute left-0 top-0 z-0 size-full '>
      <div className='flex-center-col fixed left-0 top-0 h-screen w-full px-0'>
        <Image
          src='/images/hero-image.jpg'
          fill
          alt='hero'
          className='object-cover object-top opacity-60 brightness-[60%]'
        />
      </div>
    </div>
  );
}
