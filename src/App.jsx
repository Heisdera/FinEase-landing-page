import CustomersReview from "./components/CustomersReview";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GettingStarted from "./components/GettingStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <Hero />

      <Features />

      <Specials />

      <GettingStarted />

      <CustomersReview />

      <FAQs />

      <Footer />
    </div>
  );
}

export default App;
