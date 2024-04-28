import { Center, Image, Text, WrapItem } from '@chakra-ui/react';

export const RecipeItem = ({ Recipe, clickFn }) => {
  return (
    <WrapItem>
      <Center gap={8} cursor={'pointer'} onClick={() => clickFn(Recipe)}>
        <Image
          src={Recipe.imgUrl}
          w={50}
          h={50}
          borderRadius={'xl'}
          alt={Recipe.alt}
        />
        <Text fontWeight={'450'}>{Recipe.label}</Text>
      </Center>
    </WrapItem>
  );
};