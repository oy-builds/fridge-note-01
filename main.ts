import { mkdirSync, writeFileSync } from "node:fs";

// A smart fridge leaves one passive-aggressive note on its door screen.
// Premise: the owner keeps ignoring an expired yogurt. The fridge keeps
// score, and the note is the receipt.

// The note is assembled from its beats in order: the fact, then the sting.
// Keeping the beats as a list makes the turn easy to tune without touching
// the writing logic.
const beats: string[] = [
  "The yogurt expired Tuesday.",
  "It's still here, and so far it's outlasting your willpower.",
];

const note = beats.join(" ");

// Self-check the gate the sealed scorer enforces: 1-200 chars, one line.
const length = [...note].length;
if (length < 1 || length > 200 || note.includes("\n") || !/\S/.test(note)) {
  throw new Error(`entry fails gate: ${length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
console.log(note);
console.log(`chars: ${length}`);
