import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
