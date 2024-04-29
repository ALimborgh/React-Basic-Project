import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
   return (
     <Box bg='teal.600' w='auto' minH='100vh' p={4}>
        <Router>
            <Routes>
                <Route path="/" element={<RecipeListPage />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
            </Routes>
        </Router>
     </Box>
    );
  };