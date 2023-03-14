import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormAddAchieve from '../../../components/admin/achieveComponent/FormAddAchieve';
import { getMe } from '../../../features/authSlice';
import Layout from '../Layout';

const AddAchieve = () => {
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
      <FormAddAchieve />
    </Layout>
  );
};
  


export default AddAchieve