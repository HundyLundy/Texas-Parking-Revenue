import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const vendorsTable = pgTable("vendors", {
  id: serial("id").primaryKey(),
  company_name: text("company_name").notNull(),
  category: text("category").notNull(),
  service_area: text("service_area"),
  short_description: text("short_description"),
  website: text("website"),
  featured: boolean("featured").default(false),
  slug: text("slug").notNull().unique(),
});

export const insertVendorSchema = createInsertSchema(vendorsTable).omit({ id: true });
export type InsertVendor = z.infer<typeof insertVendorSchema>;
export type Vendor = typeof vendorsTable.$inferSelect;
