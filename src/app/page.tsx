
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { FigmaTool } from '@/components/sections/FigmaTool';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { ArrowBigDown, ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <FigmaTool /> */}
      <Contact />

      <div className=' absolute bottom-0 w-full h-[80] flex justify-center items-center
       ' >

        <Link href={'/#skills'} className=' flex  justify-center items-center bg-[#12131470] w-[40] h-[40] rounded-full ' >
          <ArrowDown />
        </Link>

      </div>

      <footer className="py-12 border-t border-border/50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xl font-headline font-bold tracking-tighter text-primary">
            KAUNG<span className="text-muted">.DEV</span>
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kaung Myat Soe. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground">
            <p>Built with Next.js, Tailwind</p>
            <p>Designed for Performance</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}
