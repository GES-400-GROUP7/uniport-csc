import React from "react";
import "./Explore.scss";

function Explore() {
  return (
    <div className="Explore">
      <div>
        <h2>
          Explore the Department{" "}
          <span>Habitasse ut nibh fames rhoncus dolor</span>
        </h2>
      </div>

      <div>
        <div>
          <img className="special" src="/images/Pic1.jpg" alt="" />
          <img className="normal" src="/images/Pic2.jpg" alt="" />
          <img className="normal" src="/images/Pic3.jpg" alt="" />
        </div>

        <div>
          <img className="normal" src="/images/Pic4.jpg" alt="" />
          <img className="special" src="/images/Pic6.jpg" alt="" />
          <img className="normal" src="/images/Pic5.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
