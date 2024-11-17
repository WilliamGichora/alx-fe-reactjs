import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            {filteredRecipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                filteredRecipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        style={{
                            borderBottom: '1px solid #ccc',
                            marginBottom: '10px',
                            paddingBottom: '10px',
                        }}
                    >
                        <h3>
                            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                                {recipe.title}
                            </Link>
                        </h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
