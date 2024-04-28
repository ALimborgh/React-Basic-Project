import { recipes } from "../utils/data.js";
import { Card, Stack, CardBody, Heading, Text, Image, Highlight } from '@chakra-ui/react'


export const RecipeChoice = () => {
    return (
        <>
            {recipes.map((recipe) => (
                <Card maxW='sm' key={recipe.id}>
                    <CardBody>
                        <Image
                            src={recipe.image}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Text as='sub'>{recipe.mealType}</Text>
                            <Heading size='md'>{recipe.label}</Heading>
                            <Highlight> {recipe.cautions} </Highlight>
                        </Stack>
                    </CardBody>
                </Card>
            ))}
        </>
    );
};
