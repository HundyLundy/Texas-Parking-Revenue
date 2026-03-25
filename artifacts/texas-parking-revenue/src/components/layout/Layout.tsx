import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { SiteSchema } from "@/components/seo/SiteSchema";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SiteSchema />
      <div
        className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/pattern-bg.png')`,
          backgroundSize: "400px",
        }}
      />
      <NavBar />
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
