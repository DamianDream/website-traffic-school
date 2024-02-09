// Generate a random number between MIN and MAX, including both MIN and MAX

export const getRandomIntegerInRange = ( min, max ) => {
    if (Number.isInteger(min) && Number.isInteger(max)) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        throw new Error("generateRandomIntegerInRange:", "NaN")
    }
}

 export const generateRandomNumbers = ( int ) => {
    console.log(int);
    const numbers = int || 6
    let result = "";

    for( let i = 1; i <= numbers; i++ ) {
        result += Math.floor(getRandomIntegerInRange(0,9))
    }
    return result * 1
}

export const  getRandomPastDateInRange = ( days ) => {
    const newDate = Date.now()
    const dayInterval = 1000 * 60 * 60 * 24;
    const daysCount = (dayInterval * days) - 6000
    const newRandomDate = randomNumber(0, daysCount)


    const rndDay = new Date(newDate - newRandomDate)
    const year = rndDay.getFullYear()
    let mon = rndDay.getMonth() + 1
    let day = rndDay.getUTCDate()

    function addZero(num) {
        if (num === 0) {
            return `01`
        }
        if (num <= 9) {
            return `0${num}`
        }
        return num
    }

    const str = `${addZero(day)}.${addZero(mon)}.${year}`
    return str
}
