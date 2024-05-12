import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";

function Homepage() {
  const { recipes } = useLoaderData();

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Homepage</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={recipes}
          errorElement={<p>Fetching failed</p>}>
          <Recipes />;
        </Await>
      </Suspense>
    </section>
  );
}

export default Homepage;
