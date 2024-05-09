"use client"
import RetroGrid from "@/components/magicui/retro-grid";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from "next/image";
import { ModeToggle } from "@/components/theme-btn";
import { BentoGridDemo } from "@/components/project_list";

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

        <div className="grid md:grid-rows-1 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 md:mt-10 ">
          <div>
            <TextGenerateEffect words={words} className="font-mono text-justify" />

            <div className="md:hidden mt-3">
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

              <Button variant="link" asChild>
                <Link href="https://www.linkedin.com/in/joelluim/" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Linkedin />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
              <Image alt="My Photo" src="/me.jpeg" width={350} height={450} className="rounded-[22px]" />
            </BackgroundGradient>
          </div>
        </div>

        <BentoGridDemo />


      </div>
      <RetroGrid className="fixed inset-x-0 inset-y-0" />
    </>
  );
}
