import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(password)) {
      setError('Minimum six characters, at least one letter, one number and one special character');
      return;
    } else {
      setError('');
      // create user from fire base
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Register Successfully',
            showConfirmButton: false,
            timer: 2500
          });
          updateUserInfo({
            displayName: name,
            photoURL: photo
          });
          navigate(location?.state ? location?.state : '/');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          <div>
            <h1 className="text-5xl font-bold py-4 p-12">Register now!</h1>
            <div className="card shrink-0 w-[500px] max-w-sm shadow-2xl rounded-none">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="url" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className="text-center text-blue-600">
                Already have an account? Please <Link to="/login"><button className="btn btn-outline text-white bg-slate-700 mb-4">Login</button></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
