import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}
    >
      <div className="w-full max-w-xs bg-slate-100 px-7 py-9 rounded">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2  text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, please enter your data...</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm  mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm  mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
