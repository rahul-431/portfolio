import { NavLink, useNavigate, useParams } from "react-router-dom";
import { projectsList } from "../data/ProjectList";
import { FaGithub, FaRegImages, FaVideo } from "react-icons/fa";
import Modal from "./Modal";
import ImageSlider from "./ImageSlider";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectData = projectsList.filter((item) => item.id === id);
  const cn =
    projectData[0].type === "fullstack"
      ? "bg-green-600"
      : projectData[0].type === "frontend"
      ? "bg-blue-600"
      : projectData[0].type === "backend"
      ? "bg-red-600"
      : "bg-violet-600";
  return (
    <section className="flex flex-col px-4 md:px-6 lg:px-10 gap-4 my-5 overflow-y-scroll no-scrollbar">
      <div className="flex justify-between">
        <h1 className="text-2xl text-white" id="border-left">
          Project Detail
        </h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex space-x-2 items-center bg-yellow-700 hover:bg-yellow-600 text-white px-2 py-1"
          >
            <span>
              <HiMiniArrowLongLeft />
            </span>
            <span>Back</span>
          </button>
          {projectData[0].isLive && (
            <NavLink
              className="text-white px-2 py-1 rounded-sm bg-yellow-700 hover:bg-yellow-600"
              to={projectData[0].liveLink}
              target="_blank"
            >
              View Live
            </NavLink>
          )}
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src={projectData[0].thumbnail}
          alt="Project Image"
          className="w-full md:h-96 h-full object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl text-white">{projectData[0].title}</h1>
          <p
            className={`${cn} text-lg px-2  text-white my-2 w-32 text-center rounded-md py-1`}
          >
            {projectData[0].category}
          </p>
        </div>
        <div className="flex gap-2 items-center text-white">
          <Modal>
            {projectData[0].hasOtherImage && (
              <Modal.Open opens="images">
                <button className="flex items-center space-x-2 px-2 rounded-sm bg-yellow-600 hover:bg-yellow-500">
                  <span>
                    <FaRegImages />
                  </span>
                  <span>Images</span>
                </button>
              </Modal.Open>
            )}
            {projectData[0].haveVideo && (
              <Modal.Open opens="video">
                <button className="flex items-center space-x-2 px-2 rounded-sm bg-yellow-600 hover:bg-yellow-500">
                  <span>
                    <FaVideo />
                  </span>
                  <span>Video</span>
                </button>
              </Modal.Open>
            )}
            <Modal.Window name="images">
              <ImageSlider
                images={
                  projectData[0].otherImages ? projectData[0].otherImages : []
                }
              />
            </Modal.Window>
            <Modal.Window name="video">
              <div className="w-full h-full py-8 my-5 flex items-center ">
                <video
                  src={projectData[0].video}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                ></video>
              </div>
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 text-white my-2 lg:gap-10 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Description</h1>
            {projectData[0].description.length > 0 ? (
              projectData[0].description.map((item, index) => (
                <p className="text-justify text-gray-400" key={index}>
                  {item}
                </p>
              ))
            ) : (
              <p>No Description</p>
            )}
          </div>
          <div>
            <h1 className="text-xl">Features</h1>
            <ul className="list-disc text-gray-400 ms-4 my-2">
              {projectData[0].features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <NavLink
              to={projectData[0].gitLink}
              target="_blank"
              className="w-48 flex items-center space-x-2 px-2 py-1 bg-yellow-600 hover:bg-yellow-500 rounded-sm"
            >
              <span>
                <FaGithub />
              </span>
              <span>View Code on Github</span>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col lg:items-center gap-2">
          <h1 className="text-xl">Tools and Technology</h1>
          <ul className="list-disc text-gray-400 ms-4 my-2">
            {projectData[0].tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
