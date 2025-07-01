import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubmitProject from "../../components/SubmitProject/SubmitProject";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <SubmitProject />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
