import { callLLM } from "./src/llm/phi3.js";

(async () => {
  const prompt = `
    convert the client request into requirments.

    client input: 
    create an ecommmerce website

    Return JSON with: 
    -projectType
    -techStack
    -features
    -timeline 
    `;
  const res = await callLLM(prompt);
  console.log(res);
})();
