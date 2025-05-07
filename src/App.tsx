import BannerCta from "./components/BannerCta";
import FAQ from "./components/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import FooterBanner from "./components/ui/FooterBanner";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto ">
        <Header />
      </div>

      <Hero />
      <div className="xl:px-22 px-6 max-w-[1440px] mx-auto">
        <Features />
        <BannerCta />
        <Testimonials />
        <FAQ />
        <FooterBanner />
      </div>

      <Footer />
    </>
  );
}

export default App;
