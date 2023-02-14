const Sentiment = require('sentiment')
const multiply = (a, b) => {
    return a * b
}

const sum = function(a,b) {
    return a + b
}

const divide = (a,b) => a/b

function analyze (sentence) {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(sentence)
    return result;
}

// console.log(analyze("I love it so much that i hate it!"))

console.log(multiply(5,5))
console.log(sum(5,5))
console.log(divide(9,3))
