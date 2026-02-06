
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, Send, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/dev.lizzy.", label: "Facebook" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/vincexoy/", label: "Linkedin" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/lizzy-km", label: "Github" },
  ];

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how I can help your team build better products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm currently based in Yangon and open to remote opportunities worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-bold">Email</p>
                  <p className="font-semibold">kaungmyatsoe.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-bold">Phone</p>
                  <p className="font-semibold">+959 761723325</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-bold">Location</p>
                  <p className="font-semibold">Yangon / Hlaing, Myanmar</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-muted uppercase tracking-widest font-bold">Social Profiles</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.href} 
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <Input placeholder="John Doe" className="bg-secondary/50 border-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-secondary/50 border-none focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-secondary/50 border-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Message</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-secondary/50 border-none focus-visible:ring-primary" />
              </div>
              <Button className="w-full font-bold h-12 text-base">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
