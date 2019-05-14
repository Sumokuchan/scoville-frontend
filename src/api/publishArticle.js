import config from "@/config.js"

export default article => {
  const url = `${config.baseUrl}/articles`
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(article),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response
    // if (response.ok) {
    //   return response // response.json() when something is returned
    // }
    // throw new Error("Scoville Backend::publishArticle error...")
  })
}
