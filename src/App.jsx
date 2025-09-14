import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/Details"; // ⚠ to'g'ri fayl nomi

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "recipes", element: <Recipes /> },
        { path: "recipes/:id", element: <RecipeDetail /> }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}
