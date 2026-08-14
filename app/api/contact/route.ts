import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  workEmail?: string;
  phone?: string;
  company?: string;
  employeeCount?: string;
  interest?: string;
  currentProcess?: string;
  budget?: string;
  website?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (body.website) {
      return NextResponse.json({ message: "Request received" }, { status: 200 });
    }

    if (
      !body.name?.trim() ||
      !body.company?.trim() ||
      !body.workEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.workEmail) ||
      !body.interest ||
      !body.currentProcess ||
      body.currentProcess.trim().length < 20
    ) {
      return NextResponse.json({ error: "Invalid assessment request" }, { status: 400 });
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Email delivery is not configured.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name: body.name.trim(),
          email: body.workEmail.trim(),
          work_email: body.workEmail.trim(),
          phone: body.phone?.trim() || "Not provided",
          company: body.company.trim(),
          employee_count: body.employeeCount || "Not provided",
          interest: body.interest,
          message: body.currentProcess.trim(),
          current_process: body.currentProcess.trim(),
          budget: body.budget || "Not decided",
        },
      }),
    });

    if (!response.ok) {
      console.error("Email delivery failed with status", response.status);
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ message: "Assessment request sent" }, { status: 200 });
  } catch (error) {
    console.error("Contact request failed", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
