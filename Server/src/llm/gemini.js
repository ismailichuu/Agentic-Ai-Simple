import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";

config();
const API_KEY = process.env.API_KEY;

console.log(API_KEY)

const genAI =  new GoogleGenerativeAI('AIzaSyC-Z6eYWDZeV4UYWQ8Ac0BDZAhTLkNk5NQ');

export async function callLLM(prompt) {
    const model = genAI.getGenerativeModel({
        model: 'gemini-pro'
    })

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response;
}