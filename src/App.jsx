import { Outlet } from "react-router-dom";
import Headers from "./Components/Headers";

const App = () => {
  return (
    <div>
      <Headers></Headers>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
