import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
   return (
     <Box bg='teal.600' w='100vw' h='100vh'>
        <RecipeListPage />
     </Box>
    );
  };