
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-btn";
import { Github, Linkedin, Mail, SquareLibrary } from 'lucide-react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Link from "next/link";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Joel's Portfolio",
  description: "Hi, lets explore the tech world together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="h-screen w-screen">

            {children}

            <div className="md:inset-x-0 md:h-32" >
            </div>


            <footer className="z-50 md:fixed inset-x-0 bg-slate-100 rounded-lg shadow m-4 dark:bg-gray-800 bottom-0 opacity-70 hover:opacity-95 ease-in-out duration-300 ">
              <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Joel Louis Menachery All Rights Reserved.
                </span>
                <ul className="flex flex-row flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <Button variant="link" asChild>
                      <Link href="/" className="hover:underline">Home</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link href="/about" className="hover:underline">About</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" disabled asChild>
                      <Link href="/Resume.pdf" rel="noopener noreferrer" target="_blank" className="hover:underline">Resume</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link href="https://github.com/joellui" className="text-sm font-medium text-gray-500 dark:text-gray-400 ">
                        <Github className="dark:hover:stroke-blue-300 hover:stroke-blue-600" />
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild className="hidden md:block">
                      <Link href="mailto:joellouis2000@gmail.com?subject=Feedback" type="email" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Mail className="dark:hover:stroke-blue-300 hover:stroke-blue-600" />
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link href="https://www.linkedin.com/in/joelluim/" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Linkedin className="dark:hover:stroke-blue-300 hover:stroke-blue-600 " />
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="link" asChild>
                      <Link href="https://medium.com/@joellouis" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-8 dark:hover:stroke-blue-300 hover:stroke-blue-600 dark:hover:fill-blue-300 hover:fill-blue-600 stroke-gray-500 dark:stroke-gray-400 fill-gray-500 dark:fill-gray-400" ><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <ModeToggle />
                  </li>

                </ul>
              </div>
            </footer>

          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
