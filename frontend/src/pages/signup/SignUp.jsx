import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-green-500"> QuickChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <label className="label p-2">
            <span className="text-base label-text text-white">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered  h-10"
          />
          <div>
            <div>
              <label className="lable">
                <span className="text-base label-text text-white">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="lable">
                <span className="text-base label-text text-white">
                  {" "}
                  Confrim Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <GenderCheckbox />

            <a
              href="#"
              className="text-md hover:underline hover:text-green-950 mt-2 inline-block text-white"
            >
              Already have an account?
            </a>

            <div>
              <button className="btn btn-block btn-sm mt-2">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
