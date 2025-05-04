import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllBlog from "../../components/AllBlog/AllBlog";
const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="max-w-[1340px] mx-auto">
        <AllBlog />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
