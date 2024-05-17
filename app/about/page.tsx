"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import FancyText from "@carefully-coded/react-text-gradient";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import WorkExp from "@/components/work_exp";
import { ActivityList } from "@/components/activity_exp";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center z-50 md:w-3/4 w-11/12 dark:bg-black dark:bg-opacity-80 bg-white border shadow bg-opacity-70 pt-5 mt-5 rounded-md">
        <div className="z-20 containe  opacity-100 grid md:grid-rows-1 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 p-7">
          <div className="pt-16">
            <h1 className="text-4xl font-extrabold">About me</h1>
            <p className="mt-5">
              I am a Software Engineer with a passion for creating innovative solutions. I am a quick learner and a team player who enjoys collaborating with others to achieve common goals. I have experience in full-stack development, and I am proficient in various programming languages and frameworks. I am always eager to learn new technologies and expand my skill set.

            </p>

          </div>

          <div className="flex justify-center">
            <div className="m-5">
              <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
                <Image alt="My Photo" src="/me.jpeg" width={350} height={450} className="rounded-[22px]" />
              </BackgroundGradient>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-7 flex flex-col">
          <div className="col-span-4">
            <h3 className="text-xl ml-4 font-semibold">Activity</h3>
            <ActivityList/>
          </div>
          <div className=" col-span-3">
            <div className="p-5 pb-10 m-3 h-fit dark:bg-black dark:bg-opacity-45 bg-opacity-15 dark:border-white/[0.2] shadow-sm bg-white border rounded-lg">
              <WorkExp />
            </div>
          </div>
        </div>
      </div>
      <DotPattern
        className="inset-0 z-0 fixed"
      />
    </div>
  );
}