import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign_in = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setError("");
        const derivedName = email.split('@')[0];
        navigate("/home", { state: { name: derivedName, email } });
    };

    return (
        <div className="min-h-screen bg-gray-300 flex justify-center">
            <div className="w-[375px] min-h-screen bg-white relative px-4">
                <div className="mt-8">
                    <h1 className="text-3xl font-semibold mb-1">Sign in</h1>
                    <h1 className="text-3xl font-semibold mb-5">to your account</h1>

                    <p className="text-base text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p className="text-base text-gray-500 mb-8">
                        adipisicing elit,
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="relative border rounded p-3">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600">
                                Email Address <span className="text-red-500">*</span>
                            </span>

                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="w-full outline-none"
                                required
                            />
                        </div>

                        <div className="relative border rounded p-3">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600">
                                Password <span className="text-red-500">*</span>
                            </span>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full outline-none"
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="bg-purple-600 text-white p-3 rounded font-medium mt-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_in;