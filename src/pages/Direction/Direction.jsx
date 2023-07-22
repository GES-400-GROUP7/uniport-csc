import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Direction.scss";

function Direction() {
  return (
    <Layout>
      <main className="direction">
        <div className="direction_header">
          <h1>Direction</h1>
        </div>
        <div className="direction_body">
          <div className="background">
            <div>
              <button><a href="#">GET LIVE DIRECTION TO THE DEPARTMENTAL BUILDING</a></button>
            </div>
            <div>
              <img src="/images/Map.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Direction;
