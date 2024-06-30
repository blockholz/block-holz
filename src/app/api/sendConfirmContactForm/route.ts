import ConfirmContactForm from "@/emails/ConfirmContactForm";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username, email, phone, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "block-holz.de <" + process.env.EMAIL_SEND_ADDRESS + ">",
      to: process.env.EMAIL_TO_ADDRESS || "",
      subject: "[FORMULARZ KONTAKTOWY],",
      react: ConfirmContactForm({ username, email, phone, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
