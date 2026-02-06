'use server';
/**
 * @fileOverview Converts Figma design code to React functional components.
 *
 * - figmaToReact - A function that takes Figma code and returns React code.
 * - FigmaToReactInput - The input type for the figmaToReact function.
 * - FigmaToReactOutput - The return type for the figmaToReact function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FigmaToReactInputSchema = z.string().describe('Figma design code to convert to React.');
export type FigmaToReactInput = z.infer<typeof FigmaToReactInputSchema>;

const FigmaToReactOutputSchema = z.string().describe('React functional component code.');
export type FigmaToReactOutput = z.infer<typeof FigmaToReactOutputSchema>;

export async function figmaToReact(input: FigmaToReactInput): Promise<FigmaToReactOutput> {
  return figmaToReactFlow(input);
}

const figmaToReactPrompt = ai.definePrompt({
  name: 'figmaToReactPrompt',
  input: {schema: FigmaToReactInputSchema},
  output: {schema: FigmaToReactOutputSchema},
  prompt: `You are a code conversion expert. Convert the following Figma design code to a React functional component.

Figma Code:
{{{$input}}}`, // Changed {{$value}} to {{$input}}
});

const figmaToReactFlow = ai.defineFlow(
  {
    name: 'figmaToReactFlow',
    inputSchema: FigmaToReactInputSchema,
    outputSchema: FigmaToReactOutputSchema,
  },
  async input => {
    const {output} = await figmaToReactPrompt(input);
    return output!;
  }
);
