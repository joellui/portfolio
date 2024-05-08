"use client"
import RetroGrid from "@/components/magicui/retro-grid";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Mail } from 'lucide-react';
import Image from "next/image";
import { ModeToggle } from "@/components/theme-btn";

export default function Home() {
  const words = `Welcome to my digital playground, where creativity meets innovation. Dive into a world where pixels narrate stories and lines of code bring ideas to life. Explore my portfolio, a canvas filled with passion-driven projects and insightful reflections. Let's embark on a journey of inspiration and discovery together.`

  return (
    <>
      <div className="container" >
        <h3 className="mt-5 text-3xl">
          Hello,
          <br />
          I am <span className="text-4xl font-bold">  Joel Louis</span>
        </h3>

        <div className="grid md:grid-rows-3 md:grid-flow-col grid-cols-1 gap-10 md:mt-10 ">
          <div className="col-span-2 ">
            <TextGenerateEffect words={words} className="font-mono text-justify" />
          </div>

          <div className="col-span-2 md:opacity-0 opacity-100">
            <Button variant="link" className="" asChild>
              <Link href="https://github.com/joellui" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                <Github />
              </Link>
            </Button>

            <Button variant="link" asChild>
              <Link href="mailto:joellouis2000@gmail.com?subject=Feedback" type="email" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                <Mail />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center col-span-2 row-span-2 ">
            <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
              <Image alt="My Photo" src="/me.jpeg" width={400} height={500} className="rounded-[22px]" />
            </BackgroundGradient>
          </div>
        </div>
      </div>
      <RetroGrid className="fixed inset-x-0 inset-y-0" />
    </>
  );
}
