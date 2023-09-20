import Search from "./components/Search";
import Image from "next/image";
import Unipic from "../public/Uni-pic.jpg";
import ImportantInfo from "./components/ImportantInfo";

export default async function Home() {
  return (
    <main>
      <div className="relative mx-11">
        <h1 className="text-center mt-6 mb-8 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Find The University Of{" "}
          <mark className="px-2 text-white bg-teal-600 rounded">
            Your Dreams!
          </mark>{" "}
        </h1>
        <Search />

        <ImportantInfo />
      </div>
    </main>
  );
}
