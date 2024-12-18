import LensSvg from './LensSvg';

export default function About() {
  return (
    <section className='flex-start-col relative w-full overflow-hidden px-6 pb-[50px] pt-[90px]'>
      <div
        className='absolute left-1/2 top-1.5 
     flex h-14 w-full max-w-[1920px] 
    -translate-x-1/2 flex-row items-center justify-center 
    gap-0 overflow-hidden px-0 py-[5px] mask-gradient
'
      >
        <LensSvg />
      </div>
      <div className='flex-start-col h-min w-full max-w-[1848px] gap-[36px]'>
        bio
      </div>
    </section>
  );
}
