import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: a year of practice on three chords, and
// a father's shaking hands finally still, clapping on the beat.
const line =
  "She'd practised the same three chords for a year; tonight her father's hands finally stopped shaking and clapped on the beat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
