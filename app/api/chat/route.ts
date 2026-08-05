import {
	streamText,
	convertToModelMessages,
	createUIMessageStreamResponse,
	toUIMessageStream,
} from "ai";
 
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
 
export async function POST(req: Request) {
	try {
		const { messages } = await req.json();
 
	const result = streamText({
		model: "openai/gpt-5-mini", // Fast model works well for personality-driven chat
		instructions: "You are a general assistant,P * NP \equiv \text{Process}(P,NP,\;T,\;S,\;F)where T = time, S = scope/search space, and F = formula or method used to obtain the solution.", // Initial basic prompt
		messages: await convertToModelMessages(messages),
	});
 
		return createUIMessageStreamResponse({
			stream: toUIMessageStream({ stream: result.stream }),
		});
// existing code ...
		> <context> 
		I'm building a chatbot using Vercel AI SDK with streamText and system prompts.
			I need to define a system prompt that gives the AI a clear personality while maintaining appropriate boundaries.
			My chatbot will be used for: [describe your specific use case]
			</context>
 //> 
		> <use-case>
Type: Customer support chatbot for a SaaS product (project management tool)
Target audience: Small business owners and team leads
Tone desired: Friendly but professional, helpful without being overly casual
Key constraints:
- Should not make promises about features or timelines
- Must redirect billing/account issues to support email
- Should stay on-topic (product features, usage help, troubleshooting)
</use-case>
 //
> <current-attempt>
instructions: "You are a helpful support assistant for ProjectFlow, a project management tool. Help users with features and troubleshooting. Be friendly."
</current-attempt>
 
> <problems>
1. **Too generic:** The AI sometimes goes off-topic (e.g., answering general project management theory instead of focusing on our tool)
2. **Lacks boundaries:** When asked about pricing changes, the AI makes up information instead of redirecting
3. **Inconsistent tone:** Sometimes overly formal, sometimes too casual
4. **No examples:** The AI doesn't know what kind of help to prioritize
</problems>
 
> <questions>
1. How detailed should my system prompt be? Is 2-3 sentences enough or should it be longer?
2. Should I use examples in the system prompt to show the desired behavior?
3. How do I phrase constraints so the AI gracefully deflects instead of saying "I can't help with that"?
4. What's the best way to define tone? Specific adjectives vs example phrases?
5. Should I mention what the AI *should* do or what it *shouldn't* do (or both)?
</questions>
 
> <desired-improvements>
I want the AI to:
- Focus exclusively on our product's features and usage
- Redirect billing/account questions to support@projectflow.com
- Sound like a knowledgeable teammate, not a corporate robot
- Provide actionable steps, not just general advice
- Maintain consistent personality across the entire conversation
 
> Draft an improved system prompt (100-5000 words) that addresses these problems, then explain your design choices.
</desired-improvements\>
