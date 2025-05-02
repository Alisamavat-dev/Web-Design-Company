import Header from "../../components/Header/Header";
import Baner from "../../components/Home/Baner/Baner";
import Card from "../../components/Home/Card/Card";
import SEO from "../../components/Home/SEO/SEO";
import Blog from "../../components/Home/Blog/Blog";
import Comments from "../../components/Home/Comments/Comments";
import Footer from "../../components/Footer/Footer";
const Home = () => {

  return (
    <>
      <>
        <div>
          <Header />
        </div>
        <div className="pt-15 lg:pt-8">
          <Baner />
        </div>
        <div className="lg:pt-10">
          <Card />
        </div>
        <div>
          <Comments />
        </div>
        <div>
          <Blog/>
        </div>
        <div>
          <Footer />
        </div>
        <SEO />
      </>
    </>
  );
};

export default Home;
