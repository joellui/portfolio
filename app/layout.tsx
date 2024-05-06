
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-btn";
import { Github, Mail, Download } from 'lucide-react';
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="h-screen w-screen">

            {children}



            <footer className="fixed inset-x-0 bg-slate-100 rounded-lg shadow m-4 dark:bg-gray-800 bottom-0 opacity-50 hover:opacity-95 ease-in-out duration-300 ">
              <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Joel Louis Menachery All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
                      <Link href="/Resume.pdf" rel="noopener noreferrer" target="_blank" className="hover:underline">Resume <Download className="m-2" size={20} /> </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="" asChild>
                    <Link href="https://github.com/joellui" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      <Github />
                    </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                    <Link href="mailto:joellouis2000@gmail.com?subject=Feedback" type="email" className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      <Mail />
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
      </body>
    </html>
  );
}
