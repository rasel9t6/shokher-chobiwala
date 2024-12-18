import Logo from '../Logo';

export default function Nav() {
  return (
    <div className='flex-between-row z-10 w-full'>
      <Logo />
      <ul className=' sm:flex-between-row hidden  gap-5 text-sm font-semibold uppercase tracking-tighter'>
        <li>Home</li>
        <li>contact </li>
        <li>albums</li>
        <li>gears</li>
      </ul>
    </div>
  );
}
