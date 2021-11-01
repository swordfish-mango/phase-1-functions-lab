function distanceFromHqInBlocks(someValue) {
    return someValue > 42 ? someValue - 42 : 42 - someValue;
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(startBlock,endBlock) {
    return 264*(startBlock < endBlock ? endBlock - startBlock : startBlock - endBlock);
}

function calculatesFarePrice(startBlock,endBlock) {
    const distance = distanceTravelledInFeet(startBlock,endBlock);
    if (distance <= 400) {
        return 0;
    }
    if (distance < 2000) {
        return (distance - 400) * .02;
    }
    if (distance < 2500) {
        return 25;
    }
    return "cannot travel that far";
}