import React from "react";
import Child from "./child";

export default function Parent() {
  return (
    <>
      <div className="layer">
        <div className="wrapper">
          <div className="container">
            <div className="card-group">
              <div className="card">Parent</div>
              <Child />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
