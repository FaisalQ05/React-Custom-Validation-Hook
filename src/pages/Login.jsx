import { Link } from "react-router-dom"
import useForm from "../hooks/useForm"
import validate from "../utils/validate"
import { Collapse } from "react-collapse"

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(() => {
    // console.log("Login callback called")
  }, validate)

  return (
    <div className="md:bg-[#ffffff] bg-gray-200 h-screen">
      <div className="flex justify-center items-center h-screen max-w-md mx-auto">
        <div className="p-4 md:p-9 md:px-12 flex flex-col gap-6 w-full bg-[#9c93932d] rounded-lg shadow-xl">
          <h1 className="text-center md:text-5xl text-4xl font-bold text-[#143047]">
            XYZ
          </h1>
          <form
            className="flex flex-col gap-5 text-sm md:text-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
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
                placeholder="Enter Password"
                name="password"
                value={values.password || ""}
                onChange={handleChange}
                className="px-4 p-2 rounded-lg focus:outline-none w-full"
              />
              <Collapse isOpened={errors.password}>
                <p className="text-red-500 font-semibold text-sm pt-2 pl-2">
                  {errors.password}
                </p>
              </Collapse>
            </div>
            <button className="rounded-lg bg-[#143047] text-white p-3 hover:bg-sky-800">
              Login
            </button>
          </form>
          <div className="text-end md:text-lg mt-[-0.5em] pr-1">
            <p className="font-bold text-[#1a4060]">
              <Link to={"/register"}>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
