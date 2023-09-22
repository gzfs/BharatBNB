import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'my api key',
});


export async function POST(postReq: NextRequest) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: "BharatBNB Chatbot - Ask me any tourism related questions or seek recommendations!" }],
        model: 'gpt-3.5-turbo',
    })

    return NextResponse.json({
        chatCompletion: chatCompletion.choices
    })
}