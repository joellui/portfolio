import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <>
      <h2 className="mt-8 text-2xl font-bold">Explore My Projects</h2>
      <BentoGrid className=" mt-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] animate-pulse bg-neutral-400 dark:bg-neutral-800 rounded-md" />
);

const Description1 = () => (
  <div className="block">
    <p>Web application for user to upload pdf file and the content will be extracted and stored using Tesseract OCR</p>
    <div> ---- </div>

    <Image className="inline-block m-1" src="https://img.shields.io/badge/Django-%23092E20?style=for-the-badge&logo=django&logoColor=%23092E20&labelColor=black" alt="django" width={80} height={80} />
    <Image className="inline-block m-1" src="https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=%23E34F26&labelColor=black" alt="html5" width={80} height={80} />
  </div>
)

const Description2 = () => (
  <div className="block">
    <p>Streaming application for Android reached 100+</p>
    <div> ---- </div>

    <Image className="inline-block m-1" src="https://img.shields.io/badge/kotlin-%237F52FF?style=for-the-badge&logo=kotlin&logoColor=%237F52FF&labelColor=black" alt="Kotlin" width={80} height={80} />
    <Image className="inline-block m-1" src="https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=%23F05032&labelColor=black" alt="git" width={80} height={80} />
  </div>
)

const Description3 = () => (
  <div className="block">
    <p>Android Game using Unity with 100+ downloads</p>
    <div> ---- </div>

    <Image className="inline-block m-1" src="https://img.shields.io/badge/csharp-%23512BD4?style=for-the-badge&logo=csharp&logoColor=%23512BD4&labelColor=black" alt="C#" width={80} height={80} />
    <Image className="inline-block m-1" src="https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=%23F05032&labelColor=black" alt="git" width={80} height={80} />
    <Image className="inline-block m-1" src="https://img.shields.io/badge/google%20analytics-%23E37400?style=for-the-badge&logo=googleanalytics&logoColor=%23E37400&labelColor=black" alt="google analytics" width={80} height={80} />
  </div>
)

const Description4 = () => (
  <div className="block">
    <p>Published paper on Brain Tumor Detection using MRI scans in IEEE Xplore</p>
    <div> ---- </div>
    <Image className="inline-block m-1" src="https://img.shields.io/badge/python-%233776AB?style=for-the-badge&logo=python&logoColor=%233776AB&labelColor=black" alt="Python" width={80} height={80} />
    <Image className="inline-block m-1" src="https://img.shields.io/badge/tensorflow-%23FF6F00?style=for-the-badge&logo=tensorflow&logoColor=%23FF6F00&labelColor=black" alt="Tensor Flow" width={80} height={80} />
    <Image className="inline-block m-1" src="https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=%23F05032&labelColor=black" alt="git" width={80} height={80} />
  </div>
)

const Description5 = () => (
  <div className="block">
    <p>Modifying encrypted data using microsoft SEAL</p>
    <div> ---- </div>
    <Image className="inline-block m-1" src="https://img.shields.io/badge/C%2B%2B-%2300599C?style=for-the-badge&logo=cplusplus&logoColor=%2300599C&labelColor=black" alt="C++" width={80} height={80} />
    </div>
)

const items = [
  {
    title: "Extract content from PDF OCR",
    description: <Description1 />,
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ryu",
    description: <Description2 />,
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dodge",
    description: <Description3 />,
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IEEE Xplore paper on MRI scans for Brain Tumor Detection",
    description: <Description4 />,
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Microsoft SEAL",
    description: <Description5 />,
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  }
];

