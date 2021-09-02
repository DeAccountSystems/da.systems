const endTime = dayjs('2021-09-04T00:00:00Z')
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

// $('.announcement-link').text(`‼️各位小伙伴：DAS 团队今天正在紧张地进行正式发布前的环境部署及现网测试。在主网验证期间，发现有抢跑行为。为保障所有用户的权益，保证 DAS 的公平启动，DAS 团队需要一些时间来完善防抢跑机制。因此需要延期至 ${ endTime.format('YYYY-MM-DD HH:mm') } 上线。❤️在此 DAS 团队感谢大家的关注及热心反馈。`)

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


