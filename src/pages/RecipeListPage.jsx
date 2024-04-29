import { Center, Heading } from '@chakra-ui/react';
import { RecipeSearch } from '../components/RecipeSearch';

export const RecipeListPage = () => {
  const greeting = 'Welcome to our recipe book!';

  return (
    <Center display='-ms-flexbox' align='center'>
      <Heading>{greeting}</Heading>
      <RecipeSearch/>
    </Center>
  );
}
