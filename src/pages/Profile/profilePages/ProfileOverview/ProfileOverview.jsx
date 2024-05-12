import { useNavigate } from "react-router-dom";

function ProfileOverview() {
  const navigate = useNavigate();

  function navigateToData() {
    navigate("data");
  }

  return (
    <article>
      <h2 className="text-xl mb-2">ProfileOverview</h2>
      <button
        onClick={navigateToData}
        className="p-1 rounded bg-teal-300 mb-2">
        Data
      </button>
      <ul>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
        <li>Overview</li>
      </ul>
    </article>
  );
}

export default ProfileOverview;
