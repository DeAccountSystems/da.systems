function getQueryParam (name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

const queryParams = {
  inviter: getQueryParam('inviter'),
  channel: getQueryParam('channel'),
}

if (queryParams.inviter || queryParams.channel) {
  let queryString = $.param(queryParams)
  const gogodasUrl = `https://app.gogodas.com/explorer?${queryString}`
  const dasUrl = `https://app.da.systems/explorer?${queryString}`
  $('#gogodasUrl').attr('href', gogodasUrl)
  $('#dasUrl').attr('href', dasUrl)
}
