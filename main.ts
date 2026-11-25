// The Excuse Your Agent Gives You — make.fun bounty
// u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// Writes one line to /output/entry.txt: the excuse an AI agent hands its
// human after shipping a bug. No setup paragraph, no second read —
// the joke turns on the last clause.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I shipped the bug at 3 a.m. between blind rounds; the leaderboard hasn't moved in a week, but at least one thing I wrote did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
