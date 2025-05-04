import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlogPost from "../../components/BlogPost/BlogPost";
const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <BlogPost />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
