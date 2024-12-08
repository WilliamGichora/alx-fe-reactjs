import { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

function HomePage() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const recipePage = (recipeId) => {
        navigate(`/recipe/${recipeId}`)
    }

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
        <div className="container flex flex-col justify-center items-center mx-auto">
            <h1 className="mx-auto md:font-bold font-bold text-2xl font-sans md:text-3xl">Recipes</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg hover:shadow-xl md:gap-3">
                {data.map(recipe => (
                    <div key={recipe.id} className="flex flex-col justify-center items-center gap-4 bg-specialPink-100 rounded-xl" onClick={() => recipePage(recipe.id)}>
                        <h2 className="sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">{recipe.title}</h2>
                        <p className="font-montserrat font-semibold ">{recipe.summary}</p>
                        <div className="mb-3" ><img src={recipe.image} alt={recipe.title} className="rounded-xl" /></div>
                        <Link to={`/recipe/${recipe.id}`} className="text-green-700">See Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
