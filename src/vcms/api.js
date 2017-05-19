function makeRequest(method, url) {
  return new Promise((resolve, reject) => {
    console.log('Start request')
    var xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onload = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.statusText)
        }
      }
    }
    xhr.onerror = () => {
      reject(xhr.statusText)
    }
    xhr.send(null)
  })
}


export function test() {
  makeRequest('GET', 'http://localhost:1234').then(
    (r) => {
      console.log('Response', r)
    }
  )
}