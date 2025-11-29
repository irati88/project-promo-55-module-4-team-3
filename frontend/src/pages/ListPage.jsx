import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import PreviewCard from "../components/PreviewCard.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/list-page.css";

const defaultProjects = [
  
];

const ListPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));

    if (!storedProjects || storedProjects.length === 0) {
      localStorage.setItem("projects", JSON.stringify(defaultProjects));
      setProjects(defaultProjects);
    } else {
      setProjects(storedProjects);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Link to="/">
          <button>Nuevo proyecto</button>
        </Link>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/detail/${project.id}`}>
                <PreviewCard
                  formData={project}
                  authorImage={project.authorImage}
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ListPage;
