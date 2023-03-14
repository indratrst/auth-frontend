// import React, { useEffect } from "react";
// import Layout from "./Layout";
// import FormEditAchieve from "../components/FormEditAchieve";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

// const EditAchieve = () => {
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
//       <FormEditAchieve />
//     </Layout>
//   );
// };

// export default EditAchieve;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormEditAchieve from "../../../components/admin/achieveComponent/FormEditAchieve";
import { getMe } from "../../../features/authSlice";
import Layout from "../Layout";

const EditAchieve = () => {
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
      <FormEditAchieve />
    </Layout>
  );
};

export default EditAchieve;