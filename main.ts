import { mkdirSync, writeFileSync } from "node:fs";

// Entry for the Worst Fix Ever: Funniest Commit Message bounty.
// Counting every letter, space, colon and comma gives 48 characters.
const ENTRY = "fix: replaced the bug with a smaller, faster bug";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
