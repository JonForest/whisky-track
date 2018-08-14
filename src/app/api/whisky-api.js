const getWhiskies = () => {
  return fetch('http://127.0.0.1:3001/whiskies')
    .then(response => {
      return response.json()
    }, error => {
      console.error(error)
      return []
    })
}

const addWhisky = (whisky) => {
  return fetch('http://127.0.0.1:3001/whiskies', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(whisky)
  })
    .then(response => response.json())
    .catch(error => console.error(error))
}

export {
  getWhiskies,
  addWhisky
}