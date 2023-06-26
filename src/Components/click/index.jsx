import React from "react";
import { DashBoard } from "../../DashBoard/DashBoard";
import { Description } from "../../Description/Description";
import "../../App.css";
import Modal from "../../Modal/Modal";
import Share from "../../share";
import MoreGame from "../../moreGame";
import { Timer } from "../../Settings/Timer";
import { ChoseClickType } from "../../Settings/ChoseClickType";
import useContext from "../../Hooks/rootContext/useContext";
import useOperator from "../../Hooks/rootContext/useOperator";
import { useLocation } from "react-router-dom";
import Helmet from "../../Helmet/Helmet";

const Click = () => {
  const location = useLocation();
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();

  const description =
    "Play CPS test free online game. Click Per Second checks the speed of mouse clicks you can make in 10 seconds";
  const title = "CPS Test Speed - How Many Clicks per Second?";

  return (
    <div style={{ width: "100%" }}>
      <Helmet title={title} description={description} />
      <div className="up AppMain">
        <div className="upText">
          <h1 className="fs-2 fw-bold mt-2">Click Per Second Speed Test</h1>
          <p style={{ fontSize: "1.1rem" }}>
            How many clicks per second you can get?
          </p>
        </div>
        <div className="dashboard-container">
          <div className="clicker-container">
            <DashBoard />
            <ChoseClickType changeClickType={changeClickType} />
          </div>
          <Timer
            changeTimer={changeTimer}
            timer={data?.timer}
            type={data?.testType}
          />
        </div>
      </div>
      <ChoseClickType
        className="mobile-jitter-kohi-button"
        changeClickType={changeClickType}
      />
      <Share />
      <Description type="Click" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Click;
