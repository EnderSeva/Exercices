let ANS = document.querySelector(".ANS");
let INP = document.querySelector(".INP");

function wordRequesting() {
    let word = INP.value;
    console.log(word);
    ANS.textContent = "";
    word = word.toLowerCase();
    return reversing(word);
}

function reversing(lowerWord) {
    let word2 = "";
    for (let i = (lowerWord.length - 1); i >= 0; i--) {
        word2 += lowerWord[i];
    }
    return checkPalindrome(word2, lowerWord);
}

function checkPalindrome(reversedWord, word) {
    if (reversedWord === word) {
        console.log(reversedWord === word);
        word = word[0].toUpperCase() + word.slice(1);
        ANS.textContent = word + " - Палиндром";
    } else {
        console.log(reversedWord === word);
        word = word[0].toUpperCase() + word.slice(1);
        ANS.textContent = word + " - Не палиндром";
    }
}
