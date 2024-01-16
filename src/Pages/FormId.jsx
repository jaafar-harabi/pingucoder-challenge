import {useParams,useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card, CardBody, Input, Button } from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import {updateItem,getItemById} from '../API/api'

const FormId = () => {


  const {id} =useParams()
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number()
      .required('Please supply your age')
      .min(18, 'You must be at least 18 years')
      .max(100, 'You must be at most 100 years'),
  });

  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      age: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await updateItem(id, { ...values });
        toast.success('Data Updated');
        navigate('/view');
      } catch (error) {
        console.error('Error updating data:', error);
        toast.error('Error updating data');
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const res = await getItemById(id);
          formik.setValues(res.data)

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <Card className="w-96 mb-10 bg-blue-gray-100 mx-auto mt-36 ">
      <Toaster position="top-right" toastOptions={{ className: 'mt-20' }} />
      <CardBody>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <Input
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}

          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}

          <Input
            label="Age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.touched.age && formik.errors.age && (
            <div className="text-red-500">{formik.errors.age}</div>
          )}

          <Button
            type="submit"
            variant="gradient"
            fullWidth
            className="mt-5"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Updating...' : 'Update'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default FormId;