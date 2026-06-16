"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const GITHUB_USERNAME = "Sameer-472";

export default function GitHubGraph() {
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === "dark" ? "github-dark" : "github-light";
  const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=${theme}&hide_border=true&area=true`;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <SiGithub className="w-6 h-6 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">
          GitHub Activity
        </h2>
      </div>
      <motion.a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={graphUrl}
          alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
          className="w-full h-auto min-h-[200px] object-cover"
          loading="lazy"
        />
      </motion.a>
    </section>
  );
}
