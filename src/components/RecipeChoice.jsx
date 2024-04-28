import { Box, Card, Stack, CardBody, Heading, Text, SimpleGrid, Highlight} from '@chakra-ui/react'

export const RecipeChoice = ({recipes}) => {
    const handleCardClick = (recipe) => {
        console.log(recipe);
    };

    return (
        <Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {recipes.map((recipe) => (
                    <Card 
                        key={recipe.id} 
                        onClick={() => handleCardClick(recipe)} 
                        bg="white.500"
                        color="white"
                        boxShadow="lg"
                        _hover={{ bg: "blue.100" }}
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
                                    {recipe.dietLabels.map((diet) => (
                                        <Highlight key={recipe.id} query={diet} styles={{ px: '1', py: '1', bg: 'green.300' }}>
                                            {diet + ' '}
                                        </Highlight>
                                    ))}
                                </Text>
                                }
                                <Text fontSize='xs'>
                                    Dish:{""}
                                    {recipe.dishType.map((dish) => (
                                        <Highlight key={recipe.id} query={dish} styles={{ px: '1', py: '1', as:'em'}}>
                                            {dish}
                                        </Highlight>
                                    ))}
                                </Text>
                                {recipe.cautions.length > 0 && 
                                <Text fontSize="xs">
                                    Cautions:{""}
                                    {recipe.cautions.map((caution) => (
                                            <Highlight key={recipe.id} query={caution} styles={{ px: '1', py: '1', bg: 'red.300' }}>
                                                {caution + ' '}
                                            </Highlight>
                                    ))}
                                </Text>
                                }
                            </Stack>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}; 