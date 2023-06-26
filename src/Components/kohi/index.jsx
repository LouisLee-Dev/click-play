import React from "react";
import { DashBoard } from "../../DashBoard/DashBoard";
import { Description } from "../../Description/Description";
import "../../App.css";
import Modal from "../../Modal/Modal";
import Share from "../../share";
import MoreGame from "../../moreGame";
import { Timer } from "../../Settings/Timer";
import useContext from "../../Hooks/rootContext/useContext";
import useOperator from "../../Hooks/rootContext/useOperator";
import Helmet from "../../Helmet/Helmet";
import { useNavigate } from "react-router-dom";

const Kohi = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();
  const navigate = useNavigate();

  const description =
    "Play CPS test free online game. Click Per Second checks the speed of mouse clicks you can make in 10 seconds";
  const title = "CPS Test Speed - Kohi";

  return (
    <div style={{ width: "100%" }}>
      <Helmet title={title} description={description} />
      <div className="up AppMain">
        <div className="upText">
          <h1 className="fs-2 fw-bold mt-2">Kohi Speed Test</h1>
          <p style={{ fontSize: "1.1rem" }}>Test your Kohi speed per second!</p>
        </div>
        <div className="dashboard-container">
        <div className="clicker-container">
            <DashBoard />
            <button
              onClick={() => {
                navigate("/Click");
                window.scrollTo(0, 0);
              }}
              className="default-button click-speed-test-btn"
            >
              click speed test
            </button>
          </div>
          <Timer
            changeTimer={changeTimer}
            timer={data?.timer}
            type={data?.testType}
          />
        </div>
      </div>
      <Share />
      <Description type="Kohi" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Kohi;
