import PageHeader from "@/components/PageHeader";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";
import Footer from "@/components/footer";
import { photographyProjects } from "@/data/photography-projects";

export const metadata = {
  title: "Photography – Souleyman Mumtaz",
  description:
    "Photography projects by Souleyman Mumtaz, a documentary filmmaker and photojournalist capturing powerful visual stories.",
};

const projects = photographyProjects;

export default function Page() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <PageHeader />

      <div className="mt-6 sm:mt-8 md:mt-12 mb-6 sm:mb-8 md:mb-12">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-red-800/60 to-transparent" />
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bebas text-neutral-500 shrink-0">
            Photography Projects
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-red-800/60 to-transparent" />
        </div>
        <p className="text-center text-[12px] sm:text-[13px] md:text-[14px] text-neutral-400 font-montserrat max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Documentary photography from conflict zones, humanitarian crises, and
          communities on the edge — capturing stories that demand to be seen.
        </p>
      </div>

      {featured && (
        <TransitionLink
          href={`/photography/${featured.slug}`}
          className="block group mb-8 sm:mb-10 md:mb-14"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              sizes="100vw"
              priority
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

            <div
              className="absolute inset-0 bg-[#8a3b3b] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12">
              <div className="max-w-2xl">
                <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bebas text-red-500 mb-1 sm:mb-2">
                  Featured Project
                </p>
                <h2 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[36px] tracking-[0.06em] sm:tracking-[0.08em] uppercase font-federo text-white leading-[1.1] mb-2 sm:mb-3">
                  {featured.title}
                </h2>
                <p className="hidden sm:block text-[13px] text-neutral-300 font-montserrat leading-relaxed line-clamp-2 max-w-xl">
                  {featured.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase font-bebas text-white/70 group-hover:text-white transition-colors duration-300">
                  View Project
                  <span className="inline-block w-4 h-px bg-red-700 group-hover:w-8 transition-all duration-500" />
                </span>
              </div>
            </div>
          </div>
        </TransitionLink>
      )}

      {rest.length > 0 && (
        <div className="space-y-8 sm:space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10">
          {rest.map((project, index) => {
            const stagger = index % 2 === 1 ? "md:mt-16" : "";

            return (
              <TransitionLink
                key={project._id}
                href={`/photography/${project.slug}`}
                className={`block group ${stagger}`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={index < 2 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-[#8a3b3b] mix-blend-multiply opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-out"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>

                <div className="mt-3 px-0.5 sm:px-1">
                  <h3 className="text-[13px] sm:text-[14px] md:text-[15px] uppercase font-federo text-[#efd2d2] tracking-[0.04em] sm:tracking-[0.06em] group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-montserrat mt-1 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-2 text-[10px] tracking-[0.2em] uppercase font-bebas text-neutral-600 group-hover:text-red-500 transition-colors duration-300">
                    View Project
                    <span className="inline-block w-3 h-px bg-red-800 group-hover:w-6 transition-all duration-500" />
                  </span>
                </div>
              </TransitionLink>
            );
          })}
        </div>
      )}

      <Footer />
    </section>
  );
}
