import Logo from '../Logo';

export default function Nav() {
  return (
    <div className='flex-between-row z-10 h-[100px] w-full px-10  pb-[60px] pt-[30px]'>
      <Logo />
      <ul className='flex-between-row gap-4  text-base font-[600] uppercase tracking-[-0.96px] text-gold-800'>
        <li>Home</li>
        <li>contact </li>
        <li>albums</li>
        <li>gears</li>
      </ul>
    </div>
  );
}
