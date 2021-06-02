const LANGUAGES = {
  '简体中文': 'zh_Hans_CN',
  'English': 'en'
}

$('.language-switch').click((event) => {
  document.cookie = 'language=' + LANGUAGES[event.target.innerText] + '; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  location.reload()
})
