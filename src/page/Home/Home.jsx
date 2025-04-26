import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Baner from "../../components/Home/Baner/Baner";
import Card from "../../components/Home/Card/Card";
import SEO from "../../components/Home/SEO/SEO";
const Home = () => {
  return (
    <>
      <div className="">
        <SEO />
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Baner />
      </div>
      <div className="lg:pt-10">
        <Card />
      </div>
    </>
  );
};

export default Home;
