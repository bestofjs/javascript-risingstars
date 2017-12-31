import numeral from 'numeral'

function formatDelta (delta, decimals = 0) {
  // return `+${delta}☆☆`
  const numberFormat = decimals === 0 || delta < 1000 ? '0' : `0.${'0'.repeat(decimals)}`
  const formattedNumber = numeral(delta).format(`${numberFormat}a`)
  // const formattedNumber = numeral(delta).format(`0a`)
  return formattedNumber
}

export default formatDelta;