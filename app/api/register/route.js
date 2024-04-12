import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    NextResponse.json(
      { message: "User Registered Successfully" },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json({ message: error.message }, { status: 400 });
  }
}
