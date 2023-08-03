import React from "react";
import "./Explore.scss";

function Explore() {
  return (
    <div className="Explore">
      <div>
        <div>
          <h2>
            Explore the Department{" "}
            <span>Habitasse ut nibh fames rhoncus dolor</span>
          </h2>
        </div>
        <div className="cover">
          <img className="special" src="/images/image3.jpeg" alt="" />
          <img className="normal" src="/images/image5.jpeg" alt="" />
          <img className="normal" src="/images/image4.jpeg" alt="" />
        </div>
        <div className="cover">
          <img className="normal" src="/images/image2.jpeg" alt="" />
          <img className="special" src="/images/image1.jpeg" alt="" />
          <img className="normal" src="/images/image8.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
