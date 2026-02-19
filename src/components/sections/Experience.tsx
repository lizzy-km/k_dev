
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      company: "Digital Base",
      role: "React Developer",
      period: "2025 - Present",
      location: "Yangon, Myanmar",
      description: "Leading frontend development for large-scale enterprise applications with a focus on HR and financial systems.",
      duties: [
        "Develop robust UI features using React and TypeScript ensuring code stability.",
        "Take ownership of HRMS and Point System/Wallet application key features.",
        "Implement application-wide state using Zustand and efficient data fetching with React Query.",
        "Proactively identify and resolve performance bottlenecks using code splitting and virtualization."
      ],
      skills: ["React", "TypeScript", "Zustand", "React Query", "HRMS", "Point Systems"]
    }
  ];

  const education = [
    {
      school: "Government Technical Institute, Myingyan",
      degree: "Electronic & Communication",
      period: "2018 - 2020"
    },
    {
      school: "Government Technical High School, Taungoo",
      degree: "Electronic & Communication",
      period: "2016 - 2018"
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Professional <span className="text-primary">Timeline</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A track record of delivering high-quality software in fast-paced startup environments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary text-primary-foreground rounded-lg">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-primary/20 space-y-6 pb-4">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">{exp.role}</h4>
                    <p className="text-lg font-semibold flex items-center gap-2">
                      {exp.company} <span className="text-muted text-sm font-normal">• {exp.location}</span>
                    </p>
                  </div>
                  <Badge variant="secondary" className="font-code py-1 px-3">
                    <Calendar className="h-3 w-3 mr-2" /> {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-muted">Key Responsibilities</p>
                <ul className="space-y-3">
                  {exp.duties.map((duty, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {exp.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="outline" className="border-primary/30">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-secondary text-primary rounded-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-muted/20 space-y-2">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-background" />
                <h4 className="font-bold text-primary">{edu.school}</h4>
                <p className="text-sm font-medium">{edu.degree}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {edu.period}
                </p>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0.8, scale: 0.4 }} whileHover={{ boxShadow: "0 4px 100px -10px #d4d4d430" }} whileInView={{ opacity: 1, scale: 1, boxShadow: ["0 4px 10px -1px #d4d4d480", "0 4px 80px -10px #d4d4d430","0 4px 10px -1px #d4d4d480","0 4px 80px -10px #d4d4d430"] }} transition={{ duration: 0.7 }} className="mt-12 p-6 bg-secondary rounded-xl space-y-4 border border-border">
            <h4 className="font-bold">Why Hire Me?</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I don't just write code. I solve business problems with engineering solutions. My experience with transactional systems (Point/Wallet) has taught me the importance of security, real-time feedback, and user experience.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle2 className="h-4 w-4" /> Available immediately
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
