import { HiMiniArrowLongRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

type ProjectItemProp = {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  type: string;
};
const ProjectItem: React.FC<ProjectItemProp> = ({
  id,
  thumbnail,
  title,
  category,
  type,
}) => {
  const cn =
    type === "fullstack"
      ? "bg-green-600"
      : type === "frontend"
      ? "bg-blue-600"
      : type === "backend"
      ? "bg-red-600"
      : "bg-violet-600";
  return (
    <div className="text-white flex flex-col gap-2 rounded-lg w-full md:w-80 h-80 max-h-96 shadow shadow-yellow-500 ">
      <img
        src={thumbnail}
        alt="Thumbnail Image"
        className="w-full h-[75%] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-2 items-center ">
        <div className="flex flex-col gap-1">
          <h1 className="md:text-xl text-lg">{title}</h1>
          <p
            className={`${cn} px-2  text-white my-2 w-28 text-center rounded-md`}
          >
            {category}
          </p>
        </div>
        <NavLink
          to={`/projects/${id}`}
          className=" flex space-x-1 items-center px-2 border border-yellow-500 hover:bg-yellow-700 rounded"
        >
          <span>Explore</span>
          <span>
            <HiMiniArrowLongRight />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectItem;
