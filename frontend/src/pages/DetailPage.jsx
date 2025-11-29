import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { getProject } from "../services/api";
import Header from "../components/Header";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/preview.css";
import "../styles/preview-project-image.css";
import "../styles/preview-card.css";

const DetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject(id).then((data) => setProject(data));
  }, [id]);

  if (!project) return <p>Proyecto no encontrado</p>;
  
  return (
    <>
      <Header />
      <Preview
        formData={project}
        projectImage={project.projectImage}
        authorImage={project.authorImage}
      />
      <Footer />
    </>
  );
};

export default DetailPage;
