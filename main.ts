import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: a quiet, earned moment of pride. A small person, a long hard
// effort, finally landing - written fresh for this competition.
const line =
  "After eleven months of 5 a.m. laps in a pool that never warmed up, Mara touched the wall, looked up at the clock, and finally believed the number it showed her.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
