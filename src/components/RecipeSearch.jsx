import { useState } from 'react';
import { TextInput } from './ui/TextInput';
import { RecipeList } from './RecipeList';
import { data } from '../data';

export const DrinkSearch = ({ clickFn }) => {
	const [searchField, setSearchField] = useState('');
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};
	const matchedRecipes = data.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchField.toLowerCase());
	});
	return (
		<>
			<label>Search for drinks:</label>
			<TextInput changeFn={handleChange} w={200} mb={8} />
			<RecipeList clickFn={clickFn} recipe={matchedRecipes} />
		</>
	);
};
