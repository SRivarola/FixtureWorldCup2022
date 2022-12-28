import { useState, useEffect } from 'react'
import { getRemainingTimeUntilMsTimestamp } from '../constants/timeFunctions'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

const CountDownTimer = ({ countdownTimestampMs }) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
console.log()
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs]);

  return (
    <>
        {
            (remainingTime.days !== '0') &&
            (remainingTime.hours !== '0') &&
            (remainingTime.minutes !== '0') &&
            (remainingTime.seconds !== '0') &&    
            <div className='z-20 w-full flex justify-center items-center xs:absolute sm:top-[101px] xs:justify-end'>
                <div className='w-[70%] font-poppins font-semibold flex justify-center items-center gap-2 bg-white p-2 pt-3 rounded-[5px] xs:w-[30%] xs:h-[80px] xs:rounded-r-none xs:rounded-tl-none xs:rounded-bl-[20px]'>
                    <span>{remainingTime.days}d</span>
                    <span>{remainingTime.hours}hs</span>
                    <span>{remainingTime.minutes}m</span>
                    <span>{remainingTime.seconds}s</span>
                </div>
            </div>
        }
    </>
  )
}

export default CountDownTimer