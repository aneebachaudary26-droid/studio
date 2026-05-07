'use server';
/**
 * @fileOverview An AI tool for generating SEO keywords and meta descriptions for website sections.
 *
 * - generateSeoKeywordMeta - A function that handles the generation of SEO keywords and meta descriptions.
 * - SeoKeywordMetaGeneratorInput - The input type for the generateSeoKeywordMeta function.
 * - SeoKeywordMetaGeneratorOutput - The return type for the generateSeoKeywordMeta function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SeoKeywordMetaGeneratorInputSchema = z.object({
  sectionContent: z
    .string()
    .describe(
      'The content of the website section for which to generate SEO keywords and meta description.'
    ),
});
export type SeoKeywordMetaGeneratorInput = z.infer<
  typeof SeoKeywordMetaGeneratorInputSchema
>;

const SeoKeywordMetaGeneratorOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('An array of relevant SEO keywords for the section.'),
  metaDescription: z
    .string()
    .describe(
      'A concise and engaging meta description for the section, optimized for search engines.'
    ),
});
export type SeoKeywordMetaGeneratorOutput = z.infer<
  typeof SeoKeywordMetaGeneratorOutputSchema
>;

export async function generateSeoKeywordMeta(
  input: SeoKeywordMetaGeneratorInput
): Promise<SeoKeywordMetaGeneratorOutput> {
  return seoKeywordMetaGeneratorFlow(input);
}

const seoKeywordMetaGeneratorPrompt = ai.definePrompt({
  name: 'seoKeywordMetaGeneratorPrompt',
  input: { schema: SeoKeywordMetaGeneratorInputSchema },
  output: { schema: SeoKeywordMetaGeneratorOutputSchema },
  prompt: `You are an expert SEO specialist for academic and research-focused websites. Your task is to analyze the provided website section content and generate relevant SEO keywords and a concise meta description.

Focus on terms that a potential collaborator, employer, or academic peer would use to search for a profile like Aneeba Chaudary's. The meta description should be informative, engaging, and encourage clicks, summarizing the core value or content of the section.

Section Content:
{{{sectionContent}}}`,
});

const seoKeywordMetaGeneratorFlow = ai.defineFlow(
  {
    name: 'seoKeywordMetaGeneratorFlow',
    inputSchema: SeoKeywordMetaGeneratorInputSchema,
    outputSchema: SeoKeywordMetaGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await seoKeywordMetaGeneratorPrompt(input);
    return output!;
  }
);
