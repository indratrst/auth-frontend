// import React, { useEffect } from "react";
// import Layout from "./Layout";
// import FormEditProject from "../components/FormEditProject";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

// const EditProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isError } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getMe());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isError) {
//       navigate("/");
//     }
//   }, [isError, navigate]);
//   return (
//     <Layout>
//       <FormEditProject />
//     </Layout>
//   );
// };

// export default EditProject;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormEditProject from "../../../components/admin/projectComponent/FormEditProject";
import { getMe } from "../../../features/authSlice";
import Layout from "../Layout";

const EditProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <FormEditProject />
    </Layout>
  );
};

export default EditProject;