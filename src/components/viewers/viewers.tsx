import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import socketIOClient from "socket.io-client";
import "./viewers.scss";

const Viewers = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const socket = socketIOClient("https://test.ejam.com/", {
      query: { applicantAuth: "cV874bxX9TmbBp2H8vsZkFaZ" },
      transports: ["websocket"],
    });
    socket.on("UPDATE_VIEWERS", (data) => setCount(data.viewers));
  }, []);

  return count ? (
    <div className="view">
      <FontAwesomeIcon icon={faEye} size="lg" />
      <div className="numbers">{count}</div> people are watching this limited offer right now!
    </div>
  ) : (
    <></>
  );
}

export default Viewers;
