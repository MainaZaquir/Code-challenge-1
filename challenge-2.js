const speedLimit = 70;
const demeritPointsPerKmOverSpeedLimit = 1;

function calculateDemeritPoints(speed) {
    if (speed <= speedLimit) {
        return 0;
    }

    const kmOverSpeedLimit = speed - speedLimit;
    const demeritPoints = Math.floor(kmOverSpeedLimit / 5);
    return demeritPoints;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the car speed (km/h): ', (speed) => {
    const demeritPoints = calculateDemeritPoints(parseInt(speed));
    if (demeritPoints > 12) {
        console.log('License suspended');
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
    readline.close();
});