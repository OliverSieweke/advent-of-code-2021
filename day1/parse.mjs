import { readFile } from "fs/promises";

const { INPUT_FILE_NAME } = JSON.parse(
  await readFile(new URL("../settings.json", import.meta.url))
);

// Input -----------------------------------------------------------------------
const input = await readFile(new URL(INPUT_FILE_NAME, import.meta.url), "utf8");

// Parsing ---------------------------------------------------------------------
const depths = input.split("\n").map((depth) => Number.parseInt(depth));

// Export ----------------------------------------------------------------------
export { depths };
