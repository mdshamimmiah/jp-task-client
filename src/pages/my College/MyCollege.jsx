import { useEffect, useState } from "react";
import useAxiosPublic from "../../component/hooks/useAxiosPublic";
import MyCollegeItem from "./MyCollegeItem";

const MyCollege = () => {
  const axiosPublic = useAxiosPublic();
  const [admission, setAdmission] = useState([]);

  useEffect(() => {
    axiosPublic.get('/admission')
      .then(res => {
        setAdmission(res.data);
        console.log(res.data); // Logging the data received from the server
      })
      .catch(error => {
        console.error('Error fetching admission data:', error);
      });
  }, [axiosPublic]); // Only re-run the effect if axiosPublic changes

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
    

    {
      admission?.map(item=> <MyCollegeItem key={item._id} item={item}></MyCollegeItem>)
    }
    
    </div>
  );
}

export default MyCollege;
