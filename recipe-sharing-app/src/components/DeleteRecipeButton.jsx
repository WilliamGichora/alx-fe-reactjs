import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({id}) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

    const handleClick = () => {
        deleteRecipe(id);
        navigate('/');
    }
    return (
        <button onClick={handleClick}>Delete Recipe</button>
    );
}

export default DeleteRecipeButton;