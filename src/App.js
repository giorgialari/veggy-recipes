import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipesLists from './components/RecipesLists';
import RecipeDetails from './components/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTemplate from "./components/MainTemplate";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainTemplate>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<RecipesLists />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
          </BrowserRouter>
        </MainTemplate>
      </header>
    </div>
  );
}

export default App;
