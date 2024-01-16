"use client";

import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";



export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  );
}
