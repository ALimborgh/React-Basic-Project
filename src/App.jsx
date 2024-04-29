import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
   return (
     <Box bg='teal.600' w='99vw' h='250vh'>
        <RecipeListPage />
     </Box>
    );
  };