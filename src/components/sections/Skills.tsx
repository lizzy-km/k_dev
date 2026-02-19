
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, Variant, Variants } from "framer-motion";

import {
  Code2,
  Layout,
  Database,
  Server,
  Smartphone,
  UserCircle2,
  Zap,
  CheckCircle2,
  GitBranch,
  Layers
} from 'lucide-react';
import SkillCard from '../ui/SkillCard';

export function Skills() {
  const categories = [
    {
      title: "Hard Skills",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React.js / Next.js", level: 98 },
        { name: "Zustand / Redux", level: 90 },
        { name: "React Query", level: 92 },
        { name: "Tailwind CSS", level: 96 },
        { name: "REST APIs / WebSockets", level: 88 },
        { name: "Firebase", level: 85 },
        { name: "AntD / Mantine / Chakra", level: 94 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <UserCircle2 className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Communication", level: 90 },
        { name: "Time Management", level: 95 },
        { name: "Teamwork", level: 98 },
        { name: "Self-motivation", level: 92 },
        { name: "Problem Solving", level: 96 }
      ]
    }
  ];


  const marqueeVariants:Variants = {
    animate: {
      x: ['0%', '-150%'], // Adjust -1035 based on your content width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };


  return (
    <section id="skills" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Expertise & <span className="text-primary">Capabilities</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit and interpersonal skills developed through years of building complex web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-border">
                {cat.icon}
                <h3 className="text-2xl font-bold uppercase tracking-wider text-sm">{cat.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <SkillCard key={sIdx} skill={skill} sIdx={sIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 w-[100%] overflow-clip mx-auto ">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-muted mb-8">Tools I work with daily</h3>

          <div className=' flex flex-row gap-[40] justify-between max-w-[70%] mx-auto overflow-hidden  ' >
            {
                [0,1,3,4].map((_, idx) => <motion.div

              variants={marqueeVariants as Variants}
              animate="animate"
              className="flex w-auto  justify-center gap-8 ">

              <motion.div key={idx} initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><GitBranch className="h-6 w-6" /> <span className="font-bold">Git/GitHub</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex w-[150] items-center gap-2"><Zap className="h-6 w-6" /> <span className="font-bold">Fast Refresh</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><Layers className="h-6 w-6" /> <span className="font-bold">Agile/Scrum</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><Smartphone className="h-6 w-6" /> <span className="font-bold">Responsive</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><Server className="h-6 w-6" /> <span className="font-bold">Axios</span></motion.div>
            </motion.div>
 )
            }
            
            
            {/* <motion.div initial={{ x: '100%' }} animate={{
              x: '-100%',

            }}
              transition={
                {
                  type: 'tween',
                  repeat: Infinity,
                  duration: 20,
                  delay: 3
                }
              }
              className="flex w-auto justify-center gap-8 ">
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><GitBranch className="h-6 w-6" /> <span className="font-bold">Git/GitHub</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex w-[150] items-center gap-2"><Zap className="h-6 w-6" /> <span className="font-bold">Fast Refresh</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><Layers className="h-6 w-6" /> <span className="font-bold">Agile/Scrum</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><Smartphone className="h-6 w-6" /> <span className="font-bold">Responsive</span></motion.div>
              <motion.div initial={{
                opacity: 0.5
              }} whileHover={{
                opacity: 1
              }} className="flex items-center gap-2"><Server className="h-6 w-6" /> <span className="font-bold">Axios</span></motion.div>
            </motion.div> */}
          </div>

        </div>
      </div>
    </section>
  );
}
