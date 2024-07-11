import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import AddTouristSpots from "./Components/AddTouristSpots.jsx";
import AllSpots from "./Components/AllSpots.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import MyList from "./Components/MyList.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addspot",
        element: <AddTouristSpots></AddTouristSpots>,
      },
      {
        path: "/allspots",
        element: <AllSpots></AllSpots>,
        loader: () => fetch("http://localhost:5000/touristspots"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);