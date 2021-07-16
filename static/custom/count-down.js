const endTime = dayjs('2021-07-21T12:00:00Z')
// const endTime = dayjs().add(10, 'second')
$('.final-time').html(`${endTime.month() + 1} 月 ${endTime.date()} 日<br>${endTime.hour()}:00`)

function replenishZero (num) {
  if (Number(num) < 10) {
    return `0${num}`
  }
  return `${num}`
}

function getTimeRemaining (timestamp) {
  const seconds = Math.floor(timestamp % 60)
  const minutes = Math.floor((timestamp / 60) % 60)
  const hours = Math.floor((timestamp / (60 * 60)) % 24)
  const days = Math.floor(timestamp / (60 * 60 * 24))
  return {
    hours: replenishZero(hours),
    minutes: replenishZero(minutes),
    seconds: replenishZero(seconds),
    days: replenishZero(days),
  }
}

const currentTime = dayjs()
const diffseconds = endTime.diff(currentTime, 'second')

if (diffseconds <= 0) {
  $('.event-time').hide()
  $('.button1-disabled').hide()
  $('.button2-disabled').hide()
  $('.button1-active').show()
  $('.button2-active').show()
}
else {
  const intervalId = setInterval(() => {
    const currentTime = dayjs()
    const diffseconds = endTime.diff(currentTime, 'second')
    if (diffseconds <= 0) {
      $('.event-time').hide()
      $('.button1-disabled').hide()
      $('.button2-disabled').hide()
      $('.button1-active').show()
      $('.button2-active').show()
      clearInterval(intervalId)
    }
    const diffTime = getTimeRemaining(diffseconds)
    $('.time-day').text(diffTime.days)
    $('.time-hour').text(diffTime.hours)
    $('.time-min').text(diffTime.minutes)
    $('.time-second').text(diffTime.seconds)
  }, 1000)
}


