export const fetch = (url) => new Promise((resolve, reject) => {
  const http = new XMLHttpRequest()
  http.onload = createOnload(http, resolve, reject)
  http.open('GET', url)
  http.send()
  console.log('Sending request')
})

const createOnload = (http, resolve, reject) => () => {
  console.log('response received')
  if (http.status === 200) {
    return resolve(JSON.parse(http.responseText))
  }

  return reject(new Error('Something went wrong'))
}

const authenticate = (http) => {
  http.setRequestHeader(
    'Cookie',
    'Auth-token=54V8pF622M63y6RMVZy8bmS8sGmwv4r83RCuP6Fq'
  )

  return http
}
