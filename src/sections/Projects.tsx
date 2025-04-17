import skilledAwardsImage from "@/assets/images/skilled_awards.png";
import fsl from '@/assets/images/fsl.png';
import castech from '@/assets/images/castech.png';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Skilled Awards",
    year: "2024",
    title: "An Award organized to appreciate spectacular skills by students.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "STACKS: REACT, TAILWIND CSS " },
    ],
    link: "https://skilledaward.com/",
    image: skilledAwardsImage,
  },
  {
    company: "FSL",
    year: "2024",
    title: "An Investment Company",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "STACKS: NEXT JS, TAILWIND CSS, API INTEGRATION" },
    ],
    link: "https://www.fsl.ng/",
    image: fsl,
  },
  {
    company: "Cascadian Technologies",
    year: "2024",
    title: "A Software Development Company",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "STACKS: NEXT JS, TAILWIND CSS, API INTEGRATION, SHADCN-UI" },
    ],
    link: "https://www.cas-technologies.com/",
    image: castech,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 relative" id="works">
      <div className="container">
        <SectionHeader
        eyebrow="Real-world Results"
        title=' Featured Projects'
        description="See how I transformed concepts into engaging digital experiences."
        />
        
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project,projectIndex) => {
            return (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top:`calc(64px + ${ projectIndex * 40}px)`
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent ">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-white/5 border-t-2 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, i) => {
                    return (
                      <li
                        key={i}
                        className="flex gap-2 items-center text-sm text-white/50 md:text-base "
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    );
                  })}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex justify-center gap-2 mt-8 items-center md:w-auto md:px-6 animate-pulse">
                    <span> Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
                </div>
                <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
                </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
