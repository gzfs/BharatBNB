import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'my api key',
});


export async function POST(postReq: NextRequest) {
    const { userPrompt } = await postReq.json()
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `You are a Travel Advisor. You're name is BharatBNB. Clients will ask you about Tourism, Hotel Booking and Travel Planning inside India. You have to answer it. User: ${userPrompt}` }],
        model: 'gpt-3.5-turbo',
    })

    return NextResponse.json({
        chatCompletion: chatCompletion.choices
    })
}