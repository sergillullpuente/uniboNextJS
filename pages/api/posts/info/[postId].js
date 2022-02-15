import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const postId = req.query.postId;
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.data.userId}`);
        res.statusCode = 200;
        res.json({
            post: post.data,
            comments: comments.data,
            user: user.data
        });
    }
}
