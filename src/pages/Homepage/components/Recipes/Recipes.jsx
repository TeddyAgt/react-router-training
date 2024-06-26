import { useAsyncValue } from "react-router-dom";

function Recipes() {
  const recipes = useAsyncValue();

  return (
    <ul>{recipes && recipes.map((r) => <li key={r._id}>{r.title}</li>)}</ul>
  );
}

export default Recipes;
