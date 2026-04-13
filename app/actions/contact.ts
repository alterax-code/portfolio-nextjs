"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName:  z.string().min(1).max(50),
  email:     z.string().email(),
  subject:   z.string().min(1).max(100),
  message:   z.string().min(10).max(2000),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    firstName: formData.get("firstName"),
    lastName:  formData.get("lastName"),
    email:     formData.get("email"),
    subject:   formData.get("subject"),
    message:   formData.get("message"),
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: "Données invalides." };
  }

  const { firstName, lastName, email, subject, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from:    "Portfolio <onboarding@resend.dev>",
      to:      "contact@lucas-jacob.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `De : ${firstName} ${lastName} <${email}>\n\n${message}`,
      html: `
        <p><strong>De :</strong> ${firstName} ${lastName} &lt;${email}&gt;</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error" };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact action error:", err);
    return { status: "error" };
  }
}
