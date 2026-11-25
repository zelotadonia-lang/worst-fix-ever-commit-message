import { mkdirSync, writeFileSync } from "node:fs";

// Worst Fix Ever: Funniest Commit Message.
// One line, 47 characters: a fix that swapped one bug for a smaller, faster one.
const ENTRY = "fix: replaced the bug with a smaller, faster bug";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
