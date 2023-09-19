import Search from "./components/Search";

async function getUniversities() {
  const res = await fetch("http://universities.hipolabs.com/search?", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const universities = await getUniversities();
  console.log(universities);

  return (
    <main>
      <div classsName="text-center mt-20">
        <h1 className="text-5xl font-bold">
          FIND THE UNIVERSITY OF YOUR DREAMS
        </h1>

        <Search />

        <p>
          The location and environment of a university can greatly affect your
          overall experience. Consider whether you prefer an urban or rural
          setting, the climate, and other factors that can impact your lifestyle
          and well-being.
        </p>
      </div>
    </main>
  );
}
