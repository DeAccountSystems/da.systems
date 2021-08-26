const list = [{
  englishName: 'imToken',
  chineseName: 'imToken',
  logo: 'wallet-imtoken.png',
  website: 'https://token.im?utm_source=da.systems'
}, {
  englishName: 'TokenPocket',
  chineseName: 'TokenPocket',
  logo: 'wallet-tokenpocket.png',
  website: 'https://www.tokenpocket.pro?utm_source=da.systems'
}, {
  englishName: 'Math Wallet',
  chineseName: 'Math Wallet',
  logo: 'wallet-mathwallet.png',
  website: 'https://mathwallet.org?utm_source=da.systems'
}, {
  englishName: 'Huobi Wallet',
  chineseName: 'Huobi Wallet',
  logo: 'wallet-huobiwallet.png',
  website: 'https://www.huobiwallet.io/en/h5?utm_source=da.systems'
}, {
  englishName: 'SafePal',
  chineseName: 'SafePal',
  logo: 'wallet-safepal.png',
  website: 'https://safepal.io?utm_source=da.systems'
}, {
  englishName: 'HyperPay',
  chineseName: 'HyperPay',
  logo: 'wallet-hyperpay.png',
  website: 'https://www.hyperpay.tech?utm_source=da.systems'
}, {
  englishName: 'BitKeep',
  chineseName: 'BitKeep',
  logo: 'wallet-bitkeep.png',
  website: 'https://bitkeep.org?utm_source=da.systems'
}, {
  englishName: 'ONTO Wallet',
  chineseName: 'ONTO Wallet',
  logo: 'wallet-test.png',
  website: 'https://www.onto.app?utm_source=da.systems'
}]

list.forEach((item) => {
  $('.wall').append(`
    <a href="${ item.website }" target="_blank" class="logo-block w-inline-block">
      <div class="app-info">
        <div class="logo-image"><img src="images/${ item.logo }" loading="lazy" alt="" class="app-logo"></div>
        <h4 class="app-name">${ item.englishName }</h4>
      </div>
    </a>`)
})
