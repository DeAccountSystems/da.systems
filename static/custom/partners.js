const list = [{
  englishName: 'imToken',
  chineseName: 'imToken',
  logo: 'wallet-imtoken.png',
  website: 'https://token.im/'
}, {
  englishName: 'TokenPocket',
  chineseName: 'TokenPocket',
  logo: 'wallet-tokenpocket.png',
  website: 'https://www.tokenpocket.pro/'
}, {
  englishName: 'MathWallet',
  chineseName: 'MathWallet',
  logo: 'wallet-mathwallet.png',
  website: 'https://mathwallet.org/'
}, {
  englishName: 'Huobi Wallet',
  chineseName: 'Huobi Wallet',
  logo: 'wallet-huobiwallet.png',
  website: 'https://www.huobiwallet.com/'
}, {
  englishName: 'SafePal',
  chineseName: 'SafePal',
  logo: 'wallet-safepal.png',
  website: 'https://safepal.io/download'
}, {
  englishName: 'HyperPay',
  chineseName: 'HyperPay',
  logo: 'wallet-hyperpay.png',
  website: 'https://www.hyperpay.tech/'
}, {
  englishName: 'BitKeep',
  chineseName: 'BitKeep',
  logo: 'wallet-bitkeep.png',
  website: 'https://bitkeep.org/'
}]

list.forEach((item) => {
  $('.wall').append(`
    <a href="${ item.website }" target="_blank" class="logo-block w-inline-block">
      <div class="app-info">
        <div class="logo-image"><img src="images/${ item.logo }" loading="lazy" alt="" class="app-logo"></div>
        <h4 class="app-englishName">${ item.englishName }</h4>
      </div>
    </a>`)
})
