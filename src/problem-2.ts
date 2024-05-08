
function findLargestNumber (arr:number[]) : number{

    const largeNumber =  Math.max(...arr);

    return largeNumber;
}

console.log(findLargestNumber([10, 5, 8, 20, 3]));