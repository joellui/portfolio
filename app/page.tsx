"use client"
import RetroGrid from "@/components/magicui/retro-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Home() {
  const words = `Welcome to my digital playground, where creativity meets innovation. Dive into a world where pixels narrate stories and lines of code bring ideas to life. Explore my portfolio, a canvas filled with passion-driven projects and insightful reflections. Let's embark on a journey of inspiration and discovery together.`

  return (
    <>
    <div className="container" >
      <h3 className=" m-10 text-3xl">
        Hello,
        <br />
        I am <span className="text-4xl font-bold">  Joel Louis</span>
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <TextGenerateEffect words={words} className="font-mono text-justify m-10" />
        </div>
        <div className="flex items-center justify-center">
          <Image alt="My Photo" src="/me.jpeg" width={400} height={500} className="rounded-md" />
        </div>
      </div>
    </div>
      <RetroGrid className="fixed inset-x-0 inset-y-0"/>
    </>
  );
}
