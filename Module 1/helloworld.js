const Sentiment = require('sentiment')

function sum(a,b) {
    const added = a + b
    console.log(added)
}

sum(5,9)




function analyze (sentence) {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(sentence)

    return result;
}

console.log(analyze("I love it so much that i hate it!"))