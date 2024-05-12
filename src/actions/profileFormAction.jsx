export async function profileFormAction({ request, params }) {
  const data = await request.formData();
  const obj = Object.fromEntries(data);
  return obj.username;
}
