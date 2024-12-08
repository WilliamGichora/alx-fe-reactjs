import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();validate

        let validate = {};
        if (!title) validate.title = "Title is required";
        if (!ingredients) validate.ingredients = "Ingredients are required";
        else if (ingredients.split(',').length < 2) validate.ingredients = "Please list at least two ingredients";
        if (!steps) validate.steps = "Preparation steps are required";

        if (Object.keys(validate).length > 0) {
            setErrors(validate);
            return;
        }

        console.log({ title, ingredients, steps });

        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded my-28 font-montserrat">
            <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (comma-separated)</label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
                <textarea
                    id="steps"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
            </div>

            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
                Add Recipe
            </button>
        </form>
    );
}

export default AddRecipeForm;
