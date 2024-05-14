import { Link } from "react-router-dom";

const Time = () => {

    const time = new Date().toLocaleTimeString();

    return (
        <section className="bg-gray-200 py-8">
            <div className="w-[400px] mx-auto mt-8 bg-white py-2 px-5 rounded-xl flex flex-col gap-5">
                <h1 className="text-center text-3xl">Current Time</h1>
                <div className="bg-red-500 text-white rounded-xl">
                    <h1 className="text-center font-semibold text-xl">{time}</h1>
                </div>
            </div>

            <div className="text-center">
                <Link to="/counter">
                    <button className="bg-blue-500 text-white py-2 px-4 mt-5 focus:bg-white focus:ring-2 focus:text-black">Go to Counter</button>
                </Link>
            </div>

        </section>
    )
}

export default Time