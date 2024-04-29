import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
   return (
     <Box bg='teal.600' w='auto' minH='100vh' p={4}>
        <RecipeListPage />
     </Box>
    );
  };