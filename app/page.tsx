'use client';
import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import About from '@/components/main/About';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex-center-col z-10 h-screen w-full bg-olive'>
         <About/>
        
      </main>
      <Footer />
    </>
  );
}
