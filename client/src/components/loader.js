import React from "react";

export default function Loader() {
  return (
    <div className="loader">
      <div className="title-logo">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="title">
          my<b>tinerary</b>
        </p>
      </div>
    </div>
  );
}
