import { Link } from "react-router-dom"
import check from "../assets/images/Check.png"
import { Collapse } from "react-collapse"
import useForm from "../hooks/useForm"
import validate from "../utils/validate"

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    () => {
      // console.log("Login callback called")
    },
    validate,
    true
  )

  return (
    <div className="md:bg-[#ffffff] bg-gray-200 h-screen">
      <div className="flex justify-center items-center h-full max-w-md mx-auto">
        <div className="p-4 md:p-9 md:px-12 flex flex-col gap-6 w-full bg-[#9c93932d] rounded-lg shadow-xl">
          <h1 className="text-center md:text-5xl text-4xl font-bold text-[#143047]">
            XYZ
          </h1>
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-5 text-sm md:text-lg`}
          >
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className={`px-4 p-2 rounded-lg focus:outline-none w-full`}
                />
              </div>
              {/* <p className={`text-red-500 font-semibold text-sm mt-2`}>
                {!errState.name.validate && errState.name.message}
              </p> */}
              <Collapse isOpened={errors.name}>
                <p className={`text-red-500 font-semibold text-sm pt-2 pl-2`}>
                  {errors.name}
                </p>
              </Collapse>
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="Enter email"
                className="px-4 p-2 rounded-lg focus:outline-none w-full"
              />
              <Collapse isOpened={errors.email}>
                <p className="text-red-500 font-semibold text-sm pt-2 pl-2">
                  {errors.email}
                </p>
              </Collapse>
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={values.password || ""}
                onChange={handleChange}
                placeholder="Enter Password"
                className="px-4 p-2 rounded-lg focus:outline-none w-full"
              />
              <Collapse isOpened={errors.password}>
                <p className="text-red-500 font-semibold text-sm pt-2 pl-2">
                  {errors.password}
                </p>
              </Collapse>
            </div>
            <div>
              <div className="relative transition-all duration-100">
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword || ""}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="px-4 p-2 rounded-lg focus:outline-none w-full"
                />
                <img
                  src={check}
                  className={`w-[1.1em] absolute top-[50%] right-3 translate-y-[-50%] ${
                    !(
                      values?.confirmPassword?.length > 0 &&
                      values.confirmPassword === values.password &&
                      values.confirmPassword.length > 4
                    ) && "hidden"
                  }`}
                />
              </div>
              <Collapse isOpened={errors.confirmPassword}>
                <p className="text-red-500 font-semibold text-sm pt-2 pl-2">
                  {errors.confirmPassword}
                </p>
              </Collapse>
            </div>
            <button className="rounded-lg bg-[#143047] text-white p-3 hover:bg-sky-800">
              Register
            </button>
            <div className="text-center md:text-lg">
              <p className="font-semibold">
                Already Have an account ?{" "}
                <span className="text-[#1a4060] font-bold">
                  <Link to={"/login"}>Login here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
