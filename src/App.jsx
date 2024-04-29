import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
   return (
     <Box bg='teal.600' w='auto' h='auto' p={4}>
        <RecipeListPage />
     </Box>
    );
  };