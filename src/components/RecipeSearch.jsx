import { useState, useEffect } from 'react';
import { TextInput } from './ui/TextInput';
import { RecipeChoice } from './RecipeChoice';
import { recipes } from '../utils/data';
import { Box } from '@chakra-ui/react';

export const RecipeSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('');
    const [matchedRecipes, setMatchedRecipes] = useState(recipes);

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    useEffect(() => {
        setMatchedRecipes(recipes.filter((recipe) => {
            return recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
                recipe.healthLabels.some(label => label.toLowerCase().includes(searchField.toLowerCase()));
        }));
    }, [searchField]);

    return (
        <>
            <TextInput 
                changeFn={handleChange} 
                w={200} 
                mb={8} 
                placeholder="Search here" 
                border="2px solid" 
                borderRadius="md" 
                p={2}
                color="black"
                bg="white.500"
                mt={4}
                _hover={{ bg: "blue.100" }}
            />
            <RecipeChoice clickFn={clickFn} recipes={matchedRecipes} />
        </>
    );
};