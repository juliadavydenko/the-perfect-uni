"use client";
import { useState, useEffect } from "react";
import Icon from "./university.png";
import Image from "next/image";

function UniversitySearch() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`
      );

      if (response.ok) {
        const data = await response.json();
        setResults(data);
        setShowMessage(data.length === 0);
      } else {
        console.error("API request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while making the API request:", error);
    }
  };

  return (
    <div className="mb-6">
      <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            University Name:
          </span>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            type="text"
            value={name}
            placeholder="e.g. Aarhus University"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="mb-6">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              {" "}
              Country:
            </span>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              type="text"
              value={country}
              placeholder="e.g. Denmark"
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
        </div>
        <button
          className="block mx-auto text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          Search
        </button>
      </form>
      {showMessage && results.length === 0 && (
        <div className="col-span-full flex items-center justify-center">
          <div className="mx-auto text-center bg-red-400 rounded-xl shadow-lg p-4">
            <p className="text-white-500 text-center">
              No matching universities found. Please check your input.
            </p>{" "}
          </div>
        </div>
      )}
      <div className="mt-4"></div>
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((university) => (
          <div
            key={university.domain}
            className="bg-white rounded-xl shadow-lg p-4"
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
                <a
                  href={university.web_page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer font-semibold text-blue-500 hover:underline"
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
