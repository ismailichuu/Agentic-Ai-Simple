import { callLLM } from "../../llm/phi3.js";

export async function suggestBudget(state) {
    console.log('from suggest budget');
    const prompt = `
    Suggest a realestic budget range for this project:
    ${state.requirments}

    Explain Briefly.
    `;

    const budget = await callLLM(prompt);

    return {...state, budget}
}