
const removeDuplicates = (array: number[]): number[] => {
    const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
    return uniqueArray;
};


console.log(removeDuplicates([1,1,2,3,9,2,10])); 