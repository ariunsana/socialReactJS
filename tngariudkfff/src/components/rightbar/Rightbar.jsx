import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ariunsanaa</b> and <b>4 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarProfileImg">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Khulan</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
