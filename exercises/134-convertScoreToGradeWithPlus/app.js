function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here

    let letterScore = ''
    let lastDigit = score % 10;

    if (score > 100 || score < 0) {
        return 'INVALID SCORE'
    }

    switch (true) {
        case (score >= 90):
            letterScore = 'A';
            break;
        case (score >= 80):
            letterScore = 'B';
            break;
        case (score >= 70):
            letterScore = 'C';
            break;
        case (score >= 60):
            letterScore = 'D';
            break;
        default:
            letterScore = 'F';
            break;
    }


    if (letterScore !== 'F') {
        if (lastDigit >= 0 && lastDigit <= 2) {
            letterScore += '-';
        } else if (lastDigit === 8 || lastDigit === 9) {
            letterScore += '+';
        }
    }

    return letterScore;
}



let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'