// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const FormEditProject = () => {
//   const [title, setName] = useState("");
//   const [description, setPrice] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const getProjectById = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/products/${id}`
//         );
//         setName(response.data.title);
//         setPrice(response.data.description);
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     };
//     getProjectById();
//   }, [id]);

//   const updateProject = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(`http://localhost:5000/products/${id}`, {
//         title: title,
//         description: description,
//       });
//       navigate("/products");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Projects</h1>
//       <h2 className="subtitle">Edit Project</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={updateProject}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={title}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Project Name"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Price</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={description}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="Price"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormEditProject;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProjectById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/projects/${id}`
        );
        setTitle(response.data.title);
        setDesc(response.data.description);
        setPreview(response.data.url);
        setLink(response.data.link);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProjectById();
  }, [id]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProject = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("link", link);
    try {
      await axios.patch(`http://localhost:5000/projects/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
        // title: title,
        // description: description,
      });
      navigate("/projects");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Projects</h1>
      <h2 className="subtitle">Edit Project</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProject}>
              <p className="has-text-centered">{msg}</p>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Title project"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input
                        type="file"
                        className="file-input"
                        onChange={loadImage}
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose a file...</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="Preview Image" />
                </figure>
              ) : (
                ""
              )}
              <div className="field">
                <label className="label">Link</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Price"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProject;
