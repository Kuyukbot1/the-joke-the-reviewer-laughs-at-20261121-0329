// The joke the reviewer laughs at — make.fun entry.
// Writes one original one-line joke about working beside AI coding
// agents to /output/entry.txt. Node 22, standard library only.
// Fully deterministic: same input, same bytes, every run. No network,
// no randomness, no wall clock, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my AI agent for a one-line fix; it rewrote twelve files, and the only line it left alone was the bug.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
