import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import    NavbarWrapper from "./(compontent)/Navbar/NavbarWrapper"
import Footer from "./(compontent)/footer/footer"
import Providerredux from "./slice/provider"
import  { Toaster } from 'react-hot-toast';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GoCart — Online Electronics & Gadgets Store",
    template: "%s | GoCart",
  },
  description:
    "GoCart is your one-stop shop for premium electronics, gaming gear, audio, and mobile accessories — with fast shipping, secure checkout, and curated quality.",
  keywords: [
    "online store",
    "electronics",
    "gadgets",
    "gaming gear",
    "headphones",
    "mobile accessories",
    "ecommerce",
  ],
  applicationName: "GoCart",
  openGraph: {
    title: "GoCart — Online Electronics & Gadgets Store",
    description:
      "Premium electronics, gaming gear, and mobile accessories with fast shipping and secure checkout.",
    type: "website",
    siteName: "GoCart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providerredux>
  <NavbarWrapper/>                  
        {children}
        <Toaster/>
        <Footer/>
        </Providerredux>
      
        </body>
    </html>
  );
}
