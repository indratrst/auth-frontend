// import React, { useEffect } from "react";
// import Layout from "./Layout";
// import FormAddUser from "../components/FormAddUser";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

// const AddUser = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isError, user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getMe());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isError) {
//       navigate("/");
//     }
//     if (user && user.role !== "admin") {
//       navigate("/dashboard");
//     }
//   }, [isError, user, navigate]);
//   return (
//     <Layout>
//       <FormAddUser />
//     </Layout>
//   );
// };

// export default AddUser;

import React, { useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice.js";
import FormAddUser from "../../../components/admin/userComponent/FormAddUser";

const AddUser = () => {
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
      <FormAddUser />
    </Layout>
  );
};

export default AddUser;