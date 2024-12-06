import { expect, test, describe } from "bun:test";
import { minSubArrayLen } from "./index"

const localDirPath: string[] = import.meta.dir.split('/');
const problemName: string = localDirPath[localDirPath.length -1];

type Input = [number, number[], number];

const inputs: Input[] = [
  [7,[2,3,1,2,4,3], 2],
  [4, [1,4,4], 1],
  [11, [1,1,1,1,1,1,1,1], 0]
];

function createTestBlocks(data: Array<T>): void {
  test.each(data)(`Target {%p}, nums {%p} to be: %p`, (target, nums, expected) => {
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(expected);
  });
}

describe(`Problem ~ ${problemName}`, () => {
  createTestBlocks(inputs)
});
