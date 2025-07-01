import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Pricing />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
