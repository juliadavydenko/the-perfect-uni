import getUnis from "../libs/getUnis";

export default async function AllUnis() {
  const unis = await getUnis();
  return (
    <div className="text-center m-20">
      <h1 className="text-5xl font-bold">List of all unis</h1>
      {unis
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((uni) => {
          return (
            <div key={uni.name} className="card my-5">
              <h3>Name:</h3>
              <h2>{uni.name}</h2>
              <p>Location: {uni.country}</p>
              <p>Country Code: {uni.alpha_two_code}</p>
              <p>
                Website:
                <a href={uni.web_pages}>{uni.web_pages}</a>
              </p>
            </div>
          );
        })}
    </div>
  );
}
