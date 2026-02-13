import Navbar from "@/components/Navbar";

export default function PageHeader() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-0 md:pt-4">
        <Navbar />
        <div className="flex flex-col items-center md:items-end mt-1 md:mt-0">
          <h1 className="font-futura text-[40px] sm:text-[30px] text-white leading-none text-center md:text-right whitespace-nowrap">
            SOULEYMAN MUMTAZ
          </h1>
        </div>
      </div>

      <div className="flex justify-center md:justify-end mt-0">
        <p className="text-[#f50000] text-[12px] text-center md:text-right whitespace-nowrap">
          DOCUMENTARY FILMMAKER & PHOTOJOURNALIST
        </p>
      </div>
    </>
  );
}
