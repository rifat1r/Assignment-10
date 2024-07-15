import Activities from "./Activities";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Slides from "./Slides";
import TouristSpots from "./TouristSpots";

const Home = () => {
  return (
    <div>
      <Slides></Slides>
      <TouristSpots></TouristSpots>
      <Activities></Activities>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
