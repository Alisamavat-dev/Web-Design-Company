import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Portfolio />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
