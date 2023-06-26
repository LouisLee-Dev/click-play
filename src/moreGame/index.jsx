import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { CgScrollV } from "react-icons/cg";
import { FcCursor } from "react-icons/fc";
import { MdSpaceBar } from "react-icons/md";

export default function MoreGame(props) {
  const navigate = useNavigate();

  return (
    <div className="moreGames">
      <h2 className="moregames-text">More Test Games...</h2>
      <div className="aboutGames mb-3">
        <div className="about-game-row">
          <div
            onClick={() => {
              props.changeTestType("Spacebar", 5000);
              navigate("/Spacebar");
            }}
            className="more-game-box"
          >
            <span className="whiteCircle">
              <MdSpaceBar style={{ fontSize: "70px" }} />
            </span>
            <span className="info">Spacebar Test</span>
          </div>
          <div
            onClick={() => {
              props.changeTestType("Scroll", 1000);
              navigate("/Scroll");
            }}
            className="more-game-box"
          >
            <span className="whiteCircle">
              <CgScrollV style={{ fontSize: "70px" }} />
            </span>
            <span className="info">Scroll Test</span>
          </div>
        </div>

        <div className="about-game-row">
          <div
            onClick={() => {
              props.changeTestType("Typing", 30000);
              navigate("/Typing");
            }}
            className="more-game-box"
          >
            <span className="whiteCircle">
              <MdOutlineKeyboardAlt style={{ fontSize: "70px" }} />
            </span>
            <span className="info">Typing Test</span>
          </div>
          <div
            onClick={() => {
              props.changeTestType("Click", 5000);
              navigate("/Click");
            }}
            className="more-game-box"
          >
            <span className="whiteCircle">
              <FcCursor style={{ fontSize: "100px" }} />
            </span>
            <span className="info">CPS Test</span>
          </div>
        </div>
      </div>
    </div>
  );
}
