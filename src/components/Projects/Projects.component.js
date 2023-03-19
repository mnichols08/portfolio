import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/mnichols08/repos`)
      .then((data) => data.json())
      .then((json) => setProjects(json));
  }, []);
  console.log(projects);
  return (
    <section>
      <h2>Projects from GitHub</h2>
      <ul>
        {projects.length > 0
          ? projects.map((project) => {
              const keys = Object.keys(project);
              const ownerKeys = Object.keys(project.owner);
              console.log(ownerKeys);
              return (
                <li key={project.id}>
                  <ul>
                    <li key={`${project.id}_owner`}>
                      <ul><span>owner: </span>
                        {ownerKeys.map((key) => (
                          <li key={`${project.id}_owner_${key}`}>{key}: {project.owner[key]}</li>
                        ))}
                      </ul>
                    </li>
                    {keys
                      .filter(
                        (key) =>
                          typeof project[key] !== "object" &&
                          key.constructor !== Object
                      )
                      .map((key) => (
                        <li key={`${project.id}_${key}`}>
                          {key}: {project[key]}
                        </li>
                      ))}
                  </ul>
                </li>
              );
            })
          : "loading"}
      </ul>
    </section>
  );
}

export default Projects;
