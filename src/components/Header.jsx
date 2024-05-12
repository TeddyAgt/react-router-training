import { Link, useMatch, NavLink } from "react-router-dom";
const id = 123;

function Header() {
  // const matchHomepage = useMatch("/");
  // const matchProfile = useMatch("/profile");

  return (
    <header className="p-4 shadow-md bg-teal-200 flex justify-between items-center text-teal-950">
      <Link
        to={"/"}
        className="text-xl font-bold ">
        React-Router
      </Link>

      <nav>
        <NavLink
          to={"/"}
          end
          className="mr-2">
          Homepage
        </NavLink>
        <NavLink
          to={`/profile/${id}?theme=light`}
          end
          className="mr-2">
          Profile
        </NavLink>
        <Link to={"/aig"}>???</Link>
      </nav>
    </header>
  );
}

export default Header;
