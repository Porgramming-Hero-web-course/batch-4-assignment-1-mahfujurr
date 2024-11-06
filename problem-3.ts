const countWordOccurrences = (sentence: string, word: string): number => {

    const sentenceLowerCase = sentence.toLowerCase();
    const wordLowerCase = word.toLowerCase();

    const words = sentenceLowerCase.replace(/[.,!?]/g, "").split(" ");

    return words.filter(w => w === wordLowerCase).length;
}

// console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
