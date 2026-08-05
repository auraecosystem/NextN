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
		instructions: "You are a helpful assistant, .", // Initial basic prompt
		messages: await convertToModelMessages(messages),
	});
 
		return createUIMessageStreamResponse({
			stream: toUIMessageStream({ stream: result.stream }),
		});
// existing code ...
