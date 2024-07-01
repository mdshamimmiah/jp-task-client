import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import useAxiosPublic from "../../component/hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import About from "./about/About";
import BannerT from "./banner2/BannerT";


const Home = () => {
  const [search,setSearch] = useState('');
  const [services, setServices] = useState();
  console.log(services);
  const axiosPublic = useAxiosPublic()
  const handleSearch = e => {
    setSearch(e.target.value)
   
   
  
 }
 useEffect(()=> {
     axiosPublic(`/search?search=${search}`)
     .then(res => setServices(res.data))
    
 
 },[])
 
  return (
    <div>
    
     <div className="gap-4">
     <input onChange={handleSearch} className=" w-[400px] p-2 px-3 mb-4 border border-slate-400" type="text" name="search"placeholder="Search" />
         <Link to={`/shop?search=${search}`}>
         <button className="ml-3 text-white bg-slate-400  text-2xl font-bold btn btn-outline">Search</button>
         </Link>
     </div>
     
      <Banner></Banner>
      <About></About>
     <BannerT></BannerT>
    </div>
  )
}

export default Home;
