import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./order-confirm.scss";

const OrderSuccess = ({ match }: any) => {
  
  return (
    <>
      <div className="success-card">
        <div className="check-mark">
          <FontAwesomeIcon icon={faCheckCircle} size="6x" />
        </div>
        <h1>{match.params.id}</h1>
        <p>We received your purchase request</p>
      </div>
    </>
  );
}

export default OrderSuccess;
