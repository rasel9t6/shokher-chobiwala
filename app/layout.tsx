import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PlayfairDisplay from 'next/font/local';
import '../styles/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const playfair = PlayfairDisplay({
  variable: '--font-playfair',
  src: [
    {
      path: './font/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/PlayfairDisplay-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
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
        className={`${inter.variable} ${playfair.variable}  flex-start-col h-screen w-full
          bg-olive font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
