'use client';
import Footer from '@/components/Footer';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex-center-col z-10 h-screen w-full bg-olive'>
        <div className='flex-center-col h-[1000px] w-full text-9xl font-black text-olive-400/90'>
          main
        </div>
      </main>
      <Footer />
    </>
  );
}
