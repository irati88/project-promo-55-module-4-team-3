import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../services/api.js";

import Header from "../components/Header";
import Preview from "../components/Preview";
import Form from "../components/Form";
import Footer from "../components/Footer";

import ls from "../services/localStorage";

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

  useEffect(() => {
    const savedForm = ls.get("formData", null);
    if (savedForm) setFormData(savedForm);

    const savedProjectImg = ls.get("projectImage", null);
    if (savedProjectImg) setProjectImage(savedProjectImg);

    const savedAuthorImg = ls.get("authorImage", null);
    if (savedAuthorImg) setAuthorImage(savedAuthorImg);
  }, []);

  const updateForm = (ev) => {
    const { name, value } = ev.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);
    ls.set("formData", updatedData);
  };

  const updateProjectImage = (base64Image) => {
    setProjectImage(base64Image);
    ls.set("projectImage", base64Image);
  };

  const updateAutorImg = (base64Image) => {
    setAuthorImage(base64Image);
    ls.set("authorImage", base64Image);
  };

  const handleSaveProject = () => {
    addProject({
      ...formData,
      photo: projectImage,
      image: authorImage,
    })
      .then(() => {
        handleResetForm();
        navigate("/list");
      })
      .catch((error) => {
        throw new Error("Error al guardar el proyecto: " + error.message);
      });
  };

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
      <div className="layout">
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
      </div>
      <Footer />
    </>
  );
};

export default AddProjectPage;
