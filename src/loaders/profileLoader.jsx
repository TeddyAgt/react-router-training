import { redirect } from "react-router-dom";
import { isLoggedIn } from "../api/auth";

export async function profileLoader() {
  if (await isLoggedIn()) {
    return true;
  } else {
    return redirect("/");
  }
}
