"use client";
import TransitionLink from "@/components/TransitionLink";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/film", label: "FILM" },
    { href: "/photography", label: "PHOTOGRAPHY" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <section>
      {/* Desktop */}
      <div className="hidden md:flex flex-row gap-4 sm:gap-8">
        {links.map((link) => (
          <TransitionLink key={link.href} href={link.href}>
            <h3
              className={`font-bebas text-[15px] sm:text-[20px] tracking-wider transition-all ${
                pathname === link.href
                  ? "text-white"
                  : "text-[#e0aeae] hover:text-white/80"
              }`}
            >
              {link.label}
            </h3>
          </TransitionLink>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {/* Trigger button */}
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close main navigation" : "Open main navigation"}
          onClick={() => setIsOpen((v) => !v)}
          className="mx-auto block text-center w-full font-bebas text-[18px] tracking-widest text-[#e0aeae] hover:text-white transition-colors -mt-7 pb-7 sm:mt-0"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>

        {/* Animated panel */}
        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen
              ? "max-h-[360px] opacity-100 translate-y-0 mt-2"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="flex flex-col items-center gap-5">
            {links.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <h3
                  className={`font-bebas text-[18px] tracking-widest transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-[#e0aeae] hover:text-white/80"
                  }`}
                >
                  {link.label}
                </h3>
              </TransitionLink>
            ))}
            <div className="w-full max-w-[92%] h-px bg-white/20 my-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
