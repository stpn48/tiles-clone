import patterns from "@/assets/uniquePatterns.json";
import { Pattern } from "@/types/types";

const patternCounts = [2, 2, 2, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];

export function generateGrid() {
  const shuffledPatternCounts = shuffleArray([...patternCounts]);

  const availablePatterns: Pattern[] = [];

  patterns.forEach((pattern, patternIndex) => {
    for (let i = 0; i < shuffledPatternCounts[patternIndex]; i++) {
      availablePatterns.push(pattern);
    }
  });

  const grid: Pattern[][] = [];

  for (let i = 0; i < 30; i++) {
    const cell: Pattern[] = [];

    for (let j = 0; j < 3; j++) {
      const selectedPattern = findPatternForCell(cell, availablePatterns);
      if (selectedPattern) {
        cell.push(selectedPattern); // Add the selected pattern to the cell
        // Remove the selected pattern from availablePatterns
        const index = availablePatterns.indexOf(selectedPattern);
        if (index !== -1) {
          availablePatterns.splice(index, 1);
        }
      }
    }

    grid.push(cell);
  }

  return grid;
}

function findPatternForCell(cell: Pattern[], availablePatterns: Pattern[]) {
  let attempts = 0;

  while (attempts < availablePatterns.length) {
    const randomIndex = Math.floor(Math.random() * availablePatterns.length);
    const selectedPattern = availablePatterns[randomIndex];

    // Ensure the selected pattern is unique within the cell
    if (!cell.includes(selectedPattern)) {
      return selectedPattern; // Return the unique pattern
    }

    attempts++;
  }

  return null; // Fallback if no unique pattern is found
}

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// function validateGrid(grid: Pattern[][], shuffledPatternCounts: number[]) {
//   // 1. Check the grid size
//   if (grid.length !== 30 || grid.some((row) => row.length !== 3)) {
//     throw new Error("Grid does not have the expected size.");
//   }

//   // 2. Check for unique patterns in each cell
//   grid.forEach((cell) => {
//     if (new Set(cell).size !== cell.length) {
//       throw new Error("Duplicate patterns found in a cell.");
//     }
//   });

//   // 3. Count occurrences of each pattern
//   const patternCountMap = new Map<string, number>();

//   grid.forEach((row) => {
//     row.forEach((pattern) => {
//       patternCountMap.set(pattern.id, (patternCountMap.get(pattern.id) || 0) + 1);
//     });
//   });

//   // 4. Validate the counts against the original pattern counts
//   patterns.forEach((pattern, index) => {
//     const expectedCount = shuffledPatternCounts[index];
//     const actualCount = patternCountMap.get(pattern.id) || 0;

//     if (actualCount !== expectedCount) {
//       throw new Error(
//         `Pattern ${pattern.id} does not have the expected count. Expected: ${expectedCount}, Actual: ${actualCount}`,
//       );
//     }
//   });
// }
