import { ThemeProvider } from "@emotion/react";
import HomePage from "./Pages/HomePage";
import theme from "./Components/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewStoryPage from "./Pages/NewStoryPage";
import StoryResultPage from "./Pages/StoryResultPage";

const router = createBrowserRouter([
  {
    path: "/checked",
    element: <HomePage />,
  },
  {
    path: "/storyResult",
    element: <StoryResultPage />,
  },
  {
    path: "/",
    element: <NewStoryPage />,
  },
]);

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
