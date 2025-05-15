import React, { useState } from "react";
import Hero from "../components/Hero";
import ExploreMenu from "../components/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
    </>
  );
};

export default Home;
