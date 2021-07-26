function getQueryParam () {
  const queryParams = {}
  let paramsString = window.location.search.replace('?', '')
  let searchParams = new URLSearchParams(paramsString)
  for (let param of searchParams) {
    queryParams[param[0]] = param[1]
  }
  return queryParams
}

let queryString = $.param(getQueryParam())

if (queryString) {
  const gogodasUrl = `https://app.gogodas.com/explorer?${queryString}`
  const dasUrl = `https://app.da.systems/explorer?${queryString}`
  $('#gogodasUrl').attr('href', gogodasUrl)
  $('#dasUrl').attr('href', dasUrl)
}
