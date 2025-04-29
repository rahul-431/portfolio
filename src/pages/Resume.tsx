import { FaBookOpen } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import {
  MdInterests,
  MdLanguage,
  MdOutlineHomeWork,
  MdOutlineSummarize,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const Resume = () => {
  return (
    <main className="px-4 md:px-6 lg:px-10 w-full flex flex-col gap-2 overflow-y-scroll no-scrollbar my-2">
      <h1 className="text-white text-2xl" id="border-left">
        Resume
      </h1>
      {/* Professional summary */}
      <section className="flex flex-col gap-4 md:px-4 my-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-yellow-500">
              <MdOutlineSummarize />
            </div>
            <h1 className="text-white text-xl">Professional Summary</h1>
          </div>
          <div className="flex flex-col gap-2 ps-7 ms-2 w-full">
            <p className="text-white text-lg">
              A self motivated, adaptable, and responsible Software Developer,
              passionate about solving real world problems and continually
              improving development processes to deliver high quality software
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="flex flex-col gap-4 md:px-4 my-4">
        <div className="flex flex-col md:gap-6 gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-yellow-500">
              <FaBookOpen />
            </div>
            <h1 className="text-white text-xl">Education</h1>
          </div>
          <div className="flex flex-col gap-2 md:px-10 px-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h1 className="text-white text-lg relative">
                Bachelor in computer application (BCA)
              </h1>
            </div>
            <div className="ps-7 text-gray-400 ms-1  border-l border-gray-500">
              <h2>2018-2023</h2>
              <p>Hetauda School of management and social science, Hetuda-4</p>
              <p>TU Affiliated</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:px-10 px-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h1 className="text-white text-lg relative">+2 (Science)</h1>
            </div>
            <div className="ps-7 text-gray-400 ms-1  border-l border-gray-500">
              <h2>2016-2018</h2>
              <p>Makwanpur mulitple campus (MMC)-Hetauda-2</p>
              <p>(NEB) National Education Board</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:px-10 px-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h1 className="text-white text-lg relative" id="box">
                SLC
              </h1>
            </div>
            <div className="ps-7 text-gray-400 ms-1  border-l border-gray-500">
              <h2>2005-2015</h2>
              <p>Bajrabarahi higher secondary school, Thaha-6, bajrabarahi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-4 md:px-4 my-4">
        <div className="flex flex-col md:gap-6 gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-yellow-500">
              <MdOutlineHomeWork />
            </div>
            <h1 className="text-white text-xl">Experience</h1>
          </div>
          <div className="flex flex-col gap-2 md:px-10 px-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h1 className="text-white text-lg relative">
                MERN Stack Internship at{" "}
                <NavLink to="https://mindriserstech.com/" className="underline">
                  Mindrisers Tech
                </NavLink>
              </h1>
            </div>
            <div className="ps-7 text-gray-400 ms-1  border-l border-gray-500">
              <h2>FEB 2025 - Present</h2>
              <p className="text-wrap">
                I started my MERN Stack internship at Mindrisers, and it's been
                a great learning experience. I've worked on frontend development
                using NEXT, React and integrated APIs with Node.js and Django.
                The team is supportive, and I'm gaining hands-on experience in
                real-world development.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:px-10 px-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h1 className="text-white text-lg relative">
                Software Associate at{" "}
                <NavLink to="https://truenary.com/" className="underline">
                  Truenary Solution
                </NavLink>
              </h1>
            </div>
            <div className="ps-7 text-gray-400 ms-1  border-l border-gray-500">
              <h2>Nov. 2023-Mar. 2024</h2>
              <p className="text-wrap">
                During my recent work as a Software Associate, I gained hands-on
                experience with software design patterns, architecture, and
                advanced frontend development using React.js. I also explored
                backend technologies, working with C# and .NET, which broadened
                my understanding of full-stack development.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:px-10 px-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h1 className="text-white text-lg relative">
                Internship,{" "}
                <NavLink to="https://webifysolution.com/" className="underline">
                  Webify Technology
                </NavLink>
              </h1>
            </div>
            <div className="ps-7 text-gray-400 ms-1  border-l border-gray-500">
              <h2>May. 2022-Oct. 2022</h2>
              <p className="text-wrap">
                In my intersip period, I focused on backend development with
                Java and Spring Boot. I learned to build scalable applications,
                create RESTful APIs, and manage key features like security and
                data access, enhancing my backend expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="flex flex-col gap-4 md:px-4 my-4">
        <div className="flex flex-col  gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-yellow-500">
              <GiSkills />
            </div>
            <h1 className="text-white text-xl">Skills</h1>
          </div>
          <div className="flex flex-col gap-2 ps-7 ms-2 md:w-1/2 w-full">
            <p className="grid grid-cols-2 text-lg text-white">
              <span>NEXT JS</span>
              <span>Typescript</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>RTK Query</span>
              <span>Tanstack React Query</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>React</span>
              <span>Express</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Mongo DB</span>
              <span>Node JS</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Tailwind</span>
              <span>Bootstrap</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Version Control (GIT)</span>
              <span>HTML, CSS, JS</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>SQL, NOSQL</span>
              <span>OOP</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Shadcn, Material UI</span>
              <span>Figma</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Python</span>
              <span>Java, C#</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Problem Solving</span>
              <span>Communication Skills</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Computer Skills</span>
            </p>
          </div>
        </div>
      </section>

      {/* languages */}
      <section className="flex flex-col gap-4 md:px-4 my-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-yellow-500">
              <MdLanguage />
            </div>
            <h1 className="text-white text-xl">Language</h1>
          </div>
          <div className="flex flex-col gap-2 ps-7 ms-2 md:w-1/2 w-full">
            <p className="grid grid-cols-2 text-lg text-white">
              <span>English</span>
              <span>Good</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Hindi</span>
              <span>Good</span>
            </p>
            <p className="grid grid-cols-2 text-lg text-white">
              <span>Nepali</span>
              <span>Native</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="flex flex-col gap-4 md:px-4 my-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-yellow-500">
              <MdInterests />
            </div>
            <h1 className="text-white text-xl">Hobbies & Interests</h1>
          </div>
          <ul className="flex flex-col gap-2 ps-7 ms-2 md:w-1/2 w-full list-disc">
            <li className="text-lg text-white">
              Coding competetion and challenges
            </li>
            <li className="text-lg text-white">Learning new technologies</li>
            <li className="text-lg text-white">Building personal projects</li>
            <li className="text-lg text-white">Reading books and blogs</li>
            <li className="text-lg text-white">Watching Movies and series</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Resume;

// oop,database system,Principal of internet technologies ans web application,web engineering, software engineering
