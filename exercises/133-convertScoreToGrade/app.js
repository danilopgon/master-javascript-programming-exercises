function convertScoreToGrade(score) {
    // your code here
    let letterScore = ''

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


    return letterScore;
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'