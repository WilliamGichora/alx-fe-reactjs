import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    console.log(recipe);
    

    return (
        
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {<EditRecipeForm recipe={recipe}/>}
            {<DeleteRecipeButton id={recipe.id}/>}
            
        </div>
    );
};

export default RecipeDetails;