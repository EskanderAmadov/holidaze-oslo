import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    try {
      const userData = await registerUser(values);
      login(userData); // Automatically log in the user
      navigate("/profile");
    } catch (error) {
      setErrors({ email: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .matches(/@stud\.noroff\.no$/, "Must use a stud.noroff.no email")
      .required("Email is required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Password is required"),
    avatar: Yup.string().url("Must be a valid image URL").optional(),
    venueManager: Yup.boolean(), // Checkbox
  });

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          avatar: "",
          venueManager: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Avatar URL (optional)</label>
              <Field type="url" name="avatar" className="form-control" />
              <ErrorMessage name="avatar" component="div" className="text-danger" />
            </div>

            <div className="form-check mb-3">
              <Field type="checkbox" name="venueManager" className="form-check-input" id="venueManager" />
              <label className="form-check-label" htmlFor="venueManager">
                Register as venue manager
              </label>
            </div>

            <button type="submit" className="btn btn-success" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
