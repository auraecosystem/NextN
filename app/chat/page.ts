import { Response } from "@/components/ai-elements/response";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";

function renderMessagePart(message: any, part: any, index: number) {
  const key = part.toolCallId ?? `${message.id}-${index}`;

  switch (part.type) {
    case "text":
      return (
        <Response key={key}>
          {part.text}
        </Response>
      );

    default:
      // Automatically render every tool-* response
      if (part.type.startsWith("tool-")) {
        return (
          <Tool key={key}>
            <ToolHeader
              type={part.type.replace("tool-", "")}
              state={part.state}
            />

            <ToolContent>
              <ToolInput input={part.input} />

              <ToolOutput
                output={
                  part.output
                    ? JSON.stringify(part.output, null, 2)
                    : undefined
                }
                errorText={part.errorText}
              />
            </ToolContent>
          </Tool>
        );
      }

      // Image parts
      if (part.type === "image") {
        return (
          <img
            key={key}
            src={part.url}
            alt={part.alt ?? "Generated image"}
            className="max-w-full rounded-lg border"
          />
        );
      }

      // File attachments
      if (part.type === "file") {
        return (
          <div
            key={key}
            className="rounded-lg border p-3 text-sm"
          >
            <strong>{part.name}</strong>
            <br />
            <a
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Download
            </a>
          </div>
        );
      }

      // Reasoning (optional)
      if (part.type === "reasoning") {
        return (
          <details
            key={key}
            className="rounded-lg border p-3 bg-muted"
          >
            <summary>Reasoning</summary>
            <pre className="whitespace-pre-wrap">
              {part.text}
            </pre>
          </details>
        );
      }

      // Unknown part fallback
      return (
        <pre
          key={key}
          className="rounded-lg bg-gray-100 p-3 text-xs overflow-auto"
        >
          {JSON.stringify(part, null, 2)}
        </pre>
      );
  }
}

export function MessageRenderer({ message }: { message: any }) {
  if (message.role === "assistant") {
    return (
      <>
        {message.parts?.map((part: any, index: number) =>
          renderMessagePart(message, part, index)
        )}
      </>
    );
  }

  return (
    <Response>
      {message.parts
        ?.filter((part: any) => part.type === "text")
        .map((part: any) => part.text)
        .join("")}
    </Response>
  );
}
