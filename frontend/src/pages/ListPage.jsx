import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PreviewCard from "../components/PreviewCard";
import Footer from "../components/Footer";
import { getProjects } from "../services/Api";
import "../styles/list-page.css";

const ListPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  console.log(projects);
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
                <PreviewCard formData={project} authorImage={project.image} />
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
