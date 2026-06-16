import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (!phoneRegex.test(phone)) {
            setError("Phone number must contain exactly 10 digits");
            return;
        }

        setError("");
        navigate("/home", { state: { name, email } });
    };

    return (
        <div className="min-h-screen bg-gray-300 flex justify-center">
            <div className="w-[375px] min-h-screen bg-white relative">
                <header>
                    <h1 className="text-3xl mt-4 mb-4 ml-4 font-semibold">
                        Create your <br />
                        PopX account
                    </h1>
                </header>

                <section>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
                        <div className="relative border rounded p-3 mt-4">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-xs text-purple-600">
                                Full Name <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full outline-none"
                                required
                            />
                        </div>

                        <div className="relative border rounded p-3">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-xs text-purple-600">
                                Phone Number <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className="w-full outline-none"
                                required
                            />
                        </div>

                        <div className="relative border rounded p-3">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-xs text-purple-600">
                                Email Address <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full outline-none"
                                required
                            />
                        </div>

                        <div className="relative border rounded p-3">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-xs text-purple-600">
                                Password <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full outline-none"
                                required
                            />
                        </div>

                        <div className="relative border rounded p-3">
                            <span className="absolute -top-3 left-3 bg-white px-1 text-xs text-purple-600">
                                Company Name
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your company name"
                                className="w-full outline-none"
                            />
                        </div>

                        <div className="mt-2">
                            <p className="text-gray-700 mb-2">
                                Are you an Agency? <span className="text-red-500">*</span>
                            </p>

                            <div className="flex gap-6">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="yes"
                                        required
                                    />
                                    Yes
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="no"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="bg-purple-600 text-white p-3 rounded font-medium mt-4"
                        >
                            Create Account
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CreateAccount;