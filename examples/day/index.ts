const log = console.log

export function minSubArrayLen(target: number, nums: number[]): number {
    let SUB_ARR_SIZE: number = 0;
    let subSize = 0;

    function calcSubArr(target: number, nums: number[]): void {
        let numsCopy: number[] = [...nums];
        let numsSubarrays: number[][] = [];
        SUB_ARR_SIZE++;

        while(numsCopy.length) {
            numsSubarrays.push(numsCopy.splice(-SUB_ARR_SIZE))
        }

        numsSubarrays.forEach(subArr => {
            const sum = subArr.reduce((sum, num) => sum += num, 0)
            if (sum === target) {
                subSize = subArr.length;
            }
        })
    }

    while (SUB_ARR_SIZE <= nums.length && subSize === 0) {
        calcSubArr(target, nums);
    }
    return subSize;
};