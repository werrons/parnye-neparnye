function checkBracketsBalance(text) {
    let openingBrackets = 0;
    let closingBrackets = 0;

    for (let char of text) {
        if (char === '{') {
            openingBrackets++;
        } else if (char === '}') {
            closingBrackets++;
        }
    }

    if (openingBrackets === closingBrackets) {
        return '{}';
    } else {
        return openingBrackets > closingBrackets ? '{' : '}';
    }
}


let exampleText = '{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{{';
let result = checkBracketsBalance(exampleText);
console.log(result);
