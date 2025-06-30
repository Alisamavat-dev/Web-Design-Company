import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Help from "../../components/Help/Help";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Help />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
