import flatten from 'flat'

import allMessages from '../../i18n/messages'

// Gather all messages for a given year and a given language
export default function getMessages({ language, year }) {
  const yearMessages = allMessages[`year${year}`][language]
  const commonMessages = allMessages.common[language]
  const messages = Object.assign({}, yearMessages, { common: commonMessages })
  console.info('All messages', messages)
  if (Object.keys(messages).length === 0) return {}
  return flatten(messages)
}
