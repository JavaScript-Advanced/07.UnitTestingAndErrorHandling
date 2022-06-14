function solve(array, start, end) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    let startIdx = Math.max(start,0);
    let endIdx = Math.min(end, array.length-1);

    return  array.slice(startIdx, endIdx++)
                 .reduce((a, x) => a + Number(x), 0);
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));