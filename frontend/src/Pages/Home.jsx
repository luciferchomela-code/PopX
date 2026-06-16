import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const { name, email } = location.state || { name: "Luciferchomela", email: "luciferchomela@gmail.com" };

    return (
        <div className="min-h-screen bg-gray-300 flex justify-center">
            <div className="w-[375px] min-h-screen bg-white">
                <div className="flex items-center gap-4 p-4 border-b">
                    <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
                        {name ? name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">
                            {name}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {email}
                        </p>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-gray-700 text-sm leading-6">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                        Dolore Magna Aliquyam Erat, Sed Diam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;