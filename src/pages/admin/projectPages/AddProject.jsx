import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormAddProject from '../../../components/admin/projectComponent/FormAddProject';
import { getMe } from '../../../features/authSlice';
import Layout from '../Layout';

const AddProject = () => {
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
      <FormAddProject />
    </Layout>
  );
};
  


export default AddProject