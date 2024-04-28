import { Center, Heading } from '@chakra-ui/react';
import { RecipeChoice } from '../components/RecipeChoice';

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  const greeting = 'Welcome to our recipe book!';

  return (
    <Center display='-ms-flexbox' align='center'>
      <Heading>{greeting}</Heading>
      <RecipeChoice/>
    </Center>
  );
}
