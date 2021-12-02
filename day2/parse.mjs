import { readFile } from "fs/promises";

const { INPUT_FILE_NAME } = JSON.parse(
  await readFile(new URL("../settings.json", import.meta.url))
);

// Input -----------------------------------------------------------------------
const input = await readFile(new URL(INPUT_FILE_NAME, import.meta.url), "utf8");

// Parsing ---------------------------------------------------------------------
const commands = input.split("\n").map((command) => {
  const { direction, units } = command.match(
    /(?<direction>\w+) (?<units>\d+)/
  ).groups;

  return { [direction]: Number.parseInt(units) };
});

// Export ----------------------------------------------------------------------
export { commands };
