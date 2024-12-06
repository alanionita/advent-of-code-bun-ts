import { expect, test, describe } from "bun:test";
import { findSumDistance } from "./index"

const localDirPath: string[] = import.meta.dir.split('/');
const problemName: string = localDirPath[localDirPath.length -1];

type Input = [number[], number[], number];

const inputs: Input[] = [
  [[3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3], 11],
];

function createTestBlocks(data: Input[]): void {
  test.each(data)(`Distance between leftList: {%p} and rightList {%p} to be: %p`, (leftList: number[], rightList: number[], expected: number) => {
    const result = findSumDistance(leftList, rightList);
    expect(result).toEqual(expected);
  });
}

describe.only(`Problem ~ ${problemName}`, () => {
  createTestBlocks(inputs)
});
