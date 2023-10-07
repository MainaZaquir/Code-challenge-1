function generateStudentGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter student marks (0-100): ', (marks) => {
    if (marks >= 0 && marks <= 100) {
        const grade = generateStudentGrade(parseInt(marks));
        console.log(`Grade: ${grade}`);
    } else {
        console.log('Invalid input. Marks should be between 0 and 100.');
    }
    readline.close();
});
