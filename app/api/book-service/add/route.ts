import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/lib/models/BookService";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, email, phone, service, date, details } = body;

    if (!name || !email || !phone || !service || !date || !details) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newBooking = await Booking.create({
      name,
      email,
      phone,
      service,
      date,
      details,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        data: newBooking,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
