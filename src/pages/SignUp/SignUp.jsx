import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";

const SignUp = () => {
    const {createAccount, userProfile} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [fieldError, setFieldError] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    const {email, password, name, photo} = data;
    console.log(email, password);
    createAccount(email, password).then((userCredentials)=> {
        userProfile({
            displayName: name,
            photoURL: photo
        }).then(()=> {
            console.log("profile updated");
        }).catch(()=> {
            setFieldError("An error occurred on the 'users profile'");
        })
        console.log(userCredentials.user);
    }).catch(err => {
        setFieldError(err.message);
    })
  }
  return (
    <>
      <section className="mt-12">
        <div className="max-w-[640px] mx-auto bg-yellow-100">
        <h3 className="text-2xl text-center pt-8">Sign Up for Our Task Management App</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register("name", { required: true, maxLength: 20 })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
              {...register("photo", {required: true})}
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email", {required: true})}
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              {...register("password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/})}
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              {/* Password error alert */}
              {errors.password && (
                <div role="alert" className="alert alert-error mt-3">
                <FaXmark />
                <span>Password must be more strong!</span>
              </div>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="bg-purple-500 py-2 text-white hover:bg-purple-700 transition-all">Sign Up</button>
            </div>
          </form>
          {/* Auth Error Showing Area */}
          {fieldError && (
            <div role="alert" className="alert alert-error mb-3 w-3/4 mx-auto">
            <FaXmark />
            <span>{fieldError}</span>
          </div>
          )}
          {/* Navigate to Login */}
          <div className="px-8 pb-8 flex gap-3 justify-center">
            <p>Already Have An Account?</p>
            <Link className="text-purple-600 hover:text-gray-800" to={'/login'}>Login here</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
