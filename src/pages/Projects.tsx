import Filter from "../ui/Filter";

const Projects = () => {
  return (
    <main className="px-4 md:px-6 lg:px-10 flex flex-col">
      <div className="flex items-end ">
        <Filter
          filterField="category"
          options={[
            { label: "All", value: "all" },
            { label: "Web App", value: "web-app" },
            { label: "Web Design", value: "web-design" },
            { label: "Mobile App", value: "mobile-app" },
            { label: "Desktop App", value: "desktop-app" },
          ]}
        />
      </div>
      <section></section>
    </main>
  );
};

export default Projects;
