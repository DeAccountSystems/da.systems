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
  englishName: 'AlphaWallet',
  chineseName: 'AlphaWallet',
  logo: 'wallet-alphawallet.png',
  website: 'https://alphawallet.com?utm_source=da.systems'
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
  logo: 'wallet-onto.png',
  website: 'https://www.onto.app?utm_source=da.systems'
}, {
  englishName: 'ShowMe',
  chineseName: 'ShowMe',
  logo: 'partners-showme.png',
  website: 'https://showme.fan?utm_source=da.systems'
}, {
  englishName: 'WePiggy',
  chineseName: 'WePiggy',
  logo: 'partners-wepiggy.png',
  website: 'https://wepiggy.com?utm_source=da.systems'
}, {
  englishName: 'Coinhub',
  chineseName: 'Coinhub',
  logo: 'partners-coinhub.png',
  website: 'https://www.coinhub.org?utm_source=da.systems'
}, {
  englishName: 'NFTSCAN',
  chineseName: 'NFTSCAN',
  logo: 'partners-nftscan.png',
  website: 'https://nftscan.com?utm_source=da.systems'
}, {
  englishName: 'NFTGO',
  chineseName: 'NFTGO',
  logo: 'partners-nftgo.png',
  website: 'https://nftgo.io?utm_source=da.systems'
}, {
  englishName: 'DASLA',
  chineseName: 'DASLA',
  logo: 'partners-dasla.png',
  website: 'https://das.la?utm_source=da.systems'
}, {
  englishName: 'MIBAO',
  chineseName: 'MIBAO',
  logo: 'partners-mibao.png',
  website: 'https://mibao.net?utm_source=da.systems'
}, {
  englishName: 'Nervos',
  chineseName: 'Nervos',
  logo: 'partners-nervos.png',
  website: 'https://www.nervos.org?utm_source=da.systems'
}, {
  englishName: 'ViaWallet',
  chineseName: 'ViaWallet',
  logo: 'partners-viawallet.png',
  website: 'https://viawallet.com?utm_source=da.systems'
}, {
  englishName: 'Bitpie',
  chineseName: '比特派',
  logo: 'partners-bitpie.png',
  website: 'https://bitpie.com?utm_source=da.systems'
}, {
  englishName: 'Dfox',
  chineseName: 'Dfox',
  logo: 'partners-dfox.png',
  website: 'https://dfox.cc?utm_source=da.systems'
}, {
  englishName: 'GoPocket',
  chineseName: 'GoPocket',
  logo: 'partners-gopocket.png',
  website: 'https://gopocket.finance?utm_source=da.systems'
}, {
  englishName: 'AToken',
  chineseName: 'AToken',
  logo: 'partners-atoken.png',
  website: 'https://www.atoken.com?utm_source=da.systems'
}, {
  englishName: 'Yin',
  chineseName: 'Yin',
  logo: 'partners-yin.png',
  website: 'https://yin.finance?utm_source=da.systems'
}, {
  englishName: 'CyberPunk Lab',
  chineseName: 'CyberPunk Lab',
  logo: 'partners-cyberpunk-lab.png',
  website: ''
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
