import { Outlet } from "react-router-dom";
import Headers from "./Components/Headers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
