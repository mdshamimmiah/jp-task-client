import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/home/Login/Login";
import Colleges from "../pages/colleges/Colleges";
import Register from "../pages/register/Register";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/my College/MyCollege";
import Details from "../pages/colleges/details/Details";
import Shop from "../pages/home/shop/Shop";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "asi",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path:'/shop',
        element:<Shop></Shop>
       },
      {
        path: "/myCollege",
        element: <MyCollege />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
    ],
  },
]);

export default Routes;
