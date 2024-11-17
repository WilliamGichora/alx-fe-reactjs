import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavouritesList";
import RecommendationsList from "./components/ReccomendationsList";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {

  const RecipeDetailsWrapper = () => {
    const { id } = useParams();
    return <RecipeDetails recipeId={Number(id)} />;
  };

  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
