import { recipesData } from "../utils/data";

export const RecipeChoice = () => {
    return (
        <div>
            <h2>Recipes to Choose From:</h2>
            <ul>
                {recipesData.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                ))}
            </ul>
        </div>
    );
};
