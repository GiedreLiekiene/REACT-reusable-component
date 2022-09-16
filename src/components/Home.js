import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Box from "../helpingComponent/Box";
import { data } from "../utils/data";

const Home = () => {
  return (
    <>
      <Header />
      {data.map((item) => {
        return <Box value={item} />;
      })}
      <Footer />
    </>
  );
};

export default Home;
