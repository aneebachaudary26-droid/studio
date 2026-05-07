'use server';
/**
 * @fileOverview A Genkit flow for an AI content assistant to refine and structure various types of professional content.
 *
 * - aiContentAssistant - A function that generates refined content based on user input.
 * - AiContentAssistantInput - The input type for the aiContentAssistant function.
 * - AiContentAssistantOutput - The return type for the aiContentAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContentAssistantInputSchema = z.object({
  contentType: z.enum(['aboutMe', 'projectDescription', 'publicationImpact']).describe('The type of content to generate or refine.'),
  inputPoints: z.array(z.string()).describe('A list of key points or sentences to be included in the content.'),
  keywords: z.array(z.string()).optional().describe('Optional keywords to emphasize or include in the content.'),
  context: z.string().optional().describe('Any additional context or existing text relevant to the content generation.'),
  tone: z.enum(['professional', 'academic', 'industrial R&D', 'confident', 'concise']).default('professional').describe('The desired tone for the generated content.'),
});
export type AiContentAssistantInput = z.infer<typeof AiContentAssistantInputSchema>;

const AiContentAssistantOutputSchema = z.object({
  refinedContent: z.string().describe('The professionally refined and structured content.'),
});
export type AiContentAssistantOutput = z.infer<typeof AiContentAssistantOutputSchema>;

export async function aiContentAssistant(input: AiContentAssistantInput): Promise<AiContentAssistantOutput> {
  return aiContentAssistantFlow(input);
}

const aiContentAssistantPrompt = ai.definePrompt({
  name: 'aiContentAssistantPrompt',
  input: { schema: AiContentAssistantInputSchema },
  output: { schema: AiContentAssistantOutputSchema },
  prompt: `You are an expert content writer specializing in crafting professional and concise descriptions for deep-tech researchers and academic scientists. Your goal is to help Aneeba Chaudary, a Ph.D. Candidate in Materials Science & Engineering, refine her portfolio content.

Current content type to generate/refine: "{{contentType}}"
Desired tone: "{{tone}}"

Here are the key points to incorporate:
{{#each inputPoints}}- {{this}}
{{/each}}

{{#if keywords}}Keywords to emphasize: {{#each keywords}}"{{this}}"{{#unless @last}}, {{/unless}}{{/each}}.
{{/if}}

{{#if context}}Additional context/existing text:
{{{context}}}
{{/if}}

---

Based on the above, please generate a professionally refined and structured piece of content.
Ensure it is concise, clear, and maintains the specified tone.

{{#ifeq contentType "aboutMe"}}
For the 'About Me' section, craft a compelling storytelling narrative that highlights Aneeba's journey, expertise at the intersection of polymer science, functional coatings, textile engineering, nanomaterials, wet chemistry, and industrial R&D. The tone should be professional, confident, and human.
{{/ifeq}}

{{#ifeq contentType "projectDescription"}}
For a research project description, focus on the research problem addressed, the methods used, key outcomes, and the tools/techniques employed. The tone should be research-driven and professional.
{{/ifeq}}

{{#ifeq contentType "publicationImpact"}}
For a publication impact statement, summarize the core findings, highlight the significance and contributions to the field, and explain its relevance concisely. The tone should be academic and precise.
{{/ifeq}}

Output ONLY the refined content, formatted as a JSON object with a single field 'refinedContent'.`,
});

const aiContentAssistantFlow = ai.defineFlow(
  {
    name: 'aiContentAssistantFlow',
    inputSchema: AiContentAssistantInputSchema,
    outputSchema: AiContentAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await aiContentAssistantPrompt(input);
    if (!output) {
      throw new Error('Failed to generate content.');
    }
    return output;
  }
);
