import { callLLM } from "../../llm/phi3.js";

export async function createJob(state) {
    console.log('from create job');
    const prompt = `
    Create a professional Job Post using:
    ${state.requirments}

    Include: 
    -Title
    -Description
    -Responsibilities
    -Deliverable
    `;

    const jobPost = await callLLM(prompt);

    return {...state, jobPost};
}