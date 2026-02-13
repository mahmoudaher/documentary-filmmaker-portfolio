import PageHeader from "@/components/PageHeader";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "About – Souleyman Mumtaz",
  description:
    "Learn more about Souleyman Mumtaz, a documentary filmmaker and photojournalist whose work spans film and photography projects.",
};

export default function Page() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <PageHeader />

      <div className="relative w-full mt-6 sm:mt-8 md:mt-12 overflow-hidden rounded-sm">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/8] md:aspect-[16/7]">
          <Image
            src="/assets/about.jpeg"
            alt="Portrait of Souleyman Mumtaz"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-14">
            <p className="text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase font-bebas text-red-500 mb-1 sm:mb-2">
              Documentary Filmmaker & Photojournalist
            </p>
            <h2 className="text-[24px] sm:text-[36px] md:text-[52px] font-federo tracking-[0.06em] sm:tracking-[0.08em] text-white leading-[1.1]">
              SOULEYMAN MUMTAZ
            </h2>
            <div className="w-10 sm:w-16 h-[1px] bg-red-700 mt-3 sm:mt-4" />
          </div>
        </div>
      </div>

      <div className="my-8 sm:my-12 md:my-16">
        <blockquote className="border-l-2 border-red-800 pl-5 sm:pl-8 max-w-3xl">
          <p className="text-[15px] sm:text-[18px] md:text-[22px] font-federo text-white/90 leading-relaxed italic">
            "Creating powerful, authentic work that informs global audiences,
            bridges cultural understanding, and amplifies voices that are often
            overlooked."
          </p>
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-12">
        <div>
          <h3 className="text-[11px] tracking-[0.3em] uppercase font-bebas text-neutral-500 md:mt-1">
            Background
          </h3>
        </div>
        <div className="text-[13px] sm:text-[14px] md:text-[15px] text-neutral-300 font-montserrat leading-[1.8] sm:leading-[1.9] space-y-4 sm:space-y-5">
          <p>
            Souleyman Mumtaz is a documentary filmmaker and photojournalist
            whose work explores conflict, resilience, and social change through
            powerful visuals. Since 2013, he has worked independently and with
            international media organizations, producing documentary films and
            photographic projects that examine displacement, humanitarian
            crises, and cultural transformation across the Middle East and North
            Africa.
          </p>
          <p>
            His work has been featured through collaborations with humanitarian
            agencies, global news platforms, and documentary networks focused on
            human rights and crisis response. He concentrates on capturing
            real-life narratives from the ground, documenting communities
            affected by war, migration, and recovery through intimate and honest
            imagery.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 my-8 sm:my-12 md:my-16">
        <div className="h-px flex-1 bg-gradient-to-r from-red-800/40 to-transparent" />
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bebas text-neutral-600 whitespace-nowrap">
          At a Glance
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-red-800/40 to-transparent" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
        {[
          { value: "10+", label: "Years in the Field" },
          { value: "3", label: "Documentary Films" },
          { value: "5+", label: "Photography Projects" },
          { value: "MENA", label: "Regional Focus" },
        ].map((stat) => (
          <div key={stat.label} className="group">
            <p className="text-[28px] sm:text-[36px] md:text-[40px] font-federo text-white leading-none">
              {stat.value}
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bebas text-neutral-500 mt-1.5 sm:mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-12 mt-8 sm:mt-12 md:mt-16">
        <div>
          <h3 className="text-[11px] tracking-[0.3em] uppercase font-bebas text-neutral-500 md:mt-1">
            Mission
          </h3>
        </div>
        <div className="text-[13px] sm:text-[14px] md:text-[15px] text-neutral-300 font-montserrat leading-[1.8] sm:leading-[1.9]">
          <p>
            Over the past decade, he has covered major regional events, produced
            investigative visual stories, and developed documentary projects
            that highlight resilience and everyday survival. His goal is to
            create powerful, authentic work that informs global audiences,
            bridges cultural understanding, and amplifies voices that are often
            overlooked.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16">
        <h3 className="text-[11px] tracking-[0.3em] uppercase font-bebas text-neutral-500 mb-3 sm:mb-4">
          Expertise
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[
            "Documentary Film",
            "Photojournalism",
            "Conflict Reporting",
            "Humanitarian Stories",
            "Field Production",
            "Cinematography",
            "Visual Storytelling",
            "Crisis Coverage",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase font-bebas text-neutral-400 border border-neutral-800 hover:border-red-800/60 hover:text-white/80 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
