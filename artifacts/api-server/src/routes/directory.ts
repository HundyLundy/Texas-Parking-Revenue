import { Router, type IRouter } from "express";
import { db, propertiesTable, vendorsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { ListPropertiesQueryParams, ListVendorsQueryParams } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/directory/properties", async (req, res) => {
  const parse = ListPropertiesQueryParams.safeParse(req.query);
  if (!parse.success) {
    res.status(400).json({ error: "Invalid query params" });
    return;
  }

  try {
    let query = db.select().from(propertiesTable);
    const conditions = [];

    if (parse.data.city) {
      conditions.push(eq(propertiesTable.city, parse.data.city));
    }
    if (parse.data.property_type) {
      conditions.push(eq(propertiesTable.property_type, parse.data.property_type));
    }
    if (parse.data.featured !== undefined) {
      conditions.push(eq(propertiesTable.featured, parse.data.featured));
    }

    const results = await query.where(conditions.length > 0 ? conditions[0] : undefined);
    res.json(results);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch properties");
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

router.get("/directory/vendors", async (req, res) => {
  const parse = ListVendorsQueryParams.safeParse(req.query);
  if (!parse.success) {
    res.status(400).json({ error: "Invalid query params" });
    return;
  }

  try {
    let query = db.select().from(vendorsTable);
    const conditions = [];

    if (parse.data.category) {
      conditions.push(eq(vendorsTable.category, parse.data.category));
    }
    if (parse.data.featured !== undefined) {
      conditions.push(eq(vendorsTable.featured, parse.data.featured));
    }

    const results = await query.where(conditions.length > 0 ? conditions[0] : undefined);
    res.json(results);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch vendors");
    res.status(500).json({ error: "Failed to fetch vendors" });
  }
});

export default router;
