import CasTech from "@/assets/images/logo.png";
import SectionHeader from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImages from "@/assets/images/grain.jpg";
import Image from "next/image";
import Card from "@/components/Card";

const workPlace = [
  {
    name: "Cascadian Technologies",
    position: "FrontEnd Web Developer",
    year: "Jan 2024 - Present",
    experience: [
      {
        title:
          "Used ReactJS and TailwindCSS to build a website for a NGO website ",
      },
      {
        title:
          "Used ReactJS and TaildwindCSS to build a website for an awards website",
      },
      {
        title:
          "Used NEXTJS and TailwindCSS to build a website for an Investment Bank",
      },
    ],
    avatar: CasTech,
  },
];

export const WorkPlaceSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
      <SectionHeader eyebrow="Who've I been working with?" />

<div className="mt-16 lg:mt-24 flex overflow-x-clip justify-center [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%,transparent)]">
  <div className="flex flex-none gap-8">
  {workPlace.map((work) => (
    <Card key={work.name} className="max-w-xs md:p-8 md:max-w-full">
      <div className="flex gap-4 items-center">

        <div className="size-14 bg-gray-700/50 inline-flex items-center justify-center rounded-full">  
        <Image src={work.avatar} alt={work.name} />
        </div>

        <div>

        <div className="font-semibold">{work.name}</div>
        <div className="text-sm text-white/40">{work.position}</div>

        </div>

      </div>
        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
          {work.experience.map((result, i) => {
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
    </Card>
  ))}
</div>
</div>
      </div>
    </section>
  );
};
