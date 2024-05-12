import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h2>
        Error {error.status}: {error.message || error.statusText} 😭
      </h2>
      <Link to={"/"}>Home</Link>
    </>
  );
}

export default ErrorPage;
