
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-clip items-center pt-20 ">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-muted/5 rounded-full blur-3xl -z-10" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.span initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="inline-block py-1 px-3 rounded-full bg-secondary border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase">
                Available for New Projects
              </motion.span>
              <motion.h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                <motion.p transition={{ duration: 0.3 }} initial={{ opacity: 0, scale: 20, y: -2000 }} animate={{ opacity: 1, scale: 1, y: 0 }}>Crafting</motion.p>
                <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, x: 0 }} className="gradient-text">Exceptional</motion.div>
                <motion.p transition={{ duration: 0.7 }} initial={{ opacity: 0, scale: 20, y: 2000 }} animate={{ opacity: 1, scale: 1, y: 0 }}>Digital Experiences</motion.p>


              </motion.h1>
              <h1 className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Hi, I'm <span className="text-primary font-bold">Kaung Myat Soe</span>.
                A React Developer with a focus on building scalable applications and intuitive user interfaces.
              </h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 font-bold text-base">
                <motion.a href="#projects">
                  View My Work <motion.span initial={{ opacity: 0, scale: 0.8, x: -10 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </motion.a>
              </Button>
              <div className="flex items-center gap-4">
                <motion.a initial={{ opacity: 0, scale: 0.2, x: 0 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.4 }} href="https://github.com/lizzy-km" className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a initial={{ opacity: 0, scale: 0.6, x: 0 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.2 }} href="https://www.linkedin.com/in/vincexoy/" target="_blank" className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a initial={{ opacity: 0, scale: 0.2, x: 0 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.4 }} href="mailto:kaungmyatsoe.devk@gmail.com" className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 max-w-md">
              <motion.div className="text-center">
                <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="text-3xl font-bold">2+</motion.p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </motion.div>
              <div>
                <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="text-3xl font-bold">5+</motion.p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects Delivered</p>
              </div>
              {/* <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">UI Libraries</p>
              </div> */}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div initial={{ opacity: 0, scale: 0.6, rotate: 3 }} whileHover={{
              rotate: 0,
              scale: 1.05
            }} animate={{ opacity: 1, scale: 1, rotate: 3 }} transition={{ duration: 0.2 }} className="relative z-10 rounded-2xl border-2 border-border/50 bg-card overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
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
            </motion.div>
            {/* Background blur decorative element */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-primary/10 -z-10 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
