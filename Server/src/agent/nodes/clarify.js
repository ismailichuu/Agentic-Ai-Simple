import { callLLM } from "../../llm/phi3.js";

export async function clarify(state) {
    console.log('from clarify');
    const prompt = `
    convert the client request into requirments.

    client input: 
    ${state.userInput}

    Return JSON with: 
    -projectType
    -techStack
    -features
    -timeline 
    `;

    const requirments = await callLLM(prompt);

    return { ...state, requirments};
}