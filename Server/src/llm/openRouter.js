import axios from "axios";
import {config} from 'dotenv';

config();

const OPENROUTER_API_KEY = process.env.API_KEY;

export async function callLLM (prompt) {
    const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions", 
        {
            model: "meta-llama/llama-3-8b-instruct",
            messages: [
                {role: "system", content: 'You are a helpful Ai assistant'},
                {role: 'user', content: prompt}
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    )

    return response.data.choices[0].messages.content;
}