import TimeLine from "./TimeLine";

export type TExperience = {
  time: string;
  copmanyName: string;
  role: string;
  description: string;
};

const experienceData: TExperience[] = [
  {
    time: "March 2024 - May 2024",
    copmanyName: "GyanMatrix Academy Private Limited",
    role: "Software Engineer Intern",
    description:
      "During my internship, I had the opportunity to dive deep into advanced concepts of React and Node.js. I worked on developing scalable and efficient web applications, improving my understanding of state management, performance optimization, backend API development, and database integrations. This experience significantly enhanced my problem-solving skills and gave me hands-on exposure to real-world full-stack development.",
  },
  {
    time: "May 2024 - March 2025",
    copmanyName: "GyanMatrix Academy Private Limited",
    role: "Associte Software Engineer Full-Stack",
    description:
      "Developed and optimized full-stack applications using MySQL, Express.js, React, and Node.js, focusing on performance and scalability. Contributed significantly to a React Native project, enhancing mobile app features and ensuring seamless cross-platform functionality. Gained hands-on experience in API development, database management, and UI/UX improvements.",
  },
];

export const Experience: React.FC = () => {
  return (
    <div id="workExperience" className="min-h-screen flex justify-center mt-[20vh]">
      <div className="min-w-[80vw] max-w-[80vw] mx-auto md:min-w-4xl md:max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 text-center">
            Work Experience
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <TimeLine experience={experienceData} />
        </ul>
      </div>
    </div>
  );
};
