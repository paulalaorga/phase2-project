import menu from './menu.png';
import './App.css';
import NewRecipe from './Components/NewRecipe';
import RecipeCollection from './Components/RecipeCollection';

function App() {
  return (
    <div className="App">
      <header id="menu-header">
        <img src={menu} className="App-logo" alt="menu" />
       
      </header>
      <NewRecipe />
      <RecipeCollection />
    </div>
  );
}

export default App;
