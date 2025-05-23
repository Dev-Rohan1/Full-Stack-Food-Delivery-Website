import React, { useState } from "react";
import Hero from "../components/Hero";
import ExploreMenu from "../components/ExploreMenu";
import AppLayout from "../layout/AppLayout";
import Footer from "./Footer";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <AppDownload />
    </>
  );
};

export default Home;
