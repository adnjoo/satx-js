function App() {
  const recentMeetups = [
    {
      name: 'Unleash the Power of Userscripts: Violentmonkey Workshop',
      url: "https://www.meetup.com/satx-js/events/305367989/"
    },
    {
      name: "Building Snake with ReactJS and AI",
      url: "https://www.meetup.com/satx-js/events/304867042/?eventOrigin=group_past_events",
    },
  ];

  return (
    <div className="font-sans">
      <header className="bg-[#f0db4f] text-[#323330] p-6 text-center">
        <h1 className="text-4xl font-bold">San Antonio JavaScript</h1>
        <p className="mt-2 text-lg">A community for JavaScript enthusiasts in San Antonio</p>
      </header>

      <main className="p-6 min-h-[80vh]">
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
            {recentMeetups.map((meetup, index) => (
              <li key={index} className="border-b py-2 hover:text-blue-500">
                <a
                  href={meetup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {meetup.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-[#f0db4f] text-black p-6 text-center">
        <p className="text-sm">© 2025 San Antonio JavaScript</p>
        <div className="mt-2">
          <a
            href="https://www.meetup.com/satx-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline ml-1"
          >
            About
          </a>
          {" | "}
          <a
            href="https://github.com/andrewnjoo/satx-js"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
