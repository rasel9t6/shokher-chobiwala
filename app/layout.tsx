import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'শখের ছবিওয়ালা | আরিয়ান জোহান',
  description: 'Wedding photographer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${playfair.variable}  flex h-screen w-full flex-col
        items-center justify-between font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
