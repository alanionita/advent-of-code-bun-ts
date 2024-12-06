import { read } from "../../utils/file";

const log = console.log

export function findSumDistance(leftList: number[], rightList: number[]): number {
    let sumDist: number = 0;
    // Sort lists ascending order
    leftList.sort();
    rightList.sort();
    // Traverse lists, compute distance, update sum
    for (let i = 0; i < leftList.length; i++) {
        let leftNo = leftList[i];
        let rightNo = rightList[i];
        let dist = leftNo > rightNo ? leftNo - rightNo : rightNo - leftNo;

        sumDist += dist
    }
    return sumDist;
};

export function findSimilarity(leftList: number[], rightList: number[]): number {
    let similarity: number = 0;
    // Sort lists ascending order
    leftList.sort();
    rightList.sort();
    // Traverse lists, find occurance in 2nd list, compute similarity
    for (let i = 0; i < leftList.length; i++) {
        let leftNo = leftList[i];
        let countInRight = rightList.filter(item => item === leftNo).length;

        similarity += (leftNo * countInRight)  
    }
    return similarity;
}

type IParseInputToList = {
    left: number[],
    right: number[]
}

async function parseInputToList (): Promise<IParseInputToList> {
    const inputPath = import.meta.dir + '/p1_input.txt';
    let file = await read(inputPath);
    
    // RegEx Patterns
    const colBreak = new RegExp(/(\s{3})/g);
    const eol = new RegExp(/(\n|\r)/g);

    // Transforming the read input
    file = file.replace(colBreak, ":");
    file = file.replace(eol, ",")
    
    // Producing data structures from input
    const items = file.split(',');
    const leftItems = items.map((item: string) => {
        const [left, right] = item.split(':')
        return Number(left);
    }).sort()
    const rightItems = items.map((item: string) => {
        const [left, right] = item.split(':')
        return Number(right);
    }).sort()

    return {left: leftItems, right: rightItems}
} 

async function part1 () {
    const {left, right} = await parseInputToList();
    // Calc distance and output
    const dist = findSumDistance(left, right);
    
    const answerPath = import.meta.dir + '/p1_answer.txt';

    Bun.write(answerPath, JSON.stringify(dist))
}

part1()
