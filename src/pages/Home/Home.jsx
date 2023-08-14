import React from "react";
import Layout from "../../components/Layout/Layout";
import Explore from "../../components/Explore/Explore";
import Staff from "../../components/Staff/Staff";
import Hero from "../../components/Hero/Hero";
import NewSlider from "../../components/NewSlider/NewSlider";

function Home() {
  return (
    <Layout>
      <Hero />
      <Explore />
      <Staff />
      <NewSlider/>
    </Layout>
  );
}

export default Home;
