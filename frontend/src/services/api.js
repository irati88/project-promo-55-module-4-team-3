export const getProjects = () => {
  return fetch("http://localhost:3000/projects")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => {
        return {
          autor: item.autor,
          job: item.job,
          image: item.image,
          id: item.id_project,
          name: item.name,
          slogan: item.slogan,
          technologies: item.technologies,
          photo: item.photo,
          repo: item.repo,
          demo: item.demo,
        };
      });

      return cleanData;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addProject = (data) => {
  return fetch("http://localhost:3000/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      return;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProject = (id) => {
  return fetch(`http://localhost:3000/project/${id}`)
    .then((response) => response.json())
    .then((item) => {
        return {
          autor: item.autor,
          job: item.job,
          image: item.image,
          id: item.id_project,
          name: item.name,
          slogan: item.slogan,
          technologies: item.technologies,
          photo: item.photo,
          repo: item.repo,
          demo: item.demo,
        };
      })
    .catch((error) => console.log(error));
};
