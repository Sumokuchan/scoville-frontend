import config from "@/config.js"

export default () => {
  const url = `${config.baseUrl}/articles/`
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response
  })
}
