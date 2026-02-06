
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-muted/5 rounded-full blur-3xl -z-10" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase">
                Available for New Projects
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                Crafting <span className="gradient-text">Exceptional</span> Digital Experiences
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Hi, I'm <span className="text-primary font-bold">Kaung Myat Soe</span>. 
                A React Developer with a focus on building scalable applications and intuitive user interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 font-bold text-base">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                <Link href="https://github.com/lizzy-km" target="_blank" className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/vincexoy/" target="_blank" className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="mailto:kaungmyatsoe.devk@gmail.com" className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 max-w-md">
              <div>
                <p className="text-3xl font-bold">2+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects Delivered</p>
              </div>
              {/* <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">UI Libraries</p>
              </div> */}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl border-2 border-border/50 bg-card overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-secondary p-4 flex gap-2 border-b">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-8 space-y-4 font-code text-sm">
                <p><span className="text-primary">const</span> <span className="text-foreground">developer</span> = &#123;</p>
                <p className="pl-6">name: <span className="text-accent">'Kaung Myat Soe'</span>,</p>
                <p className="pl-6">role: <span className="text-accent">'React Developer'</span>,</p>
                <p className="pl-6">skills: [<span className="text-accent">'React'</span>, <span className="text-accent">'TypeScript'</span>, <span className="text-accent">'Zustand'</span>, <span className="text-accent">'Next.js'</span>],</p>
                <p className="pl-6">specialty: <span className="text-accent">'HRMS & Point Systems'</span>,</p>
                <p className="pl-6 text-muted-foreground">// Building the future with high quality code</p>
                <p className="pl-6">passion: <span className="text-accent">'Code stability & Performance'</span></p>
                <p>&#125;;</p>
              </div>
            </div>
            {/* Background blur decorative element */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-primary/10 -z-10 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
