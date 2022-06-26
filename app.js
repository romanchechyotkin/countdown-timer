const birthday = 'August 9, 2022' 
const daysDiv = document.getElementById('day')
const hoursDiv = document.getElementById('hour')
const minDiv = document.getElementById('minut')
const secDiv = document.getElementById('second')

const countdown = () => {
    const currentDate = new Date()
    const birthdayDate = new Date(birthday)

    const totalSeconds = (birthdayDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)

    const hours = Math.floor((totalSeconds / 3600) % 24)
    const minuts = Math.floor(((totalSeconds / 60) % 60))
    const seconds = Math.floor(totalSeconds % 60)

    render(days, hours, minuts, seconds)
}


const render = (days, hours, minuts, seconds) => {
    daysDiv.textContent = days
    hoursDiv.textContent = formatTime(hours)
    minDiv.textContent = formatTime(minuts)
    secDiv.textContent = formatTime(seconds)
}


const formatTime = (time) => {
    if(time < 10){
        return `0${time}`
    }else return time
}


countdown()
setInterval(countdown, 1000)