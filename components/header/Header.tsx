import Hero from './Hero';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='flex-start-col z-10 h-screen w-full bg-cover bg-center text-3xl font-bold'>
      <Nav />
      <Hero />
    </header>
  );
}
