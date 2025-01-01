import { useState } from "react";

function App() {
  return (
    <div className="font-sans">
      <header className="bg-[#f0db4f] text-[#323330] p-6 text-center">
        <h1 className="text-4xl font-bold">San Antonio JavaScript</h1>
        <p className="mt-2 text-lg">A community for JavaScript enthusiasts in San Antonio</p>
      </header>

      <main className="p-6">
        <section className="my-8">
          <img
            src="./satx.jpg"
            alt="San Antonio Skyline"
            className="w-[300px] rounded-lg"
          />
          <h2 className="text-2xl mt-4 font-semibold">Welcome to San Antonio JavaScript</h2>
          <p className="mt-2 text-gray-700">
            We are a community-driven group that meets to discuss JavaScript and the open web. Learn more about us and discover the many ways you can contribute.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Recent Meetups</h2>
          <ul className="mt-4">
            {[
              "Building Snake with ReactJS and AI",
            ].map((meetup, index) => (
              <li
                key={index}
                className="border-b py-2 hover:text-blue-500"
              >
                {meetup}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-[#f0db4f] text-black p-6 text-center">
        <p className="text-sm">
          © 2025 San Antonio JavaScript
        </p>
        <div className="mt-2">
          <a href="https://www.meetup.com/satx-js/" className="hover:underline ml-1">About</a>
          {" | "}
          <a href="https://github.com/andrewnjoo/satx-js" className="hover:underline">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
