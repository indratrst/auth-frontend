import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await axios.get("http://localhost:5000/projects");
    setProjects(response.data);
  };

  const deleteProject = async (projectId) => {
    await axios.delete(`http://localhost:5000/projects/${projectId}`);
    getProjects();
  };

  return (
    <div>
      <h1 className="title">Projects</h1>
      <h2 className="subtitle">List of Projects</h2>
      <Link to="/projects/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Project Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.uuid}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>
                <figure className="image is-64x64">
                  <img src={project.url} alt="Image" />
                </figure>
              </td>
              <td>{project.link}</td>
              <td>
                <Link
                  to={`/projects/edit/${project.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProject(project.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
