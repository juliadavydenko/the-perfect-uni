import Search from "./components/Search";
import Image from "next/image";
import Unipic from "../public/Uni-pic.jpg";

export default async function Home() {
  return (
    <main>
      <div className="relative mx-11">
        {/* // style={{
        //   // display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      > */}
        <Search />

        <p className="text-center mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
          The location and environment of a university can greatly affect your
          overall experience. Consider whether you prefer an urban or rural
          setting, the climate, and other factors that can impact your lifestyle
          and well-being.
        </p>
      </div>
    </main>
  );
}
