import { GoogleGenAI } from "@google/genai";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Set GEMINI_API_KEY in .env or your environment before starting.");
}

const ai = new GoogleGenAI({ apiKey });
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  config: { systemInstruction: "Be concise and practical." },
});

const readline = createInterface({ input: stdin, output: stdout });

try {
  const response = await chat.sendMessage({
    message: "Plan a low-data commuter route in Sandton",
  });
  console.log(response.text);
  console.log("\nChat with the agent; enter /exit to quit.");

  while (true) {
    const message = (await readline.question("> ")).trim();
    if (message === "/exit") break;
    if (!message) continue;

    const reply = await chat.sendMessage({ message });
    console.log(`\n${reply.text}\n`);
  }
} finally {
  readline.close();
}
