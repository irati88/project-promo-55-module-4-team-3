import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header.jsx";
import Preview from "../components/Preview.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer";
import { addProject } from "../services/api.js";

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

  // Cargo los datos dle formulario desde el localStorage
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  // Guardo en el localStorage cada vez que cambia
  const updateForm = (ev) => {
    const { name, value } = ev.target;
    const updateData = {
      ...formData,
      [name]: value,
    };
    setFormData(updateData);

    localStorage.setItem("formData", JSON.stringify(updateData));
  };

  // Guardo el proyecto en la API
  const handleSaveProject = async () => {
    try {
      await addProject({
        ...formData,
        photo: projectImage,
        image: authorImage,
      });
      // reseteamos estado
      handleResetForm();
      navigate("/list");
    } catch (error) {
      console.log("errorsito", error);
    }
  };

  // Reseteo el form
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
    localStorage.clear();
  };

  const updateProjectImage = (base64Image) => {
    setProjectImage(base64Image);
    localStorage.setItem("projectImage", JSON.stringify(base64Image));
  };

  const updateAutorImg = (base64Image) => {
    setAuthorImage(base64Image);
    localStorage.setItem("authorImage", JSON.stringify(base64Image));
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
