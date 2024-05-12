import { defer } from "react-router-dom";
import { fetchRecipes } from "../api/recipes";

export async function homepageLoader({ params, request }) {
  console.log("params: ", params);
  console.log("request: ", request);

  const recipes = await fetchRecipes();
  return defer({
    recipes: new Promise((res) => {
      setTimeout(() => res(recipes), 1000);
    }),
  });
}
