
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { figmaToReact } from '@/ai/flows/figma-to-react';
import { Loader2, Figma, Code, Copy, Check, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function FigmaTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleConvert = async () => {
    if (!input.trim()) {
      toast({
        title: "Input required",
        description: "Please paste your Figma design code or frame data.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await figmaToReact(input);
      setOutput(result);
    } catch (error) {
      toast({
        title: "Conversion Error",
        description: "Something went wrong while processing your request.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "React component code copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tool" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-3 w-3" /> GenAI Feature
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none">Figma to <span className="text-primary">React</span></h2>
            <p className="text-muted-foreground">
              One of my flagship projects: A GenAI tool that turns Figma frame data into production-ready React functional components. Try it out below!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">1</div>
              <span>Copy Figma JSON data from your plugin</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">2</div>
              <span>Paste it into the tool</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">3</div>
              <span>Get instant high-quality React code</span>
            </div>
          </div>

          <div className="p-4 bg-secondary/50 rounded-xl border border-dashed border-primary/30">
            <p className="text-xs italic text-muted-foreground">
              Note: This tool uses a custom LLM flow optimized for front-end architecture and UI standards like Tailwind and Lucide.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="bg-card border-border shadow-2xl overflow-hidden">
            <CardHeader className="bg-secondary/30 flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <Figma className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Design Input</CardTitle>
              </div>
              <Button 
                onClick={handleConvert} 
                disabled={isLoading} 
                size="sm"
                className="font-bold"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate React
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
                <div className="border-r border-border h-full overflow-hidden">
                  <Textarea 
                    placeholder="Paste Figma JSON or Frame description here..." 
                    className="h-full w-full rounded-none border-none resize-none bg-transparent focus-visible:ring-0 p-6 font-code text-xs"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="relative h-full bg-background/50 overflow-hidden">
                  {output ? (
                    <>
                      <div className="absolute top-4 right-4 z-10">
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          onClick={handleCopy}
                          className="rounded-full h-8 w-8"
                        >
                          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <div className="h-full w-full overflow-auto p-6">
                        <pre className="text-xs font-code text-accent whitespace-pre-wrap">
                          <code>{output}</code>
                        </pre>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8 text-center space-y-4">
                      <Code className="h-12 w-12 opacity-20" />
                      <p className="text-sm">Your React component code will appear here after conversion.</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
