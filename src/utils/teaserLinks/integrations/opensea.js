export const isOpensea = (url = '') =>
  url.indexOf('opensea.io') !== -1 && url.indexOf('assets/') !== -1

export const isOpenseaEmbed = (url = '') => url.endsWith('?embed=true')

export const isOpenseaAlmostEmbed = (url = '') => url.endsWith('?embed=true"')

// Examples:

// https://opensea.io/assets/0x32d813d74836f2054a8820560a8b5604a2697360/4 ===> contractAddress="0x32d813d74836f2054a8820560a8b5604a2697360" tokenId="4"
// https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/40406120361073555947238861531328748460397428002588449523126021019694683652097 ===> contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e" tokenId="40406120361073555947238861531328748460397428002588449523126021019694683652097"

export const getOpenseaUrl = (url = '') => {
  let trueUrl, tokenAddress, tokenId

  if (isOpensea(url)) {
    trueUrl = decodeURI(url)

    if (isOpenseaAlmostEmbed(trueUrl)) trueUrl = trueUrl.slice(0, -12)
    if (isOpenseaEmbed(trueUrl)) trueUrl = trueUrl.slice(0, -11)

    const [openSeaUrl, addressAndId] = trueUrl.split('assets/')

    const idArr = addressAndId.split('/').filter((id) => id > '')

    if (idArr.length === 2) {
      ;[tokenAddress, tokenId] = idArr
    } else if (idArr.length > 2) {
      ;[tokenAddress, tokenId] = idArr.slice(-2)
    }
  }

  return { tokenAddress, tokenId }
}
