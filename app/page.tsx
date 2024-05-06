"use client"
import RetroGrid from "@/components/magicui/retro-grid";
import FancyText from "@carefully-coded/react-text-gradient";

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center w-screen h-screen" >
    <FancyText className="text-7xl font-bold text-left"
      gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
      animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
      animateDuration={2000}
    >
      Home Page
    </FancyText>
      <RetroGrid />
    </div>
    </>
  );
}
