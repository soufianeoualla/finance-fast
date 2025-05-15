import { useState } from "react";
import BannerCta from "./components/BannerCta";
import FAQ from "./components/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileSidebar from "./components/MobileSidebar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [isVisible, setIsVisibke] = useState(false);

  return (
    <>
      <div className="max-w-[1440px] mx-auto ">
        <Header showSidebar={() => setIsVisibke(true)} />
      </div>
      {isVisible && <MobileSidebar hideSidebar={() => setIsVisibke(false)} />}

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
