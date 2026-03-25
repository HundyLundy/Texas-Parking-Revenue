import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const propertiesTable = pgTable("properties", {
  id: serial("id").primaryKey(),
  property_name: text("property_name").notNull(),
  city: text("city").notNull(),
  metro: text("metro"),
  state: text("state").default("TX"),
  zip: text("zip"),
  property_type: text("property_type").notNull(),
  sub_type: text("sub_type"),
  ownership_type: text("ownership_type"),
  parking_type: text("parking_type"),
  management_model: text("management_model"),
  payment_model: text("payment_model"),
  estimated_revenue_potential: text("estimated_revenue_potential"),
  demand_drivers: text("demand_drivers"),
  friction_points: text("friction_points"),
  notes: text("notes"),
  featured: boolean("featured").default(false),
  slug: text("slug").notNull().unique(),
});

export const insertPropertySchema = createInsertSchema(propertiesTable).omit({ id: true });
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof propertiesTable.$inferSelect;
