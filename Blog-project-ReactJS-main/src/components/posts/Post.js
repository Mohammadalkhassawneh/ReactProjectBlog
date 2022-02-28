import React, { useState } from "react";
import "./post.css";
import moment from "moment";
function Post(props) {
  let d = new Date();
  let tdate = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getUTCFullYear();
  if (tdate < 10) {
    tdate = "0" + tdate;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let minDate = year + "-" + month + "-" + tdate;
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
        <div className="postBottom">
          <div className="postBottomLeft">
            <button className="like-btn" onClick={handleLikeBtn}>
              Like {like}
            </button>
          </div>
          <div className="postBottomRight">
            <input
              type="text"
              placeholder="write your comment ..."
              onChange={(e) => setCommentContent(e.target.value)}
              className="comment-input"
            />
            <span className="comment-btn" onClick={handleAddComment}>
              <i class="fa-solid fa-comment"></i>
            </span>
          </div>
        </div>
        <div className="comment">
          <div>
            {comments.length > 0 &&
              comments.map((comment) => (
                <div className="comment-container">
                  <div className="avatarImage">
                    <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" />
                  </div>
                  <div className="comments-section">
                    <h3>{comment}</h3>
                    <h5 className="date-field">Date:{minDate}</h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
