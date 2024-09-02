import { ThemeProvider } from "@emotion/react";
import HomePage from "./Pages/HomePage";
import theme from "./Components/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewStoryPage from "./Pages/NewStoryPage";
import StoryResultPage from "./Pages/StoryResultPage";

const router = createBrowserRouter([
  {
    path: "/Editor-Webapp/checked",
    element: <HomePage />,
  },
  {
    path: "/Editor-Webapp/",
    element: <StoryResultPage />,
  },
  {
    path: "/Editor-Webapp/newStory",
    element: <NewStoryPage />,
  },
]);

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
