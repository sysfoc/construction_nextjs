import Contact from "@/lib/models/Contact";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }
  const newContact = await Contact.create({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  });
  if (!newContact)
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  return NextResponse.json({
    success: true,
    message: "Your message has been sent, you will be contacted soon",
  });
}
