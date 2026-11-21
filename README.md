# Gemini Agent

Minimal Node.js CLI using Google's GenAI SDK. It starts with a Sandton route-planning prompt, then keeps a multi-turn chat in memory until you enter `/exit`.

1. Copy `.env.example` to `.env` and set `GEMINI_API_KEY`.
2. Run `npm install` once, then `npm start`.

Requires Node.js 20.6 or newer. Chat state is kept only for the current process.
