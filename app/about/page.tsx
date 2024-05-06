"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import FancyText from "@carefully-coded/react-text-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <>
        <div className="flex items-center justify-center w-screen h-screen" >
        <FancyText className="text-7xl font-bold text-left"
          gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
          animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
          animateDuration={2000}
        >
          About Page
        </FancyText>
          <DotPattern width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )} />
        </div>
        </>
    );
  }