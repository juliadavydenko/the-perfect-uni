import getUnis from "../libs/getUnis";
import Image from "next/image";
import Icon from "../components/university.png";

export default async function AllUnis() {
  const unis = await getUnis();
  return (
    <div>
      <h1 className="text-5xl font-bold">List of all universities:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
      {unis
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((uni) => {
          return (
            <div key={uni.name} className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    src={Icon}
                    alt="University Icon"
                    width={70}
                    quality={100}
                  />
                </div>
                <div>
                  <p className="text-gray-500">Name:</p>
                  <h2>{uni.name}</h2>
                  <p className="text-gray-500">Location: {uni.country}</p>
                  <p className="text-gray-500">
                    Country Code: {uni.alpha_two_code}
                  </p>
                  <p className="text-gray-500">
                    Website:
                    <a
                      className="font-semibold text-blue-500 hover:underline"
                      href={uni.web_pages}
                    >
                      {uni.web_pages}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
