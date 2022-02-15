import axios from "axios"

export default function handler (req, res) {
  if(req.method === "GET")
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.postId}`)
      .then(response => {
        res.statusCode = 200
        res.json(response.data)
      })
      .catch(error => {
        res.statusCode = 404
        res.json({ error: error.message })
      })
  else if(req.method === "PUT"){
    return axios.put(`https://jsonplaceholder.typicode.com/posts/${req.query.postId}`, req.body)
      .then(response => {
        res.statusCode = 200
        res.json(response.data)
      })
      .catch(error => {
        res.statusCode = 500
        res.json({ error: error.message })
      })
  }
}