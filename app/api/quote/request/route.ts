import Quote from "@/lib/models/Quote";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  const { name, email, phone, details } = await request.json();
  if (!name || !email || !phone || !details) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const newQuote = await Quote.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      details: details.trim(),
    });
    if (!newQuote)
      return NextResponse.json(
        { error: "Failed to create quote" },
        { status: 500 }
      );
    return NextResponse.json({
      status: "success",
      message: "Your quote request has been created",
    });
  } catch (error) {
    console.error("Create quote error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
