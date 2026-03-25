import { Router, type IRouter } from "express";
import { db, leadsTable } from "@workspace/db";
import { SubmitLeadBody } from "@workspace/api-zod";

const router: IRouter = Router();

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
