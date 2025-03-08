"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10); // If scrolled down, change background
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-5 flex justify-between items-center transition-all duration-300 z-50 ${
        hasScrolled ? "bg-[#C1B5D9] shadow-md" : "bg-transparent"
      }`}
    >
      <button aria-label="Back">
        <Image src="/images/left.svg" alt="back" width={30} height={30} />
      </button>
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
    </div>
  );
}
