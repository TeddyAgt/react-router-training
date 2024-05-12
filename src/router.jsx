import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { homepageLoader } from "./loaders/homepageLoader";
import { rootLoader } from "./loaders/rootloader";
import { profileLoader } from "./loaders/profileLoader";
import { profileFormAction } from "./actions/profileFormAction";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ProfileOverview = lazy(() =>
  import("./pages/Profile/profilePages/ProfileOverview/ProfileOverview")
);
const ProfileData = lazy(() =>
  import("./pages/Profile/profilePages/ProfileData/ProfileData")
);
const ProfileForm = lazy(() =>
  import("./pages/Profile/profilePages/ProfileForm/ProfileForm")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        // path: "/"
        // À la place de path /, on peut utiliser la propriété index.
        // L'avantage est que, lors du chargement, si aucun children n'est trouvé, alors le composant avec l'index: true sera renvoyé
        // /!\ Cette propriété ne s'utilise qu'au niveau children
        index: true,
        loader: homepageLoader,
        element: <Homepage />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        loader: profileLoader,
        // caseSensitive pour activer ou non le contrôle de la casse
        // false est l'option par défaut, je le mets juste là pour m'en souvenir au cas où
        caseSensitive: false,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: "data",
            element: <ProfileData />,
          },
          {
            path: "form",
            action: profileFormAction,
            element: <ProfileForm />,
          },
        ],
      },
    ],
  },
]);
