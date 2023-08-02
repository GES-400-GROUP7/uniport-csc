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
              <button><a href="https://www.google.com/maps/dir//Computer+Science+Department+-+Uniport,+Clinical+Rd,+500102,+Choba,+Rivers/@4.9026899,6.9164193,14z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x1069d17e22adf1d7:0xc0433bf939f5c7e8!3e0">GET LIVE DIRECTION TO THE DEPARTMENTAL BUILDING</a></button>
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
