import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function RecipeDetail() {

    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch('/data.json');
                const responseData = await response.json();
                const specificRecipe = responseData.find(recipe => recipe.id === parseInt(id));
                console.log(specificRecipe);
                
                setData(specificRecipe);
            } catch (error) {
                console.error("Error in fetching data:", error);
            }
            
        }

        fetchRecipe();

    }, [id]);

    return (
        <div className="font-montserrat container flex justify-center items-center h-96 mx-auto my-36 bg-blue-100 shadow-2xl rounded-xl">
            <div key={data.id} className="flex flex-col gap-y-3 justify-center">
                <h1 className="text-center text-3xl font-bold">{data.title}</h1>
                <p className="font-medium">{data.summary}</p>
                <img src={data.image} alt={data.title} className="mx-auto rounded-xl" />
                <div className="text-center">
                    <h3>Ingredients</h3>
                    <ul>
                        <li>Masala</li>
                        <li>Carrot</li>
                        <li>1/2 chicken</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default RecipeDetail