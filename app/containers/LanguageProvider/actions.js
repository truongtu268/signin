import { CHANGE_LOCALE } from '../../appconstants'

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  }
}
