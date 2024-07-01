import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result?.user);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'login Successfully',
          showConfirmButton: false,
          timer: 2500
        });
     
        navigate(location?.state?.from || "/");
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate(location?.state?.from || "/");
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold py-4 p-12">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='text-center text-blue-600 flex mx-auto'>New to website? Please <Link to='/register'><p className='text-white bg-slate-700 ml-3 mb-4'>Register</p></Link></p>
            <button onClick={handleGoogleSign} className="btn btn-sm bg-black text-white p-0 m-4 w-[100px] mx-auto"> Google </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
