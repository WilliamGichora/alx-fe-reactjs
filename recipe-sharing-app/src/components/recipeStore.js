import { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => {
        set(state => ({ recipes: [...state.recipes, newRecipe] }))
    },
    deleteRecipe: (recipeID) => {
        set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeID) }))
    },
    updateRecipe: (updatedrecipe) => {
        set(state => ({
            recipes: state.recipes.map((stateRecipe) =>
               stateRecipe.id===updatedrecipe.id? updatedrecipe:stateRecipe
           )
        }))
    },
    setRecipes: (recipes) => set({ recipes }),

}));

export default useRecipeStore;