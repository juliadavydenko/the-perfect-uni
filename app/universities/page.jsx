import getUnis from "../libs/getUnis";
import Image from "next/image";
import Icon from "../components/university.png";

export default async function AllUnis() {
  const unis = await getUnis();
  return (
    <div className="mx-8">
      <h1 className="text-center mt-6 mb-8 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        List Of <mark className="px-2 text-white bg-teal-600 rounded">All</mark>{" "}
        Universities:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {unis
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((uni) => {
            return (
              <div
                key={uni.name}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
              >
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
                      Website:<br></br>
                      <a
                        className="inline-flex items-center text-blue-600 hover:underline"
                        href={uni.web_pages}
                        target="_blank"
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
    </div>
  );
}
