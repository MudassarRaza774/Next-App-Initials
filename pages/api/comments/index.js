import { comments } from "../../../data/comments";
export default function handler(req, res) {
  const method = req.method;
  if (method === "GET") {
    res.status(200).json(comments);
  } else if (method === "POST") {
    const { addComment } = req.body;
    const newComment = {
      id: Date.now(),
      text: addComment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
