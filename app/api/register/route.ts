// app/api/registration/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/lib/prismaClient'; // Adjust path if necessary

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, preferredCity, preferredBudget } = await req.json();

    // Save to MongoDB using Prisma
    const registration = await prisma.registration.create({
      data: {
        name,
        email,
        phone,
        preferredCity,
        preferredBudget,
      },
    });

    const response = NextResponse.json({ message: "Registration successful", registration }, { status: 201 });
    response.headers.set('Cache-Control', 'no-store'); // Prevent caching
    return response;
  } catch (error) {
    return NextResponse.json({ message: "Failed to register", error: error instanceof Error ? error.message : "An unknown error occurred" }, { status: 500 });
  }
}
