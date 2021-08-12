const LANGUAGES = {
  '简体中文': 'zh-CN',
  'English': 'en'
}

let setLanguage = ''
for (var key in LANGUAGES) {
  if (document.cookie.indexOf(LANGUAGES[key]) > -1) {
    setLanguage = LANGUAGES[key]
    break
  }
}

if (setLanguage) {
  $('#language').val(setLanguage)
}
else {
  document.cookie = 'language=' + window.navigator.language + '; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  location.reload()
}

$('.language-switch').change((event) => {
  document.cookie = 'language=' + event.target.value + '; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  location.reload()
})
