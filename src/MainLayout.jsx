import { Outlet } from "react-router-dom"
import Navber from "./pages/home/navber/Navber"
import Footer from "./pages/home/footer/Footer";


const MainLayout = () => {
  return (
    <div>
        <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout;
