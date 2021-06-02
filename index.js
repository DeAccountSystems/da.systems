const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const staticFiles = require('koa-static')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()

const LANGUAGES = new Map(
  [
    ['zh_Hans_CN', { name: '简体中文', regexp: /zh|cn|hans/i }],
    ['en', { name: 'English', regexp: /en/i }]
  ]
)

const EXPIRES = new Date('Fri, 31 Dec 9000 23:59:59 GMT')

/**
 * 根据用户提供的language，匹配一下我们支持的language
 * @param lang 语言
 * @returns {string} 匹配的语言
 */
function matchLanguage (lang) {
  let language = null
  LANGUAGES.forEach((value, key) => {
    if (lang.match(value.regexp)) {
      language = key
    }
  })
  return language
}

/**
 * 设置语言 cookie
 * @param ctx koa上下文
 * @param lang 语言名
 */
function setLanguageCookie(ctx, lang) {
  ctx.cookies.set('language', lang, {
    expires: EXPIRES,
    httpOnly: false
  })
}

app.use(staticFiles(path.resolve(__dirname, './static')))

router.get('/*', async (ctx, next) => {
  const language = ctx.cookies.get('language')
  const acceptsLanguages = ctx.acceptsLanguages()
  let lang
  if (language) {
    lang = matchLanguage(language)
  }
  else if (acceptsLanguages) {
    for (let i = 0; i < acceptsLanguages.length; i++) {
      const acceptsLanguage = matchLanguage(acceptsLanguages[i])
      if (acceptsLanguage) {
        lang = acceptsLanguage
        break
      }
    }
  }

  if (lang && lang === 'zh_Hans_CN') {
    setLanguageCookie(ctx, lang)
    ctx.response.body = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
  }
  else if (lang) {
    setLanguageCookie(ctx, lang)
    ctx.response.body = fs.readFileSync(path.resolve(__dirname, `./index-${ lang }.html`), 'utf-8')
  }
  else {
    setLanguageCookie(ctx, 'English')
    ctx.response.body = fs.readFileSync(path.resolve(__dirname, './index-en.html'), 'utf-8')
  }
})

app.use(router.routes())

app.listen(process.env.PORT || 23000, () => {
  console.log(`server is running at http://127.0.0.1:${process.env.PORT || 23000}`)
})
