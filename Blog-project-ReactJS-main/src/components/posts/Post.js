import React, { useState } from "react";
import "./post.css";
import moment from "moment";
function Post(props) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [{ username: "user" }]
  );
  const [like, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  const handleLikeBtn = () => {
    setLikes(like + 1);
  };

  const handleAddComment = () => {
    setComments([...comments, commentContent]);
  };

  return (
    <div className="postWrapper">
      <div className="post">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="avatarImage">
              <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" />
            </div>
            <span className="username-name">{user[0].username}</span>
            <span className="postDate">{moment().fromNow()}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">"{props.post}"</span>
        </div>
        <div className="comment">
          {comments.length > 0 && comments.map((comment) => <h3>{comment}</h3>)}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <button className="like-btn" onClick={handleLikeBtn}>
              Like {like}
            </button>
          </div>
          <div className="postBottomRight">
            <span className="comment-btn" onClick={handleAddComment}>
              comment
            </span>
            <input
              type="text"
              onChange={(e) => setCommentContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
