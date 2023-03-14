import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const AchieveList = () => {
  const [achieve, setAchieve] = useState([]);

  useEffect(() => {
    getAchieve();
  }, []);

  const getAchieve = async () => {
    const response = await axios.get("http://localhost:5000/achieve");
    setAchieve(response.data);
  };

  const deleteAchieve = async (achieveId) => {
    await axios.delete(`http://localhost:5000/achieve/${achieveId}`);
    getAchieve();
  };

  return (
    <div>
      <h1 className="title">Achieves</h1>
      <h2 className="subtitle">List of Achieves</h2>
      <Link to="/achieve/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Achieve Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {achieve.map((item, index) => (
            <tr key={item.uuid}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <figure className="image is-64x64">
                  <img src={item.url} alt="Image" />
                </figure>
              </td>
              <td>{item.link}</td>
              <td>
                <Link
                  to={`/achieve/edit/${item.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteAchieve(item.uuid)}
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

export default AchieveList;
