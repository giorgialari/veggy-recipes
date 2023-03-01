import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAPIRecipes } from '../service/api';
import { getAllRecipesStore } from '../store/recipesSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const RecipeLists = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesStore.currentRecipes);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllAPIRecipes(searchTerm).then((data) => dispatch(getAllRecipesStore(data.results)));
  }, [dispatch, searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    getAllAPIRecipes(searchTerm).then((data) => dispatch(getAllRecipesStore(data.results)));
  };

  if (!recipes) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <div className='recipeslist-container'>
      <div className='input-search-container'>
        {/* <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button onClick={handleSearch}>Cerca</button> */}
        <div>
        <InputGroup className="mb-3" type="text" value={searchTerm} onChange={handleInputChange}>
          <Button variant="outline-secondary" className='no-click' onClick={handleSearch} id="button-addon2">
            Search
          </Button>
          <Form.Control
            placeholder="Search recipe..."
            aria-label="Search recipe..."
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        </div>
      </div>
      <div className='recipe-container'>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Link to={`/recipe/${recipe.id}`} target="_blank">
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeLists;
