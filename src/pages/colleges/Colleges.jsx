import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import useAxiosPublic from "../../component/hooks/useAxiosPublic";

const Colleges = () => {
  const axiosPublic= useAxiosPublic()
  const [college, setCollege] = useState([]);
  console.log(college)

  useEffect(() => {
    axiosPublic.get('/college')
        .then(res => setCollege(res.data))

}, [axiosPublic]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {college?.map(item => (
          <CollegeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Colleges;
