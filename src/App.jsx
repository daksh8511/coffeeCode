import Hero from "./Components/Hero/Hero";
import Service from "./Components/Service/Service";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import AppBanner from "./Components/AppBanner/AppBanner";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden relative">
      <Hero />
      <Service />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
};

export default App;
