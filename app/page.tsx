"use client"
import RetroGrid from "@/components/magicui/retro-grid";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from "next/image";
import { BentoGridProject } from "@/components/project_list";
import WorkExp from "@/components/work_exp";
import { ActivityList } from "@/components/activity_exp";

export default function Home() {
  const words = `Welcome to my digital playground, where creativity meets innovation. Dive into a world where pixels narrate stories and lines of code bring ideas to life. Explore my portfolio, a canvas filled with passion-driven projects and insightful reflections. Let's embark on a journey of inspiration and discovery together.`

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center z-50 md:w-3/4 w-11/12" >
        <h3 className="mt-5 text-3xl">
          Hello,
          <br />
          I am <span className="text-4xl font-bold">  Joel Louis</span>
        </h3>

        <div className="z-10 grid md:grid-rows-1 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 md:mt-10 ">
          <div>
            <TextGenerateEffect words={words} className="font-mono text-justify" />

            <div className="md:hidden mt-3 flex flex-row">
              <Button variant="link" className="" asChild>
                <Link href="https://github.com/joellui" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Github className="dark:hover:stroke-blue-300 hover:stroke-blue-600" />
                </Link>
              </Button>

              <Button variant="link" asChild>
                <Link href="mailto:joellouis2000@gmail.com?subject=Feedback" type="email" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Mail className="dark:hover:stroke-blue-300 hover:stroke-blue-600" />
                </Link>
              </Button>

              <Button variant="link" asChild>
                <Link href="https://www.linkedin.com/in/joelluim/" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Linkedin className="dark:hover:stroke-blue-300 hover:stroke-blue-600" />
                </Link>
              </Button>

              <Button variant="link" asChild>
                <Link href="https://medium.com/@joellouis" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 dark:hover:stroke-blue-300 hover:stroke-blue-600 dark:hover:fill-blue-300 hover:fill-blue-600 stroke-gray-500 dark:stroke-gray-400 fill-gray-500 dark:fill-gray-400" ><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 ">
              <Image alt="My Photo" src="/me.jpeg" width={350} height={450} className="rounded-[22px]" />
            </BackgroundGradient>
          </div>
        </div>

        <BentoGridProject />

        <div className="z-10 grid md:grid-cols-2 grid-cols-1 gap-8 w-full mt-9">
          <div className="md:m-3 ">
            <h3 className="text-2xl font-extrabold underline decoration-wavy underline-offset-2"> Activity</h3>

            <ActivityList 
              // toShow={-10} 
            />


          </div>
          <div className="z-10 p-5 pb-10 md:m-3 h-fit dark:bg-black dark:border-white/[0.2] bg-white border border-black/[0.2] rounded-lg">
            <WorkExp />
          </div>
        </div>

      </div>
      <RetroGrid className="z-0 fixed inset-x-0 inset-y-0" />
    </div>
  );
}
