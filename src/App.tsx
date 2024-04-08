import './Styling/App.css';
import './Styling/Dishes.css';
import HomePage from './pages/HomePage';
import WeeklyTips from './pages/WeeklyTips';
import HandleRequests from './components/AddRecipe/HandleRequest';
import Categories from './pages/Categories';
import About from './pages/About';
import DetailedTestComponent from './components/Test/TestDetail';
import Test from './components/Test/TestPage';
import CocktailCategory from './NOT in use/CocktailCategory';
import DetailedCocktailComponent from './components/Cocktails/DetailedCocktail';
import RecipeDetails from './Views/Recipe/Recipe';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeHome from './components/HomeRecipes/RecipeFront';
import RecipeCategory from './components/HomeRecipes/ChoiceCategory';
import DrinkCategory from './components/Cocktails/CocktailsFront';


function App() {


 return (
  <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<HandleRequests />} />
        <Route path='/recipe' element={<RecipeHome />} />
        <Route path='/recipe/category/:category' element={<RecipeCategory />} />
        <Route path='/recipe/specificRecipe/:id' element={<RecipeDetails />} />
        <Route path='/cocktails' element={<DrinkCategory />} />
        <Route path='/cocktails/:id' element={<DetailedCocktailComponent />} />
        <Route path='/cocktail:category' element={<CocktailCategory />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test/:id' element={<DetailedTestComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/weeklytips' element={<WeeklyTips />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;