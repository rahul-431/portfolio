import { HiMiniArrowLongRight } from "react-icons/hi2";

type ProjectItemProp = {
  thumbnail: string;
  title: string;
  category: string;
};
const ProjectItem: React.FC<ProjectItemProp> = ({
  thumbnail,
  title,
  category,
}) => {
  return (
    <div className="text-white flex flex-col gap-2 rounded-lg w-80 h-72 max-h-80 shadow shadow-yellow-500 ">
      <img
        src={thumbnail}
        alt="Thumbnail Image"
        className="w-full h-[75%] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-2 items-center">
        <div className="flex flex-col gap-1">
          <h1 className="md:text-xl text-lg">{title}</h1>
          <p className="text-gray-400 uppercase">{category}</p>
        </div>
        <button className=" flex space-x-1 items-center px-2 border border-yellow-500 hover:bg-yellow-700 rounded">
          <span>Explore</span>
          <span>
            <HiMiniArrowLongRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
