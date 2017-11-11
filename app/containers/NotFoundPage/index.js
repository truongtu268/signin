import React from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'

const messages = defineMessages({
  header: {
    id: 'app.components.NotFoundPage.header',
    defaultMessage: 'This is NotFoundPage component !',
  },
});

export default function NotFound() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  )
}
