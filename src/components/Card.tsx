import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({className,children,...other}:ComponentPropsWithoutRef<'div'>) => {
  return (
    <div>
      <div 
      className={twMerge("bg-gray-800 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:z-10 overflow-hidden after:outline-white/20 after:pointer-events-none ",className)}
      {...other}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ background: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default Card;
