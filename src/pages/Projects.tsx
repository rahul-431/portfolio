import { useSearchParams } from "react-router-dom";
import { projectsList } from "../data/ProjectList";
import Filter from "../ui/Filter";
import ProjectItem from "../ui/ProjectItem";

const Projects = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("category")
    ? searchParams.get("category")
    : "all";
  const projectItems =
    searchValue !== "all"
      ? projectsList.filter((item) => item.type === searchValue)
      : projectsList;
  return (
    <main className="px-4 md:px-6 lg:px-10 flex flex-col overflow-y-scroll no-scrollbar">
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
      <section className="grid grid-cols-3 gap-6 my-6">
        {projectItems.length > 0 ? (
          projectItems.map((item) => (
            <ProjectItem
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              category={item.category}
            />
          ))
        ) : (
          <p className="text-white text-lg">No Projects to show</p>
        )}
      </section>
    </main>
  );
};

export default Projects;
