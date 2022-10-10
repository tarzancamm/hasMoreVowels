// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.


const hasMoreVowels = (word) => {
    let vowelCount = 0;
    let consCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of word) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consCount++;
        }
    }
    return vowelCount > consCount
}

let answer = hasMoreVowels('goood')
console.log(answer)
