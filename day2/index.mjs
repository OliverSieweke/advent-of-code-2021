import { commands } from "./parse.mjs";

const { x, y, aim } = commands.reduce(
  ({ x, y, aim }, { forward, down, up }) => ({
    x: x + (forward ?? 0),
    y: y + (forward ?? 0) * aim,
    aim: aim + (down ?? 0) - (up ?? 0),
  }),
  { x: 0, y: 0, aim: 0 }
);

// Part One --------------------------------------------------------------------
console.log(`Part One:\t${x * aim}`);

// Part Two --------------------------------------------------------------------
console.log(`Part Two:\t${x * y}`);
