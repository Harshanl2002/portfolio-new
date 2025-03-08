import DownloadButtonGroup from "./DownloadButtonGroup";

const AboutPage = () => {
  return (
    <div
      className="min-h-fit flex flex-col items-center justify-center p-6 poppins-normal"
      id={"about"}
    >
      <div className="max-w-4xl w-full rounded-2xl p-8 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 text-center">
          About Me
        </h1>
        <p className="text-lg mb-4 text-justify mt-4">
          Hi!👋🏻I'm{" "}
          <span className="text-blue-600 font-semibold">Harshan Loganthan</span>
          , a passionate{" "}
          <span className="font-semibold">Full-stack software developer</span>{" "}
          based in <span className="font-semibold">Coimbatore, India</span>. I
          specialize in{" "}
          <span className="font-semibold">
            React, TypeScript, Node.js, and MySQL
          </span>{" "}
          with a strong focus on building scalable and efficient applications.
        </p>
        <p className="text-lg text-justify">
          I worked at{" "}
          <span className="text-blue-600 font-semibold">GyanMatrix</span>,
          contributing to the development of modern web applications. I've also
          developed modules for{" "}
          <span className="font-semibold">
            TNStartUp Municipality Web App CCMC
          </span>
          , helping improve coordination and task management. I’m always
          exploring new technologies, working on side projects, and contributing
          to open-source.
        </p>
      </div>
      <DownloadButtonGroup />
    </div>
  );
};

export default AboutPage;
