import Navbar from "@/components/Navbar";

export default function PageHeader() {
  return (
    <header>
      <div className="flex items-center justify-between pt-4 md:pt-4 pb-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-[2px] sm:w-[3px] h-6 sm:h-8 bg-red-700 shrink-0" />
          <div className="min-w-0">
            <h1 className="font-futura text-[18px] sm:text-[22px] md:text-[26px] text-white leading-none tracking-[0.04em] truncate">
              SOULEYMAN MUMTAZ
            </h1>
            <p className="text-[8px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-neutral-500 font-bebas mt-0.5">
              Documentary Filmmaker & Photojournalist
            </p>
          </div>
        </div>

        <Navbar />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </header>
  );
}
