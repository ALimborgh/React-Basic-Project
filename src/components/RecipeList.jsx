import { Flex } from '@chakra-ui/react';
import { RecipeItem } from './RecipeItem';


export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <Flex gap={16} w="50%" flexWrap="wrap" justify={'center'}>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} clickFn={clickFn} />
      ))}
    </Flex>
  );
};