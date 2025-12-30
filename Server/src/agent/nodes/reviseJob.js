import { callLLM } from "../../llm/phi3.js";

export async function reviseJob(state) {
    console.log('from revise job')
    const prompt = `
    Revise this post based on feedback

    Job Post: 
    ${state.jobPost}

    feedback:
    ${state.feedback}
    `;

    const jobPost = await callLLM(prompt);

    return {...state, jobPost};
}

