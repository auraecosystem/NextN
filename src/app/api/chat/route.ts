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
