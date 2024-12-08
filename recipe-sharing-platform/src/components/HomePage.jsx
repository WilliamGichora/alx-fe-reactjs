import { useEffect, useState } from "react";

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error("Error in fetching data:", error);
            }
        };

        fetchData();
    }, [data]);

    return (
        <div className="container flex flex-col h-screen justify-center items-center mx-auto">
            <h1 className="mx-auto md:font-bold font-sans md:text-3xl">Recipes</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 shadow-lg hover:shadow-xl md:gap-3">
                {data.map(recipe => (
                    <div key={recipe.id} className="flex flex-col justify-center items-center gap-4 bg-specialPink-100 rounded-xl">
                        <h2 className="sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">{recipe.title}</h2>
                        <p className="font-montserrat font-semibold ">{recipe.summary}</p>
                        <div className="mb-3" ><img src={recipe.image} alt={recipe.title} className="rounded-xl" /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
