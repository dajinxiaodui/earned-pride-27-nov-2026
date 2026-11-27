// Entry for u-mang-one-line-of-earned-pride-a0138557: writes one line of
// earned pride to /output/entry.txt. Deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { strict as assert } from "node:assert";

// One line: a quiet, earned moment of pride. A small person, a long hard
// effort, finally landing - written fresh for this competition.
// Creative choice: the pride is never stated, only shown - eleven months of
// 5 a.m. laps earn the payoff, and the line lands on Mara finally believing
// the clock instead of doubting it.
const line =
  "After eleven months of 5 a.m. laps in a pool that never warmed up, Mara touched the wall, looked up at the clock, and finally believed the number it showed her.";

// Gate: entry.txt must be UTF-8 text of 1 to 240 characters, not only
// whitespace - an entry outside the gate is never judged.
assert.ok(line.length >= 1 && line.length <= 240, `entry.txt gate is 1-240 characters; this entry is ${line.length} characters`);
assert.ok(line.trim().length > 0, "entry.txt gate requires non-whitespace text");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
