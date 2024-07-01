
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosPublic from '../../../component/hooks/useAxiosPublic';







const Shop = () => {
    const axiosPublic = useAxiosPublic();

    const [services, setServices] = useState();
    console.log(services);
    const useQuery = () => new URLSearchParams(useLocation().search);



    let query = useQuery();
    const search = query.get('search')
    console.log(search);

    useEffect(() => {
        axiosPublic(`/search?search=${search}`)
            .then(res => setServices(res.data))

    }, [search, axiosPublic])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3 mx-auto justify-items-center'>
            {
                services?.map((item) => <div key={item._id}>
                    <div className="card w-96 h-[400px shadow-xl rounded-none border border-solid border-purple-600">
                        <figure><img className='h-[300px] w-[390px] text-black' src={item.collegeImage} alt="Shoes" /></figure>
                        <div className="card-body">
                         <p className='text-black text-xl'><span className='text-2xl font-semibold'>College Name</span> : {item.collegeName}</p>
                         <p className='text-xl text-white'></p>

                            <div className="card-actions justify-end">
                               
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Shop;