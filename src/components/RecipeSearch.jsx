import { useState } from 'react';
import { TextInput } from './ui/TextInput';
import { RecipeChoice } from './RecipeChoice';
import { recipes } from '../utils/data';



export const RecipeSearch = ({ clickFn }) => {
	const [searchField, setSearchField] = useState('');
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};
    const matchedRecipes = recipes.filter((recipe) => {
        return recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
            recipe.healthLabels.some(label => label.toLowerCase().includes(searchField.toLowerCase()));
    });
	return (
		<>
			<label>Search for recipe:</label>
			<TextInput changeFn={handleChange} w={200} mb={8} />
			<RecipeChoice clickFn={clickFn} recipes={matchedRecipes} />
		</>
	);
};