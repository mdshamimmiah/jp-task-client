import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../component/hooks/useAxiosPublic';

const Admission = () => {
  const axiosPublic = useAxiosPublic(); 
  const [selectedCollege, setSelectedCollege] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    image: null,
  });

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    data.append('college', selectedCollege);

    try {
      const response = await axiosPublic.post('/admission', data);
      console.log(response.data);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Application submitted successfully',
        showConfirmButton: false,
        timer: 1500
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        subject: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        image: null,
      });
      setSelectedCollege('');
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to submit application',
        

        showConfirmButton: false, 
        timer: 1500
      });
    }
  };

  return (
    <div>
      <div className="flex gap-5 font-semibold mx-auto p-10 justify-center justify-items-center bg-slate-300 text-center">
        {['Mawlana Vasani College', 'Dhaka Ideal College', 'Shahin College', 'Sristy College'].map((college, index) => (
          <h1
            key={index}
            className="bg-purple-500 p-6 cursor-pointer w-[300px]"
            onClick={() => handleCollegeClick(college)}
          >
            {college}
          </h1>
        ))}
      </div>
      {selectedCollege && (
        <div className="p-10">
          <h2>Applying for {selectedCollege}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label>Candidate Name:</label>
              <input type="text" name="name" className="border p-2" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Subject:</label>
              <input type="text" name="subject" className="border p-2" value={formData.subject} onChange={handleChange} required />
            </div>
            <div>
              <label>Candidate Email:</label>
              <input type="email" name="email" className="border p-2" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Candidate Phone number:</label>
              <input type="tel" name="phone" className="border p-2" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="address" className="border p-2" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input type="date" name="dob" className="border p-2" value={formData.dob} onChange={handleChange} required />
            </div>
            <div>
              <label>Image:</label>
              <input type="file" name="image" className="border p-2" onChange={handleChange} required />
            </div>
            <button type="submit" className="bg-purple-500 p-2 text-white">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admission;
