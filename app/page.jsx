import Search from "./components/Search";
import Image from "next/image";
import Unipic from "../public/Uni-pic.jpg";

export default async function Home() {
  return (
    <main>
      <h1>FIND THE UNIVERSITY OF YOUR DREAMS</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Search />
      </div>
      <div>
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
