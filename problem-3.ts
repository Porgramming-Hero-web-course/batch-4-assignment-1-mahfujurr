const countWordOccurrences = (sentence: string, word: string): number => {

    const sentenceLowerCase = sentence.toLowerCase();
    const wordLowerCase = word.toLowerCase();
    const words = sentenceLowerCase.split(" ");
    return words.filter(w => w === wordLowerCase).length;
}

console.log(countWordOccurrences("I love typescript", "typescript")); 
