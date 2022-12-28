import dayjs from 'dayjs'

export const getRemainingTimeUntilMsTimestamp = (timestampMS) => {
    const timestampDayjs = dayjs(timestampMS)
    const nowDayjs = dayjs()
    if(timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: "0",
            minutes: "0",
            hours: "0",
            days: "0"
        }
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemaininghours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    }
}

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
    return padWithZeros(seconds, 2)
}

const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
    return padWithZeros(minutes, 2)
}

const getRemaininghours = (nowDayjs, timestampDayjs) => {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
    return padWithZeros(hours, 2)
}

const getRemainingDays = (nowDayjs, timestampDayjs) => {
    const days = timestampDayjs.diff(nowDayjs, 'days')
    return days.toString()
}

const padWithZeros = (number, minLength) => {
    const numberString = number.toString()
    if(numberString.minLength >= minLength) return numberString
    return '0'.repeat(minLength - numberString.length) + numberString
}