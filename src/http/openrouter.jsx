import { apiPost } from "./comon";

const VERSION = "v1";
const BASE_URL = `https://openrouter.ai/api/${VERSION}`;

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
// const MODEL_NAME = "meta-llama/llama-3-8b-instruct:free";
const MODEL_NAME = "google/gemma-2-9b-it:free";

const HEADER = {
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
};

const ENDPOINTS = {
  chat: "/chat/completions",
};

export const generateParagrah = () => {
  const body = {
    model: MODEL_NAME,
    messages: [{ role: "user", content: "What is the meaning of life?" }],
  };
  return apiPost(BASE_URL, ENDPOINTS.chat, body, HEADER);
};
