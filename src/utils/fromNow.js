import vagueTime from 'vague-time'

// Equivalent to moment(<stringDate>).fromNow()
// but vague-time module is lighter than moment!
export default function(strDate) {
  try {
    return vagueTime.get({
      to: new Date(strDate)
    })
  } catch (e) {
    return '?' // avoid throwing "Invalid date" errors
  }
}
