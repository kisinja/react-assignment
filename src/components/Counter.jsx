import { Link } from "react-router-dom";
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const addCounter = () => {
        setCount(count + 1);
    }

    const minusCounter = () => {
        setCount(count - 1);
        count === 0 ? setCount(0) : count;
    }

    return (
        <section className="bg-gray-200 py-8">
            <div className="w-[400px] mx-auto mt-8 bg-white py-2 px-5 rounded-xl flex flex-col gap-5">
                <h1 className="text-center text-3xl">Counter</h1>
                <div className="bg-red-500 text-white w-fit py-2 px-6 mx-auto">
                    <h1 className="text-center font-semibold text-xl">{count}</h1>
                </div>
            </div>

            <div className="text-center flex flex-col gap-2">
                <div className="flex gap-5 mx-auto">
                    <Link to="/counter">
                        <button className="bg-blue-500 text-white py-2 px-4 mt-5 focus:bg-white focus:ring-2 focus:text-black rounded-full text-xl font-bold" onClick={addCounter}>+</button>
                    </Link>
                    <Link to="/counter">
                        <button className="bg-blue-500 text-white py-2 px-4 mt-5 focus:bg-white focus:ring-2 focus:text-black rounded-full text-xl font-bold" onClick={minusCounter}>-</button>
                    </Link>
                </div>
                <Link to="/">
                    <button className="bg-white text-black py-2 px-4 mt-5 focus:bg-white focus:ring-2 focus:text-black"> {"<--"} Back</button>
                </Link>
            </div>

        </section>
    )
}

export default Counter
