import { useLoaderData } from "react-router-dom";


const Details = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={data.collegeImage}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">CollegeName : {data.collegeName}</h2>
    <p><span className="text-black font-bold">Event</span> : The college's annual cultural fest is one of the most anticipated events of the academic year, bringing together students, faculty, and the community to celebrate talent and creativity. This year, the event promises to be even more exciting with a diverse array of activities and performances lined </p>
    <p><span className="text-black font-bold">Sports</span>  : Sports day not only promotes physical fitness but also instills values like teamwork, discipline, and resilience among participants. It serves as a platform for students to showcase their sporting prowess, build confidence, and forge lifelong friendships. The event fosters a sense of unity and pride within the college community, bringing together students from diverse backgrounds in the spirit of healthy rivalry and mutual respect.</p>
  </div>
</div>
    </div>
  );
};

export default Details;