import { SiVorondesign } from "react-icons/si";
import AboutItem from "../ui/AboutItem";
import { MdDeveloperMode } from "react-icons/md";
import { CgFigma } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";

const AboutDoingItem = [
  {
    icon: <SiVorondesign />,
    title: "UI/UX",
    description:
      "UI refers to the visual elements that can seen on the page. UX refers to the interction and comfort",
  },
  {
    icon: <SiVorondesign />,
    title: "Frontend Development",
    description:
      "Doing frontend devlopment from past 1.5 years using most popular framework Reactjs and HTML, CSS and JS",
  },
  {
    icon: <MdDeveloperMode />,
    title: "Backend Development",
    description:
      "Using Express, Node js, Dotnet, Django for better and interactive backend devlopment",
  },
  {
    icon: <CgFigma />,
    title: "Figma Design",
    description:
      "Doing Logo design, Web app deisgn, Mobile app design since 2 years",
  },
  {
    icon: <FaCubesStacked />,
    title: "MERN",
    description:
      "Developing web apps using MERN stack (Full stack Development)",
  },
];
const clients = [];
const About = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 w-full flex flex-col gap-2 overflow-y-scroll no-scrollbar my-2">
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-white text-2xl" id="border-left">
          About Me
        </h1>
        <p className="text-gray-400 text-lg">
          I am a passionate software developer with a strong foundation in both
          front-end and back-end development. With a deep understanding of
          modern web technologies and a keen eye for detail, I strive to create
          seamless, user-friendly applications that not only meet but exceed
          expectations. My journey in the tech world has been fueled by a
          relentless curiosity and a drive to continuously learn and adapt to
          new challenges.
        </p>
        <p className="text-gray-400 text-lg">
          Currently, I am honing my skills to become a full-stack developer,
          combining my expertise in front-end design and back-end logic to build
          robust, scalable solutions. I thrive in collaborative environments and
          am always eager to contribute to innovative projects that push the
          boundaries of what's possible in software development.
        </p>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-white text-2xl">What I'm Doing</h1>
        <div className="flex flex-wrap gap-4">
          {AboutDoingItem.map((item) => (
            <AboutItem
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-white text-2xl">Clients</h1>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar">
          {clients.length > 0 ? (
            <div></div>
          ) : (
            <p className="text-gray-400">
              No clients till now, but there will be.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
