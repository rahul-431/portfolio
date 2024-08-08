import { ReactNode } from "react";
// import { IconType } from "react-icons";

type AboutItemType = {
  icon: ReactNode;
  title: string;
  description: string;
};

const AboutItem = ({ icon, title, description }: AboutItemType) => {
  return (
    <div className="flex justify-around items-start gap-2 md:w-80 w-full border border-gray-400 p-2 rounded-md shadow shadow-white">
      <div className="text-4xl text-yellow-500">{icon}</div>
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-lg">{title}</h2>
        <p className="text-gray-400 text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default AboutItem;
