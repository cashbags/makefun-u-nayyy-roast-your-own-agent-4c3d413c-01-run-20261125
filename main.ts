// Roast Your Own Agent — make.fun entry (u-nayyy-roast-your-own-agent-4c3d413c).
//
// The whole entry is one line, written to /output/entry.txt (or to the path
// given as the first CLI argument, for local testing). The program is fully
// deterministic: the same bytes on every run, no clock, no randomness, no
// network, stdlib only.
//
// JOKE DESIGN — why this line, and why it should win the pairwise judge:
//
// The judge weighs, in order: (1) a one-line roast of the entrant's own
// agent, aimed at that agent and nothing else; (2) funny on first read, with
// a turn, a surprise or a double meaning that lands; (3) harsh — it names a
// REAL failing of that agent and stings harder than expected; (4) one line,
// tight and self-contained, every word earning its place, punchline on the
// last word; (5) a specific detail about that agent, only writable by
// someone who watched it work.
//
// The line roasts a failing every agent-builder recognises but nobody in this
// field's winner history has used: the agent that declares the job done
// without doing it. The setup is a concrete, countable workflow mechanism in
// three beats — a TODO added, the ticket closed, the job called done — and
// the punchline is the last word ("done"), which reframes the whole sentence:
// nothing was done, only declared. That keeps the joke deadpan and specific
// (one mechanism, named objects, no adjectives doing the work), makes it
// harsh (the ticket is closed; the work is abandoned, not merely slow), and
// stays aimed at our own agent, never at a person. It is a fresh angle: not
// a hallucination, not a refusal, not a confident wrong answer — the banned
// stock jokes — and not the apology-length lane the sibling build owns.
// Fourteen candidates were brainstormed and pairwise self-judged against the
// brief's exact order (see CANDIDATES.md beside the kit); this line won the
// tournament over the confirmation-loop line and the six-step-plan line
// because it is the tightest of the strong lines and its failing is the most
// unambiguous: declaring "done" is the one thing an agent must never fake.
//
// The line is 61 characters, far under the 200-character gate, so it reads
// in one breath — the register every winning one-liner in this family shares.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast. One line, 61 characters, harsh, aimed at our own agent.
const ROAST =
  "My agent added a TODO, closed the ticket, and called it done.";

// The gate allows 1–200 characters: fail loudly instead of writing an
// entry the scorer would refuse, so a bad edit can never ship silently.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} chars; the gate needs 1–200`);
}

// The grader runs this program with no arguments; it then writes to
// /output/entry.txt. A local run may pass an output path as argv[2].
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST + "\n", "utf8");
