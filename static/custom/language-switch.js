const LANGUAGES = {
  'zh-CN': { name: '简体中文', regexp: /zh|cn|hans/i },
  'en': { name: 'English', regexp: /en/i }
}

let setLanguage = ''
for (var key in LANGUAGES) {
  if (document.cookie.match(LANGUAGES[key].regexp)) {
    setLanguage = key
    break
  }
}

if (setLanguage) {
  $('#language').val(setLanguage)
}
else {
  if (window.navigator.language.match(LANGUAGES['zh-CN'].regexp)) {
    document.cookie = 'language=zh-CN; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  }
  else {
    document.cookie = 'language=en; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  }
  location.reload()
}

$('.language-switch').change((event) => {
  document.cookie = 'language=' + event.target.value + '; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  location.reload()
})
