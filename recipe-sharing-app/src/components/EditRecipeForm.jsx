import useRecipeStore from "./recipeStore";
import { useState } from "react";

const EditRecipeForm = ({recipe}) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [newtitle, updateTitle] = useState(recipe.title);
    const [newdescription, updateDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({id:recipe.id ,newtitle,newdescription});
        updateTitle('');
        updateDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit </h3>
            <input
                type="text"
                value={newtitle}
                onChange={(e) => updateTitle(e.target.value)}
                placeholder="Edit Title Here" />

            <input
                type="text"
                value={newdescription}
                onChange={(e) => updateDescription(e.target.value)}
                placeholder="Edit Description Here" />
            
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditRecipeForm;