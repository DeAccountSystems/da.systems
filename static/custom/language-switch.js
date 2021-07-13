const LANGUAGES = {
  '简体中文': 'zh_Hans_CN',
  'English': 'en'
}

for (var key in LANGUAGES) {
  if (document.cookie.indexOf(LANGUAGES[key]) > -1) {
    $('#language').val(LANGUAGES[key])
    break
  }
}

$('.language-switch').change((event) => {
  document.cookie = 'language=' + event.target.value + '; expires=Fri, 31 Dec 9000 23:59:59 GMT'
  location.reload()
})
