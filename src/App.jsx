import { Outlet } from "react-router-dom";
import Headers from "./Components/Headers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Headers></Headers>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
