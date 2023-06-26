import React, { useEffect, useState, memo } from "react";
import { MenuText } from "./MenuText/MenuText";
import SimpleMenu from "./SimpleMenu/SimpleMenu";
import $ from "jquery";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useContext from "../Hooks/rootContext/useContext";
import useOperator from "../Hooks/rootContext/useOperator";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  
  const { data } = useContext();
  const { changeTestType } = useOperator();

  const links = [
    { id: "1", text: "Click speed test", type: "Click", defTime: 5000 },
    { id: "2", text: "Spacebar counter", type: "Spacebar", defTime: 5000 },
    { id: "3", text: "Scroll speed test", type: "Scroll", defTime: 1000 },
    { id: "4", text: "Typing test", type: "Typing", defTime: 30000 },
  ];

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <nav className="default-nav navbar fixed-top bg-theme d-flex">
      <div className="header-container">
      <div className="clickPlay">
        <button
          onClick={() => {
            changeTestType("Click", 5000);
            navigate("/");
          }}
        >
          <img
            alt="header-icon"
            src="/white-favicon.png"
            className="header-mouse-icon-white"
          />
          <span className="HeaderLogo">Click Play</span>
        </button>
      </div>
      <div className="HeaderMenu">
        {width > 1100 ? (
          <MenuText
            changeTestType={changeTestType}
            type={data?.testType}
            time={data?.timer}
            links={links}
          />
        ) : (
          <SimpleMenu
            changeTestType={changeTestType}
            type={data?.testType}
            time={data?.timer}
            links={links}
          />
        )}
      </div>
      </div>
    </nav>
  );
};

export default memo(Header);
