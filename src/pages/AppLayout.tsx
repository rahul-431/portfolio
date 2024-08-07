import Sidebar from "../layout/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-2 w-full rounded-lg md:p-2 h-screen">
      <div className="md:w-64 w-full">
        <Sidebar />
      </div>
      <div className="w-full h-full bg-[#2A3132] md:rounded-lg"></div>
    </div>
  );
};

export default AppLayout;
