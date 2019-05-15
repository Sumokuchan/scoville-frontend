import config from "@/config.js"

export default _id => {
  const url = `${config.baseUrl}/articles/${_id}`
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response
  })
}
