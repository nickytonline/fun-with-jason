const fetch = require('node-fetch');
const { builder } = require('@netlify/functions')

const handler = async (event) => {
  const username = event.path.replace(/\/api\/posts\/?/, '') || 'nickytonline'
  console.dir(username)
  // https://dev.to/api/articles?username=nickytonline
  const response = await fetch(`https://dev.to/api/articles?username=${username}`)
  const payload = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(payload)
  }
}

exports.handler = builder(handler)