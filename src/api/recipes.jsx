export async function fetchRecipes() {
  try {
    const response = await fetch("https://restapi.fr/api/tagt_recipes");

    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
    throw new Error("Error occured while fetching data ", e);
  }
}
