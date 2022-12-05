import { extractElfData, computeTotalCalory } from './one';

export async function runTwo() {
  const data = await extractElfData();
  const total = computeTotalCalory(data);
  const [first, second, third] = total.sort(function (a, b) {
    return b - a;
  });
  return first + second + third;
}
