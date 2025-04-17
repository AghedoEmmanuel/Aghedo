'use client'
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JSIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import GITIcon from "@/assets/icons/git.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ReactQueryIcon from "@/assets/icons/reactquery.svg";
import TSIcon from "@/assets/icons/TS.svg";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import Marquee from "react-fast-marquee";
import map from '@/assets/images/map.png'
import gps from '@/assets/images/gps.png'
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "JavaScript",
    iconType: JSIcon,
  },
  {
    title: "React JS",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
  {
    title: "TypeScript",
    iconType: TSIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Git",
    iconType: GITIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  // {
  //   title:'ShadCDN',
  //   icon:'',
  // },
  {
    title: "React-Query",
    iconType: ReactQueryIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "2%",
    top: "5%",
  },
  {
    title: "Trying out new cuisine",
    emoji: "😋",
    left: "10%",
    top: "40%",
  },
  {
    title: "Watching Movies",
    emoji: "📺",
    left: "5%",
    top: "70%",
  },
  {
    title: "Listening to Music",
    emoji: "🎵",
    left: "45%",
    top: "2%",
  },
];

export const AboutSection = () => {

  const constraintREF = useRef(null)

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-[320px] ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my persperctives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>

            <Card className="h-[320px] ">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences. "
                className=""
              />
              <Marquee speed={50}><ToolboxItems items={toolboxItems} className="" /></Marquee>
              <Marquee speed={50} direction={'right'}>
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                // itemsClassName="-translate-x-1/2"
              />
              </Marquee>    
            </Card>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-[320px] p-0 flex flex-col ">
            <CardHeader
              title="Beyond the code"
              description="Explore the my interest and hobby beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintREF}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                  drag
                  dragConstraints={constraintREF}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
            <Image src={map} alt="map" className="w-full h-full object-cover"/>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s] -z-20"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image src={gps} alt="gps" className="size-20"/>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
