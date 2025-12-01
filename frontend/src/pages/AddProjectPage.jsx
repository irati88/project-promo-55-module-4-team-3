import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header.jsx";
import Preview from "../components/Preview.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer";
import { addProject } from "../services/api.js";
import ls from "../services/localStorage.js";

import "../styles/form.css";
import "../styles/add-project-page.css";

const AddProjectPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    description: "",
    autor: "",
    job: "",
  });

  const [projectImage, setProjectImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);

  // Cargamos formData + imágenes desde localStorage al iniciar
  useEffect(() => {
    const savedForm = ls.get("formData", null);
    if (savedForm) setFormData(savedForm);

    const savedProjectImg = ls.get("projectImage", null);
    if (savedProjectImg) setProjectImage(savedProjectImg);

    const savedAuthorImg = ls.get("authorImage", null);
    if (savedAuthorImg) setAuthorImage(savedAuthorImg);
  }, []);

  // Guardamos cambios de texto en localStorage
  const updateForm = (ev) => {
    const { name, value } = ev.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);
    ls.set("formData", updatedData);
  };

  // Guardamos imágenes también en localStorage
  const updateProjectImage = (base64Image) => {
    setProjectImage(base64Image);
    ls.set("projectImage", base64Image);
  };

  const updateAutorImg = (base64Image) => {
    setAuthorImage(base64Image);
    ls.set("authorImage", base64Image);
  };

  // Guardamos el proyecto en la API
  const handleSaveProject = async () => {
    try {
      await addProject({
        ...formData,
        photo: projectImage,
        image: authorImage,
      });

      handleResetForm();
      navigate("/list");

    } catch (error) {
      console.log("Error al guardar:", error);
    }
  };

  // Reseteo completo
  const handleResetForm = () => {
    setFormData({
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      description: "",
      autor: "",
      job: "",
    });

    setProjectImage(null);
    setAuthorImage(null);

    ls.clear();
  };

  return (
    <>
      <Header />
      <Preview
        formData={formData}
        authorImage={authorImage}
        projectImage={projectImage}
      />
      <Form
        formData={formData}
        updateForm={updateForm}
        updateProjectImage={updateProjectImage}
        updateAutorImg={updateAutorImg}
        handleSaveProject={handleSaveProject}
        handleResetForm={handleResetForm}
      />
      <Footer />
    </>
  );
};

export default AddProjectPage;
