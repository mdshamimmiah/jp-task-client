

const MyCollegeItem = ({item}) => {
    // console.log(item)
  return (
    <div className="">
     <div className="card  w-96 rounded-none border border-black bg-slate-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name:{item.name}</h2>
    <p>College name : {item.college}</p>
    <p>Subject name : {item.subject}</p>
    <p>Email : {item.email}</p>
    <p>Birth of dath : {item.dob}</p>
    <p>Mobile number : {item.phone}</p>
   
  </div>
</div> 
    </div>
  )
}

export default MyCollegeItem
