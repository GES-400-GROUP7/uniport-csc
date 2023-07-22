import React from "react";
import Layout from "../../components/Layout/Layout";
import Explore from "../../components/Explore/Explore";
import "./Direction.scss";

function Direction() {
  return (
    <Layout>
    <div className="direction">
        <div className="direction_header">
        <h1>Direction</h1>
      </div>

      {/* <div className="container">
        <button>
          <a href="#">GET LIVE DIRECTION TO THE DEPARTMENTAL BUILDING</a>
        </button>

        <div>
          <img src="/images/Map.jpg" alt="map" />
        </div>
      </div> */}
    </div>
    </Layout>
  );
}

export default Direction;