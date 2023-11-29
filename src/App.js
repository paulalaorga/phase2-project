import { Routes, Route } from 'react-router-dom';
import stove from './stove.png';
import './App.css';
import NavBar from './Components/NavBar';
import RecipeCollection from './Components/RecipeCollection';
import RecipeForm from './Components/RecipeForm';
import ShoppingListManager from './Components/ShoppingListManager';

function App({ recipes }) {
 
    
  return (
    <div className="App">
      <header id="menu-header">
        <img src={stove} className="App-logo" alt="menu" />
      </header>
      <NavBar />
       <Routes>
        <Route path="/RecipeForm" element={<RecipeForm />} />
        <Route path="/RecipeCollection" element={<RecipeCollection recipes={recipes} />} />
        <Route path="/ShoppingListManager" element={<ShoppingListManager />} /> 
      </Routes> 
    </div>
  );
}

export default App;
