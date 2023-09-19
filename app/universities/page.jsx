import getUnis from "../libs/getUnis";

export default async function AllUnis() {
  const unis = await getUnis();
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">List of all unis</h1>
      {unis.map((uni) => {
        return (
          <div key={uni.name}>
            <h2>{uni.name}</h2>
            <p>{uni.country}</p>
            <p>{uni.web_pages}</p>
          </div>
        );
      })}
    </div>
  );
}
