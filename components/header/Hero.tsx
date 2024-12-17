import Image from 'next/image';

export default function Hero() {
  return (
    <div className='absolute left-0 top-0 z-0 w-full'>
      <div className='flex-center-col absolute left-0 top-0 h-[70vh] w-full px-0'>
        <Image
          src='/images/hero-image.jpg'
          fill
          alt='hero'
          className='object-cover object-center brightness-[65%]'
        />
      </div>
    </div>
  );
}
