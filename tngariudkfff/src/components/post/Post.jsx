import "./post.css";
import { MoreVert } from "@mui/icons-material";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" alt="" />
            <span className="postUsername">Alex Jason</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Heyy Its My First post </span>
          <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
          </div>
          <div className="postBottomRight"></div>
        </div>
      </div>
    </div>
  );
}
