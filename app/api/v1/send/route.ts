import { EmailTemplate } from "app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { v4 as uuid } from "uuid";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'katare27451@gmail.com',
      subject: subject || 'New Contact Form Submission',
      reply_to: email,
      headers: {
        'X-Entity-Ref-ID': uuid(),
      },
      react: EmailTemplate({ firstName: name, message }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data, message: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
