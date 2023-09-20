"use client";
import { useState, useEffect } from "react";
import Icon from "./university.png";
import Image from "next/image";

function UniversitySearch() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=${name}&country=${country}`
    );

    if (response.ok) {
      const data = await response.json();
      setResults(data);
    }
  };

  return (
    <div>
      <h1>University Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          University Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <h2>Search Results:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((university) => (
          <div
            key={university.domain}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <Image
                  src={Icon}
                  alt="The Perfect Uni logo"
                  width={70}
                  quality={100}
                />
              </div>
              <div>
                <a
                  href={university.web_page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 hover:underline"
                >
                  {university.name}
                </a>
                <p className="text-gray-500">
                  {university.country} ({university.alpha_two_code})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UniversitySearch;
