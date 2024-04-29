import {recipes} from '../utils/data';
import { useParams } from 'react-router-dom';

export const RecipePage = () => {
    const { id } = useParams();
    const recipeData = recipes.find(recipe => recipe.id === id);
    console.log(recipeData);
    console.log(id);
    if (!recipeData) {
        return <h1>Recipe not found!</h1>;
    }
    const recipe = {
        title: recipeData.label,
        ingredients: recipeData.ingredients.map((ingredient) => ingredient.text),
        imageUrl: recipeData.image,
        mealType: recipeData.mealType,
        dietLabels: recipeData.dietLabels,
        dishType: recipeData.dishType,
        cautions: recipeData.cautions,
        servings: recipeData.servings,
        calories: recipeData.calories,
        totalTime: recipeData.totalTime,
        healthLabels: recipeData.healthLabels,

    };

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h2>Ingredients:</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};