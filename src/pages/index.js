import Head from "next/head";
import BannerArea from "../components/Home/BannerArea";
import BrandArea from "../components/Home/BrandArea";
import CategoryArea from "../components/Home/CategoryArea";
import Cta from "../components/Home/Cta";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import HeroArea from "../components/Home/HeroArea";
import Products from "../components/Home/Products";
import Subscribe from "../components/Home/Subscribe";
import Testimonial from "../components/Home/Testimonial";
import TrendingLandmark from "../components/Home/TrendingLandmark";
import SEO from "../components/seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle={"Jasa Website Brebes"} />
      <Header />
      <HeroArea />
      <Products />
      <CategoryArea />
      <Subscribe />
      <TrendingLandmark />
      <Testimonial />
      <BannerArea />
      <Footer />
      <script
        src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
        defer
      ></script>
      <div className="commonninja_component pid-56044040-77b5-451a-87b1-9c4bc5ec97cb"></div>
    </>
  );
}
