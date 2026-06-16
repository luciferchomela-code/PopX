import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center">
      <div className="w-[375px] min-h-screen bg-white relative">
        <footer className="absolute bottom-4 left-4 right-4">
          <h1 className="text-3xl font-bold mb-1">Welcome to PopX</h1>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet,
          </p>
          <p className="text-base text-gray-500 mb-4">
            consectetur adipisicing elit.
          </p>

          <button
            onClick={() => navigate("/create-account")}
            className="w-full py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 cursor-pointer"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/sign-in")}
            className="w-full py-2 mt-3 bg-purple-200 rounded-md text-purple-700 hover:bg-purple-700 hover:text-white cursor-pointer"
          >
            Already Registered? Login
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Index;