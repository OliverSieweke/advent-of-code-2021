import { depths } from "./parse.mjs";

const slidingWindowDepthReducer =
  (window) => (numberOfDepthIncreases, depth, index, depths) =>
    numberOfDepthIncreases + (depth > depths[index - window]);

// Part One --------------------------------------------------------------------
console.log(`Part One:\t${depths.reduce(slidingWindowDepthReducer(1), 0)}`);

// Part Two --------------------------------------------------------------------
console.log(`Part Two:\t${depths.reduce(slidingWindowDepthReducer(3), 0)}`);
