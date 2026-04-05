import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burger Lovers España — We Love Burgers",
  description: "Descubre las hamburguesas más icónicas de Burger Lovers España. Sabor, pasión y calidad en cada bocado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-[#27251F] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
