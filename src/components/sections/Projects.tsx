
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Projects() {
  const projects = [
    {
      title: "React + Firebase Social Media",
      description: "A full-featured Instagram/Facebook clone with real-time updates, story features, and messaging.",
      image: PlaceHolderImages.find(img => img.id === 'social-media')?.imageUrl,
      liveUrl: "/projects/social",
      githubUrl: "https://github.com/lizzy-km/instagram-k",
      tags: ["React", "Firebase", "Realtime", "Tailwind"],
      features: ["Create Posts & Stories", "Direct Messaging", "Social Interactions", "Email/Password Auth"]
    },
    {
      title: "The Movie Database Clone",
      description: "A comprehensive movie discovery platform utilizing The Movie DB API with high design fidelity.",
      image: PlaceHolderImages.find(img => img.id === 'movie-db')?.imageUrl,
      liveUrl: "/projects/movie",
      githubUrl: "https://github.com/lizzy-km/themoviedb-org",
      tags: ["React", "API Integration", "Styled Components"],
      features: ["Search Movies", "Trending Lists", "Details & Cast", "Responsive Grid"]
    },
    {
      title: "ClarityCareer",
      description: "The transparent job board. Find jobs, company reviews, and salary insights all in one place.",
      image: PlaceHolderImages.find(img => img.id === 'career-hub')?.imageUrl,
      liveUrl: "/projects/career-hub",
      githubUrl: "https://github.com/lizzy-km/clarity-career",
      tags: ["Next", "Firebase", "Redix UI", "Styled Components"],
      features: ["Find &  Post Jobs", "Company Reviews", "Salary Insights", "Interview Experiences"]
    },
    {
      title: "Figma Plugin (LazyMode)",
      description: "An innovative design-to-code tool that generates React functional component code from Figma frames.",
      image: PlaceHolderImages.find(img => img.id === 'figma-plugin')?.imageUrl,
      liveUrl: "https://github.com/lizzy-km/LazyMode",
      githubUrl: "https://github.com/lizzy-km/LazyMode",
      tags: ["Figma API", "Typescript", "Plugin Dev"],
      features: ["Instant Code Generation", "Support all Frame types", "Exportable Snippets"]
    }
  ];

  return (
    <section id="projects" className="bg-secondary/20">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my personal and open-source work demonstrating technical skill and design sensitivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="group overflow-hidden bg-card border-border flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.image || 'https://placehold.co/600x400'} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="software project screenshot"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button asChild size="icon" variant="secondary" className="rounded-full">
                    <Link href={project.liveUrl} ><Eye className="h-5 w-5" /></Link>
                  </Button>
                  <Button asChild size="icon" variant="secondary" className="rounded-full">
                    <Link href={project.githubUrl} target="_blank"><Github className="h-5 w-5" /></Link>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex gap-2 flex-wrap mb-2">
                  {project.tags.map((tag, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="text-[10px] uppercase font-bold tracking-tighter">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted tracking-widest">Key Features:</p>
                  <ul className="text-xs space-y-1">
                    {project.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex gap-4">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={project.liveUrl} >Live Demo <ExternalLink className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={project.githubUrl} target="_blank" >Source <Github className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
