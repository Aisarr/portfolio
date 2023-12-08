import ProjectCard from "../components/projectCard"

function Projects() {
  return (
    <div className="block space-y-3">
      <ProjectCard
        title="Inventory Management"
        description="A project for managing inventory."
        link="https://binarinventorymanagement.online/login"

      />
      <ProjectCard
        title="Todo App"
        description="A simple Todo App."
        link="https://github.com/Aisarr/2300965-36-Ais-Todo-Gold"
      />
    </div>
  )
}

export default Projects