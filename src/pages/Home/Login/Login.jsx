import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [fieldError, setFieldError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    logIn(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setFieldError("");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        console.log(err.message);
        setFieldError(err.message);
      });
  };

  return (
    <>
      <section className="mt-12">
        <div className="mx-auto w-[640px] bg-yellow-100">
          <h3 className="text-2xl text-center pt-8">Unlock Your Potential</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {/* Login Error Area */}
            {fieldError && (
              <div
                role="alert"
                className="alert alert-error my-2 w-3/4 mx-auto"
              >
                <FaXmark />
                <span>{fieldError}</span>
              </div>
            )}
            <div className="form-control mt-6">
              <button className="bg-purple-500 py-2 text-white hover:bg-purple-700 transition-all">
                Login
              </button>
            </div>
          </form>
          {/* Navigate to Sign Up */}
          <div className="px-8 pb-8 flex gap-2 justify-center">
            <p>Don&apos;t Have An Account?</p>
            <Link className="text-purple-600" to={"/sign-up"}>
              Sign Up Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
