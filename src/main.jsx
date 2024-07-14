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
import UpdateSpot from "./Components/UpdateSpot.jsx";
import SpotDetails from "./Components/SpotDetails.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addspot",
        element: (
          <PrivateRoute>
            <AddTouristSpots></AddTouristSpots>
          </PrivateRoute>
        ),
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
      {
        path: "/touristspots/id/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristspots/id/${params.id}`),
      },
      {
        path: "/spotDetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristspots/id/${params.id}`),
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
