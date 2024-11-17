import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  
  const RecipeDetailsWrapper = () => {
    const { id } = useParams();
    return <RecipeDetails recipeId={Number(id)} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
