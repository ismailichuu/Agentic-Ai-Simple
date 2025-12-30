import axios from "axios";

export async function callLLM(prompt) {
    console.log(prompt)
    const res = await axios.post(
        'http://localhost:11434/api/generate',
        {
            model: 'mistral',
            prompt,
            stream: false
        }

    )

    return res.data.response;
}