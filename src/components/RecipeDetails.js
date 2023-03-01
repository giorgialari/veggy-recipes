import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllAPIRecipeById } from '../service/api';
import { setRecipeDetails } from '../store/recipesSlice';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const RecipeDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    // const recipe = useSelector((state) =>
    //     state.recipesStore.currentRecipes.find((recipe) => recipe.id === Number(id))
    // );

    const recipeDetails = useSelector(
        (state) => state.recipesStore.currentRecipeDetails
    );

    useEffect(() => {
        const getRecipeDetails = async () => {
            const data = await getAllAPIRecipeById(id);
            dispatch(setRecipeDetails(data));
        };

        // chiamata iniziale all'API per popolare recipeDetails
        if (!recipeDetails) {
            getRecipeDetails();
        }
    }, [id, recipeDetails, dispatch]);

    if (!recipeDetails) {
        return <div>Loading...</div>;
    }
    return (
        <div className='recipeDetail-container'>
            <h2>{recipeDetails.title}</h2>
            <div className='image-instructions-container'>
                <div>
                    <img src={recipeDetails.image} alt={recipeDetails.title} />
                </div>
                <div>
                    <h2>Information</h2>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr>
                                <th scope="col">Preparation time</th>
                                <td>{recipeDetails.readyInMinutes}'</td>
                            </tr>
                            <tr>
                                <th scope="col">Servings</th>
                                <td>{recipeDetails.servings}</td>
                            </tr>
                            <tr>
                                <th scope="col">Vegetarian</th>
                                <td>{recipeDetails.vegetarian ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th scope="col">Vegan</th>
                                <td>{recipeDetails.vegan ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th scope="col">Gluten Free</th>
                                <td>{recipeDetails.glutenFree ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th scope="col">Healthy</th>
                                <td>{recipeDetails.veryHealthy ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th scope="col">Cheap</th>
                                <td>{recipeDetails.cheap ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th scope="col">Sustainable</th>
                                <td>{recipeDetails.sustainable ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th scope="col">Low FODMAP</th>
                                <td>{recipeDetails.lowFodmap ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div>
                <h4>How to prepare it?</h4>
                <div className='instructions' dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></div>
                <Link to="/">
                    <Button variant="outline-primary mt-3">Go Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeDetails;
