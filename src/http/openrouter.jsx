import { formatString } from "../utils/utils";
import { apiPost } from "./common";

const VERSION = "v1";
const BASE_URL = `https://openrouter.ai/api/${VERSION}`;

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
// const MODEL_NAME = "meta-llama/llama-3-8b-instruct:free";
const MODEL_NAME = "google/gemma-2-9b-it:free";
const MODEL_INPUT_TEXT =
  "Generate 1 paragraph with total words not more than 4000 from below details: {0}";

const HEADER = {
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
};

const ENDPOINTS = {
  chat: "/chat/completions",
};

export const generateParagrah = (details) => {
  const inputText = formatString(MODEL_INPUT_TEXT, [JSON.stringify(details)]);

  const body = {
    model: MODEL_NAME,
    messages: [
      {
        role: "user",
        content: inputText,
      },
    ],
  };
  return apiPost(BASE_URL, ENDPOINTS.chat, body, HEADER);
};
