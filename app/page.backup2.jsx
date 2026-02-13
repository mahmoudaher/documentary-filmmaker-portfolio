"use client";
import HomePageVid from "@/components/HomePageVid";
import TransitionLink from "@/components/TransitionLink";
import { useEffect, useState } from "react";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative w-screen h-[100svh] overflow-hidden">
      <HomePageVid />

      <div
        className={`absolute top-0 left-0 z-20 px-6 sm:px-10 py-5 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-[2px] h-5 bg-red-700" />
          <span className="font-bebas text-[12px] sm:text-[13px] tracking-[0.3em] text-white/60">
            SM
          </span>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-6">
        <h1
          className={`font-federo tracking-[0.05em] leading-none text-[36px] sm:text-[72px] md:text-[100px] lg:text-[120px] text-transparent bg-clip-text bg-gradient-to-b from-white/95 via-slate-200 to-zinc-500 transition-all duration-1000 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          SOULEYMAN
        </h1>
        <p
          className={`text-white/70 tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs md:text-sm mb-4 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          DOCUMENTARY FILMMAKER & PHOTOJOURNALIST
        </p>

        <div
          className={`mt-8 sm:mt-10 flex flex-row items-center justify-center gap-2 sm:gap-4 transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <TransitionLink
            href="/photography"
            className="relative group px-4 sm:px-16 py-2.5 sm:py-3 font-sansita tracking-[2px] sm:tracking-[3px] text-white text-[10px] sm:text-sm overflow-hidden text-center"
          >
            <span className="relative z-10">PHOTOGRAPHY</span>
            <span className="absolute top-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute bottom-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute left-0 top-0 h-full border-l border-white"></span>
            <span className="absolute right-0 top-0 h-full border-r border-white"></span>
          </TransitionLink>

          <TransitionLink
            href="/film"
            className="relative group px-4 sm:px-16 py-2.5 sm:py-3 font-sansita tracking-[2px] sm:tracking-[3px] text-white text-[10px] sm:text-sm overflow-hidden text-center"
          >
            <span className="relative z-10">FILM</span>
            <span className="absolute top-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute bottom-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute left-0 top-0 h-full border-l border-white"></span>
            <span className="absolute right-0 top-0 h-full border-r border-white"></span>
          </TransitionLink>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 sm:px-10 pb-5 transition-all duration-1000 delay-800 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-white/15 text-[7px] sm:text-[9px] md:text-[10px] font-montserrat tracking-wider">
          Developed by Mahmoud Al Daher
        </p>
      </div>
    </section>
  );
}
