const WEBAPP_ROOT = process.env.NODE_ENV === 'production' ? 'perkfec.com' : 'localhost:3000'

/**
 * Helper mapping email -> other info
 */
export function userMap(suggestions, receiver) {
  return receiver.map((email) => suggestions.find(item => item.mail === email))
}

export function checkContent(content) {
  if (!content || (Array.isArray(content) && content.length === 0)) {
    return false
  }
  return true
}

/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 */
export function intersperse(arr, sep) {
  if (arr.length === 0) {
    return []
  }
  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]])
}

export function url(subDomain, signup) {
  return `http://${subDomain}.${WEBAPP_ROOT}/login/?email=${signup.email}&accessToken=${signup.accessToken}`;
}
