import type { Metadata } from "next";
import {Inter,Calistoga} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import profile from '@/assets/images/black.jpg'


const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
})

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: '--font-serif',
  weight: "400",
})
export const metadata: Metadata = {
  title: "Aghedo Emmanuel",
  description: "I am a frontEnd Web Developer interested in building web applications",
  icons:{
    icon:profile.src,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
