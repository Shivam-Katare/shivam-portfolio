type TagTone = {
  bg: string;
  border: string;
  text: string;
};

const FALLBACK: TagTone = {
  bg: "#f4f4f1",
  border: "var(--line)",
  text: "var(--ink-muted)",
};

const TAG_TONES: Record<string, TagTone> = {
  TypeScript: { bg: "#e7f0fb", border: "#b5ccec", text: "#215ea8" },
  JavaScript: { bg: "#fbf3d0", border: "#e6d37a", text: "#7a5b00" },
  "Next.js": { bg: "#ececec", border: "#cfcfcf", text: "#171717" },
  React: { bg: "#e6f8fc", border: "#9edcea", text: "#0e7490" },
  Vue: { bg: "#e7f7ef", border: "#9dd9bb", text: "#1f7a4d" },
  Python: { bg: "#eaf2fb", border: "#b7cbe4", text: "#2b5a8a" },
  "Tailwind CSS": { bg: "#e6f7fb", border: "#9ed7e6", text: "#0f766e" },
  "shadcn/ui": { bg: "#f1f1f1", border: "#d4d4d4", text: "#3f3f46" },
  Redux: { bg: "#f3eafb", border: "#cbb3e6", text: "#6b21a8" },
  Zustand: { bg: "#f8efe4", border: "#e0c4a0", text: "#9a5b12" },
  "Ant Design": { bg: "#e8f1ff", border: "#b3ccf5", text: "#1d4ed8" },
  "Framer Motion": { bg: "#fbeaf4", border: "#e7b0cc", text: "#9d174d" },
  "React Query": { bg: "#fdecee", border: "#f0b4bb", text: "#b42318" },
  WebSockets: { bg: "#eaf7f4", border: "#a9d9ce", text: "#0f766e" },
  Kestra: { bg: "#e8eefc", border: "#b3c3f0", text: "#3730a3" },
  NextAuth: { bg: "#ece9fb", border: "#c4b7ee", text: "#5b21b6" },
  Docker: { bg: "#e6f3fb", border: "#a8d0ea", text: "#0369a1" },
  Resend: { bg: "#ececec", border: "#cfcfcf", text: "#171717" },
  Agno: { bg: "#fff0e4", border: "#f0c09a", text: "#c2410c" },
  Firecrawl: { bg: "#ffeee6", border: "#f0b89a", text: "#c2410c" },
  Streamlit: { bg: "#fdecee", border: "#f0b0b8", text: "#be123c" },
  "CI/CD": { bg: "#eef2f7", border: "#c5d0de", text: "#334155" },
  "Vercel Rollback API": { bg: "#ececec", border: "#cfcfcf", text: "#171717" },
  YAML: { bg: "#fdeeee", border: "#ecc0c0", text: "#9f1239" },
  "Technical Writing": { bg: "#f4efe6", border: "#ddd0b8", text: "#6b5344" },
  "Community Building": { bg: "#eaf6ee", border: "#b5dcc2", text: "#166534" },
  "Public Speaking": { bg: "#fff0e4", border: "#f0c09a", text: "#c2410c" },
  Interviews: { bg: "#eaf2fb", border: "#b7cbe4", text: "#1d4ed8" },
  "Q&A": { bg: "#f8f1dc", border: "#e4d29a", text: "#854d0e" },
};

export function stackTagTone(tag: string): TagTone {
  return TAG_TONES[tag] ?? FALLBACK;
}
