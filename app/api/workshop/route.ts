import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      institution_name,
      institution_type,
      contact_person,
      designation,
      email,
      phone,
      city,
      state,
      students,
      preferred_date,
      message,
    } = body;

    await resend.emails.send({
      from: "LearningNow <noreply@mail.learningnow.in>",
      to: ["learningnow1411441@gmail.com"],

      subject: `📩 New Workshop Request - ${institution_name}`,

      html: `
        <h2>New Workshop Request</h2>

        <hr/>

        <p><strong>Institution:</strong> ${institution_name}</p>

        <p><strong>Institution Type:</strong> ${institution_type}</p>

        <p><strong>Contact Person:</strong> ${contact_person}</p>

        <p><strong>Designation:</strong> ${designation}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>City:</strong> ${city}</p>

        <p><strong>State:</strong> ${state}</p>

        <p><strong>Expected Students:</strong> ${students}</p>

        <p><strong>Preferred Date:</strong> ${preferred_date}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }
}