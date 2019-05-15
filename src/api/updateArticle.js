import config from "@/config.js"

export default article => {
  const url = `${config.baseUrl}/articles/${article._id}`
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(article),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response
  })
}
