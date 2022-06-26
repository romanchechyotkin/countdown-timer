const birthday = 'August 9, 2022' 


const countdown = () => {
    const currentDate = new Date()
    const birthdayDate = new Date(birthday)

    console.log(currentDate);
    console.log(birthdayDate);
}

countdown()
setInterval(countdown(), 1000)