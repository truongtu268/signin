const API_ROOT = process.env.NODE_ENV === 'production' ? '//api.perkfec.com' : '//localhost:1337'

export function fetchSignupOnServer(data) {
  return fetch(`${API_ROOT}/teams/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(statusHelper)
    .then(response => response.json());
}

export function getFeedbackItemSample(data) {
  return fetch(`${API_ROOT}/feedbackitemsamples/createfeedbacksamples`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(statusHelper)
    .then(response => response.json());
}

export function verifyFeedbackUrl(data) {
  return fetch(`${API_ROOT}/feedbackanonymousurls/verify_anonymous_urls`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(statusHelper)
    .then(response => response.json());
}

export function createFeedback(data) {
  return fetch(`${API_ROOT}/feedBacklistresponses/createfeedback`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(statusHelper)
    .then(response => response.json());
}

export function getListFeedback(data) {
  return fetch(`${API_ROOT}/feedBacklistresponses/getlistfeedback`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(statusHelper)
    .then(response => response.json());
}

export function verifyTrackingFeedbackUrlFromServer(data) {
  return fetch(`${API_ROOT}/feedBacklistresponses/getlistfeedback`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(statusHelper)
    .then(response => response.json());
}

export function sendUrlToEmail(data) {
  return fetch(`${API_ROOT}/feedBacklistresponses/send_url_feedback_list_to_email`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(statusHelper)
    .then(response => response.json());
}

export function ratingFeedbackItemFromServer(data) {
  return fetch(`${API_ROOT}/feedbacklistresponses/rating_feedback`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(statusHelper)
    .then(response => response.json());
}

export function uploadImageOnServer(image) {
  return fetch(`${API_ROOT}/file/uploadfile`, {
    method: 'POST',
    body: image,
  })
    .then(statusHelper)
    .then(response => response.json());
}

export function uploadFileFeedbackAPI(file) {
  return fetch(`${API_ROOT}/file/uploadfilefeedback`, {
    method: 'POST',
    body: file,
  }).then(response => response.json())
    .then(response => response)
}

export function createContactUsAPI(data) {
  return fetch(`${API_ROOT}/contactus/post_contact`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => response.json())
    .then(response => response)
}

export function verifyDomainAPI(domainName) {
  return fetch(`${API_ROOT}/teams/verifysubdomain/${domainName}`, {
    method: 'GET',
  }).then(statusHelper)
    .then(response => response.json())
}

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}
