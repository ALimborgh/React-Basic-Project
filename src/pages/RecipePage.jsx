import {recipes} from '../utils/data';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardBody, SimpleGrid, Box, Stack, Text, Highlight, Grid } from '@chakra-ui/react';
import { Button } from '../components/ui/ButtonInput';

export const RecipePage = () => {
    const { label } = useParams();
    const decodedLabel = decodeURIComponent(label);
    const recipeData = recipes.find(recipe => recipe.label === decodedLabel);
    const navigate = useNavigate();
    
    if (!recipeData) {
        return <h1>Recipe not found!</h1>;
    }
    const recipe = {
        title: recipeData.label,
        ingredients: recipeData.ingredients.map((ingredient) => ingredient.text),
        imageUrl: recipeData.image,
        mealType: recipeData.mealType,
        dietLabels: recipeData.dietLabels,
        dishType: recipeData.dishType,
        cautions: recipeData.cautions,
        servings: recipeData.yield,
        totalNutrients: recipeData.totalNutrients,
        totalTime: recipeData.totalTime,
        healthLabels: recipeData.healthLabels,

    };

    return (
        <Card 
            bg="white.500"
            color="black"
            boxShadow="lg"
            border = "1px solid"
            maxWidth={1050}
            mx="auto"
        >
            <CardBody 
                p={4}
                maxWidth={1050}
            >
                <Button 
                    color="Black" 
                    _hover={{ bg: "blue.100" }} 
                    bg="teal.400" 
                    onClick={() =>navigate(-1)} 
                    mb={1} 
                > Previous </Button>
                <Box 
                    as="img"
                    src={recipe.imageUrl}
                    width= '100%'
                    maxHeight= '400px'
                    objectFit= 'cover'
                    objectPosition= 'center'
                    borderRadius= 'md'
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Stack>
                        <Text as='sub' color='grey' mt={1}>{recipe.mealType}</Text>
                        <Text as='b' fontSize='xl'>{recipe.title}</Text>
                        <Text as='i'>Time: {recipe.totalTime} min</Text> 
                        <Text as='i'>Servings: {recipe.servings}</Text>
                        <Text as='i'>Dish Type: {recipe.dishType}</Text>
                        <Text as='b'>Ingredients: </Text>
                        {recipe.ingredients.map((ingredient, index) => (
                            <Text key={index}>- {ingredient}</Text>
                        ))}
                    </Stack>
                    <Stack>
                        <Text as='i'>Health Labels:</Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
                            {recipe.healthLabels.map((label, index) => (
                                <Box key={index} p={1}>
                                    <Highlight 
                                        query={String(label)} 
                                        styles={{ px: '2px', py: 'px', bg: 'purple.300', borderRadius: 'md' }}
                                    >
                                        {String(label)}
                                    </Highlight>
                                </Box>
                            ))}
                        </SimpleGrid>
                        <Text as='i'>Diet Labels:</Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
                            {recipe.dietLabels.map((label, index) => (
                                <Box key={index} p={1}>
                                    <Highlight 
                                        query={String(label)} 
                                        styles={{ px: '2px', py: 'px', bg: 'green.300', borderRadius: 'md' }}
                                    >
                                        {String(label)}
                                    </Highlight>
                                </Box>
                            ))}
                        </SimpleGrid>
                        <Text as='i'>Cautions:</Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
                            {recipe.cautions.map((caution, index) => (
                                <Box key={index} p={1}>
                                <Highlight 
                                    query={caution} 
                                    styles={{ px: '2px', py: 'px', bg: 'red.300', borderRadius: 'md' }}
                                >
                                        {caution}
                                    </Highlight>
                                </Box>
                            ))}
                        </SimpleGrid>
                        <Text as='i'>Nutrients:</Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
                            {Object.entries(recipeData.totalNutrients).map(([nutrient, data], index) => {
                                if (['ENERC_KCAL', 'PROCNT', 'FAT', 'CHOCDF', 'CHOLE', 'NA'].includes(nutrient)) {
                                    return (
                                       <Box key={index} p={1}> 
                                            <Text>
                                                {data.label}: {Math.ceil(data.quantity)} {data.unit}
                                            </Text>
                                        </Box>
                                    );
                                }
                                return null;
                            })}
                        </SimpleGrid>
                    </Stack>
                </Grid>
            </CardBody>
        </Card>
    );
};