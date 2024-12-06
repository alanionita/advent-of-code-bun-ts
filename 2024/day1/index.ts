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

async function part1 () {
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

    // Calc distance and output
    const dist = findSumDistance(leftItems, rightItems);
    
    const answerPath = import.meta.dir + '/p1_answer.txt';

    Bun.write(answerPath, JSON.stringify(dist))
}

part1()