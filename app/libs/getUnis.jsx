export default async function getUnis() {
  const res = await fetch("http://universities.hipolabs.com/search?");
  if (!res.ok) {
    throw new Error("Sorry, failed to fetch universities");
  }
  return await res.json();
}
