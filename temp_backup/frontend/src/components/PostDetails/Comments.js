import moment from "moment";
import React from "react";

const Comments = ({ comments }) => {
  return comments.length > 0 ? (
    <div className="commentShow">
      {comments.map((comment) => (
        <div className="commentShow-card">
          <div className="postDetails__header">
            <div className="postDetails__header__avator">
              {comment.userName ? comment.userName[0] : ""}
            </div>
          </div>
          <div className="">
            <p className="commentShow-text">{comment.comment}</p>
            <footer className="commentShow-footer">
              {comment.userName}{" "} - {" "}
              {moment(comment.createdAt).format("MMM Do YY")}
            </footer>
          </div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
};

export default Comments;
