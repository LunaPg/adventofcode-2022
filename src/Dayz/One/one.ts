import * as fs from 'fs';
import * as readline from 'readline';
import path from 'path';

// A Generator function that returns line of file
export async function extractElfData(): Promise<Array<Array<number>>> {
  const stream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    encoding: 'utf8',
  });
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  return new Promise((resolve, reject) => {
    stream.once('error', (_) => reject(new Error(`Error in stream`)));
    const data: number[][] = [];
    let elf: number[] = [];
    rl.on('line', (line) => {
      if (line === ``) {
        data.push(elf);
        elf = [];
      } else {
        elf.push(parseInt(line, 10));
      }
    });
    rl.on('close', () => resolve(data));
  });
}

export function computeTotalCalory(elfData: number[][]) {
  return elfData.map((elfCalory) => elfCalory.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
}

export async function run() {
  const data = await extractElfData();
  const total = computeTotalCalory(data);
  return Math.max(...total);
  // console.log(data);
}
