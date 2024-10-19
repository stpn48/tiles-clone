export function spreadIntoParts(total: number, parts: number, allowed: number[]): number[] {
  const result: number[] = [];
  let sum = 0;

  // Randomly pick values for the first (parts - 1) numbers
  for (let i = 0; i < parts - 1; i++) {
    const num = allowed[Math.floor(Math.random() * allowed.length)];
    result.push(num);
    sum += num;
  }

  // Calculate the last number to make sure the total equals 30
  const remaining = total - sum;

  // If the remaining number is valid (either 2, 4, or 6), push it; otherwise, restart
  if (allowed.includes(remaining)) {
    result.push(remaining);
  } else {
    // Retry if the last number is not valid
    return spreadIntoParts(total, parts, allowed);
  }

  return result;
}
