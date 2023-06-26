import React from "react";
import { useNavigate } from "react-router-dom";
import useOperator from "../../Hooks/rootContext/useOperator";
import { useLocation } from "react-router-dom";

export const MenuText = ({ links, type, changeTestType }) => {

  const location = useLocation();
 
  const navigate = useNavigate();
  const goTo = (to, defTime) => {
    changeTestType(to, defTime);
    navigate(to);
  };
  return (
    <div>
      <ul className="HeaderUl">
        {links.map((el, index) => (
          <li
            className="HeaderMenuTypes"
            onClick={() => goTo(el.type, el.defTime)}
            key={el.id}
            style={{
              color: location.pathname.includes(el.type) ? "#ADE0E4" : "white",
              paddingRight: el.text === "Typing test" ? "0px":"15px"
            }}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
