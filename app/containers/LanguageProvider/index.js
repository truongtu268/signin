import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  locale: React.PropTypes.string,
  messages: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
}

const mapStateToProps = (state) => ({
  locale: state.language.locale,
})

export default connect(mapStateToProps)(LanguageProvider)
