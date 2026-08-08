import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function runHelloAI() {
  try {
    console.log("Sending request to Gemini model...");
    let botName = "Monojit_Nandy"; 
    // prompt = input("Enter your name:");
    if(botName === "Monojit_Nandy")
    console.log(`My Bot ${botName} is running perfectly.....`);
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
    // const prompt = "Write a 1-sentence welcome message for a new AI Engineer.";
//     const prompt = `ROLE: {{{I am a Senior Node.js Architect}}.
//     TASK: {{I want to Build a JWT-based authentication middleware}}.
//     CONTEXT: Technology stack includes {{Context, Express.js, MongoDB, and
//     the jsonwebtoken library}}.
//     CONSTRAINTS: 1. {{Constraint 1, Use ES Modules syntax}}. 2. {{Constraint
//     2,Implement robust error handling with custom classes}}.
//     OUTPUT: {{Output Format, Return only the documented JavaScript code
//    lock}}.`;
const prompt = `System Persona: You are a high-performance Technical Outreach Specialist.
Recipient Role: {{Recipient Role, e.g., Engineering Manager at a FinTech
Unicorn}}.
Company Context: {{Context, e.g., Recent Series B funding or migration to
microservices}}.
Personalized Hook: {{Hook, e.g., Mention a recent open-source contribution or
technical blog post}}.
Objective: {{Call to Action, e.g., Requesting a 10-minute technical sync
regarding team scaling}}.
Constraint: Keep the tone professional, concise (under 100 words), and
empathetic.
`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("\nAI Response:");
    console.log(text);
  } catch (error) {
    console.error("Critical Error during API execution:", error.message);
  }
}
runHelloAI();
