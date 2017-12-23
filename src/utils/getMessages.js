import flatten from 'flat'

import allMessages from '../../i18n/messages'

export default function getMessages({ language, year }) {
  const messages = allMessages[`year${year}`][language]
  // console.info('All messages', messages)
  if (Object.keys(messages).length === 0) return {}
  return flatten(messages)
}
