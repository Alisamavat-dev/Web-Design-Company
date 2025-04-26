import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Baner from "../../components/Home/Baner/Baner";
import Card from "../../components/Home/Card/Card";
const Home = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="pt-15 xl:py-0">
        <Baner />
      </div>
      <div className="">
        <Card />
      </div>
    </>
  );
};

export default Home;
