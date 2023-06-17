"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(
    () => {
      function getRandomVerse() {
        // Generate a random number between 1 and 6237
        const randomVerse = Math.floor(Math.random() * 6237);

        // Create the URL for the API
        const url = `https://api.alquran.cloud/v1/ayah/${randomVerse}/en.asad`;

        // Fetch the data from the API
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const verse = document.getElementById("verse");
            const number = document.getElementById("verse_info");
            const api = document.getElementById("api");
            verse.innerText = data.data.text;
            number.innerText = `Verse Number: ${data.data.number}\nTranslation: Muhammad Asad\nSurah Name: ${data.data.surah.englishName}`;
            api.innerText = `API: Click Me`
            api.addEventListener("click", function() {
              window.open(url)
            })
          });
      }
      window.onload = getRandomVerse();
    },
    // This array of dependencies will determine when the function runs
    // If the dependencies change, the function will run again
    []
  );
  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 id="verse" className="text-3xl font-bold text-white">
            Fetching Verse.
          </h1>
          <div className="text-center text-3xl text-white">
            <h3 id="verse_info">Fetching Information.</h3>
            <a hr id="api" className="text-center text-3xl font-serif text-blue-500">
            </a>
            <h5 className="text-white text-center font-thin">
              We use vercel to provide analytics
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
