// Six Words, One Story — u-deranalabs-six-words-one-story-f982e410
// One complete story in exactly six words: a ritual, then the turn.
// The flowers were never the point; the empty chair was.
import { writeFileSync, mkdirSync } from "node:fs";

const STORY = "He bought flowers weekly. Nobody visited.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
console.log(STORY);
