import { useState } from 'react';
import { TextInput } from './UI/Text';
import { RecipeList } from './RecipeList';
import { recipes } from '../utils/data';



export const RecipeSearch = ({ clickFn }) => {
	const [searchField, setSearchField] = useState('');
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};
	const matchedDrinks = recipes.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
	});
	return (
		<>
			<label>Search for drinks:</label>
			<TextInput changeFn={handleChange} w={200} mb={8} />
			<RecipeList clickFn={clickFn} drinks={matchedDrinks} />
		</>
	);
};