import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-gray-100">
      <div className="text-center flex flex-col gap-4">
        <h3 className="text-5xl font-bold">404 </h3>
        <p className="text-3xl text-gray-400">Page Not Found</p>
        <Link
          to="/"
          className="text-2xl text-blue-400 underline hover:text-blue-700 transition-all"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
