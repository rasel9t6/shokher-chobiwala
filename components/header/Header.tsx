import CustomText from './CustomText';
import Hero from './Hero';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='flex-start-col h-screen w-full flex-nowrap px-10'>
      <div className='flex-between-col z-10 size-full h-screen pb-[60px] pt-[50px] text-3xl'>
        <Nav />
        <div className='w-full'>
          <div className='flex-center-col inline-block h-min w-full'>
            <h1 className='pb-[10px] text-[22px] font-semibold leading-[1em] tracking-[-0.07em]'>
              ART IN FOCUS
            </h1>
            <CustomText />
            <span className='font-playfair text-[85px] font-normal italic leading-[.8em] tracking-[-0.08em] text-gold-800/90'>
              Captured
            </span>
          </div>
        </div>
      </div>
      <Hero />
    </header>
  );
}
