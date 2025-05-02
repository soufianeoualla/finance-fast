import Features from "./components/Features/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto ">
        <Header />
      </div>

      <Hero />
      <Features />
    </>
  );
}

export default App;
