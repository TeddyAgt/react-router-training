import { Form, useActionData } from "react-router-dom";

function ProfileForm() {
  const response = useActionData();

  return (
    <article>
      <h2 className="text-xl mb-2">Profile Form</h2>

      <Form method="POST">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="border border-stone-300 rounded mr-2 p-1 outline-none"
        />

        <button
          type="submit"
          className="rounded p-1 bg-teal-300">
          Submit
        </button>
      </Form>
      {response && <p>{response}</p>}
    </article>
  );
}

export default ProfileForm;
