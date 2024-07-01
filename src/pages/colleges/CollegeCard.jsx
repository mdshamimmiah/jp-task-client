
import { Link } from "react-router-dom";

const CollegeCard = ({ item }) => {
  const { _id } = item;
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={item.collegeImage} alt={item.collegeName} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{item.collegeName}</h2>
      <p className="text-gray-700">Rating: {item.collegeRating}</p>
      <p className="text-gray-700">Admission Date: {item.admissionDate}</p>
      <p className="text-gray-700">Number of Research: {item.numberOfResearch}</p>
      <div>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-primary text-center mx-auto">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default CollegeCard;
