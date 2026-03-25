import { Router, type IRouter } from "express";
import { db, leadsTable } from "@workspace/db";
import { SubmitLeadBody } from "@workspace/api-zod";
import nodemailer from "nodemailer";

const router: IRouter = Router();

async function sendLeadNotification(lead: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  city: string;
  property_type: string;
  message?: string;
}) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP not configured — skipping email notification. Set SMTP_HOST, SMTP_USER, SMTP_PASS to enable.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const body = `
New parking revenue analysis request from TexasParkingRevenue.com

Name: ${lead.name}
Email: ${lead.email}
Company: ${lead.company ?? "—"}
Phone: ${lead.phone ?? "—"}
City: ${lead.city}
Property Type: ${lead.property_type}
Message: ${lead.message ?? "—"}
  `.trim();

  await transporter.sendMail({
    from: smtpUser,
    to: "info@perfectparking.com",
    subject: `New Revenue Analysis Request — ${lead.name} (${lead.city}, ${lead.property_type})`,
    text: body,
  });
}

router.post("/leads", async (req, res) => {
  const parse = SubmitLeadBody.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json({ error: "Validation error", details: parse.error.flatten() });
    return;
  }

  try {
    const [lead] = await db
      .insert(leadsTable)
      .values(parse.data)
      .returning({ id: leadsTable.id });

    // Fire-and-forget email — don't let email failure block the response
    sendLeadNotification(parse.data as any).catch((err) => {
      console.error("Lead email notification failed:", err);
    });

    res.status(201).json({
      success: true,
      message: "Thank you! We'll be in touch within one business day to schedule your parking revenue analysis.",
      id: lead.id,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to insert lead");
    res.status(500).json({ error: "Failed to submit lead. Please try again." });
  }
});

export default router;
