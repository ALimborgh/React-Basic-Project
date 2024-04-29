import { Box, Card, Stack, CardBody, Heading, Text, SimpleGrid, Highlight} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export const RecipeChoice = ({recipes, clickfn}) => {
    const handleCardClick = (id) => clickfn(id);

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {recipes.map((recipe, index) => (
                    <Link to={`/recipe/${recipe.id}`} key={index} onClick={() => handleCardClick(recipe.id)}>
                        <Card 
                            bg="white.500"
                            color="white"
                            boxShadow="lg"
                            _hover={{ bg: "blue.100" }}
                            border = "1px solid"
                        >
                            <CardBody>
                                <Box 
                                    as="img"
                                    src={recipe.image} 
                                    objectFit='cover'
                                    objectPosition="center" 
                                    width="100%" 
                                    height="150px"
                                />
                                <Stack mt='6' spacing='3' textColor='black'>
                                    <Text as='sub' fontSize="sm">{recipe.mealType}</Text>
                                    <Heading size='sm'>{recipe.label}</Heading>
                                    {recipe.dietLabels.length > 0 && 
                                    <Text fontSize='xs'>
                                        Diet:{""}
                                        {recipe.dietLabels.map((diet, index) => (
                                            <Highlight key={`${recipe.id}-diet-${index}`} query={diet} styles={{ px: '2px', py: 'px', bg: 'green.300', borderRadius: 'md' }}>
                                                {diet + ' '}
                                            </Highlight>
                                        ))}
                                    </Text>
                                    }
                                    <Text fontSize='xs'>
                                        Dish:{""}
                                        {recipe.dishType.map((dish, index) => (
                                            <Highlight key={`${recipe.id}-dish-${index}`} query={dish} styles={{ px: '2px', py: '1px', as:'em', borderRadius: 'md'}}>
                                                {dish}
                                            </Highlight>
                                        ))}
                                    </Text>
                                    {recipe.cautions.length > 0 && 
                                    <Text fontSize="xs">
                                        Cautions:{""}
                                        {recipe.cautions.map((caution, index) => (
                                                <Highlight key={`${recipe.id}-caution-${index}`} query={caution} styles={{ px: '2px', py: '1px', bg: 'red.300', borderRadius: 'md' }}>
                                                    {caution + ' '}
                                                </Highlight>
                                        ))}
                                    </Text>
                                    }
                                </Stack>
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
    );
}; 