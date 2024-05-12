import { json } from "react-router-dom";

export async function rootLoader() {
  const user = {
    name: "Teddy",
    age: 28,
  };
  return json(user);
}
