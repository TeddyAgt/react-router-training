import { Suspense } from "react";
import {
  NavLink,
  Outlet,
  useOutletContext,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const { user } = useOutletContext();
  console.log(id);
  console.log(queryParams);

  return (
    <section className="p-8">
      <nav className="flex p-4 gap-2">
        <NavLink to="">Overview</NavLink>
        <NavLink to="data">Data</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p>{user.name}</p>
      <Suspense>
        <Outlet />
      </Suspense>
    </section>
  );
}

export default Profile;
