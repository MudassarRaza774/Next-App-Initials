import { useState } from "react";
import styles from "../../styles/comments.module.css";

const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  const [addCommentInputField, setAddCommentInputField] = useState("");
  const [commentButtonText, setCommentButtonText] = useState("Add Comment");
  const [updateCommentId, setUpdateCommentID] = useState(0);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const addNewComment = async () => {
    const addComment = addCommentInputField;
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addComment }),
    });
    setAddCommentInputField("");
    fetchComments();
    const data = await response.json();
  };

  const deleteComment = async (id) => {
    await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    fetchComments();
  };

  const updateComment = (comment, id) => {
    setUpdateCommentID(id);
    setAddCommentInputField(comment);
    setCommentButtonText("Update");
  };

  const submitUpdateComment = async () => {
    const updatedText = addCommentInputField;
    const response = await fetch(`/api/comments/${updateCommentId}`, {
      method: "PATCH",
      body: JSON.stringify({ updatedText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setAddCommentInputField("");
    const data = await response.json();
    fetchComments();
    setCommentButtonText("Add Comment");
    console.log("response after updation", data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>Have a look on all the comments</h2>
      <div>
        <button onClick={fetchComments}>Load Comments</button>
      </div>
      <div style={{ margin: "3px 0px" }}>
        <input
          type="text"
          style={{ padding: "5px" }}
          onChange={(e) => setAddCommentInputField(e.target.value)}
          value={addCommentInputField}
        ></input>
        <button
          onClick={
            commentButtonText === "Add Comment"
              ? addNewComment
              : submitUpdateComment
          }
          style={{ marginLeft: "3px", padding: "5px" }}
        >
          {commentButtonText}
        </button>
      </div>
      {comments ? (
        <div style={{ padding: "30px" }}>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {comment.text}
                  <div>
                    <button onClick={() => deleteComment(comment.id)}>
                      Delete
                    </button>
                    &nbsp;
                    <button
                      onClick={() => updateComment(comment.text, comment.id)}
                    >
                      Update
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <div>Why don&apos;t you 👆 click the button?</div>
      )}
    </div>
  );
};

export default CommentsPage;
