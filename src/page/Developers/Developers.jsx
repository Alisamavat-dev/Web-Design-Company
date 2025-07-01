import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Developers from "../../components/Developers/Developers";
const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Developers />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
