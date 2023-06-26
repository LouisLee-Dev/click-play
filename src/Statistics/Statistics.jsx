import React from "react";
import { ClickStastistic } from "./StatistiTypes/ClickStastistic";
import { TypingStastitic } from "./StatistiTypes/TypingStastitic";
import useContext from "../Hooks/rootContext/useContext";
import useOperator from "../Hooks/rootContext/useOperator";
import { useLocation } from "react-router-dom";
import pathResolver from "../utils/pathResolver";

export const Statistics = () => {
  const location = useLocation();
  const { data } = useContext();
  const { refresh } = useOperator();

  const renderSwitch = () => {
    switch (pathResolver(location.pathname)) {
      case "":
      case "/":
      case "/Click":
      case "/Click/":
      case "/Jitter":
      case "/Jitter/":
      case "/Kohi":
      case "/Kohi/":
        return (
          <div className="mainStatistics">
            <ClickStastistic />
          </div>
        );
      case "/Spacebar":
      case "/Spacebar/":
        return (
          <div className="mainStatistics">
            <ClickStastistic />
          </div>
        );
      case "/Scroll":
      case "/Scroll/":
        return (
          <div className="scrollHeader">
            <div className="StatisticClickItem">
              <div className="statText">
                <p style={{ marginBottom: "0px" }}>
                  Highscore:{" "}
                  <span
                    style={{
                      padding: "5px 30px",
                      background: "#2e3236",
                      borderRadius: "5px",
                      marginLeft: "15px",
                      border: "1px solid #95989b",
                    }}
                  >
                    {data.bestScore ? data.bestScore * 100: 0}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      case "/Typing":
      case "/Typing/":
        return (
          <div className="mainStatistics">
            <TypingStastitic
              refresh={refresh}
            />
          </div>
        );
      default:
        return <h1>Error</h1>;
    }
  };
  return <>{renderSwitch()}</>;
};
