import { RecipeListPage } from './pages/RecipeListPage';
import { Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { RecipeSearch } from './components/RecipeSearch';
import { RecipeChoice } from './components/RecipeChoice';

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = 'Welcome to our recipe book!';
  return (
    <Center>
      <Heading>{greeting}</Heading>
      <RecipeSearch clickFn={setUserRecipe} />
      <RecipeChoice recipe={userRecipe} />
      <RecipeListPage />;
    </Center>
  );
}; 