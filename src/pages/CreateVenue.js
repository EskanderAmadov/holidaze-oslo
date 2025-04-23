import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const CreateVenue = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    media: [""],
    price: "",
    maxGuests: "",
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    media: Yup.array().of(Yup.string().url("Must be valid URL")),
    price: Yup.number().positive("Must be positive").required(),
    maxGuests: Yup.number().min(1).required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const venueData = {
        ...values,
        media: values.media.filter((url) => url !== ""),
        meta: {
          wifi: values.wifi,
          parking: values.parking,
          breakfast: values.breakfast,
          pets: values.pets,
        },
      };

      await api.post("/holidaze/venues", venueData);
      navigate("/admin");
    } catch (error) {
      console.error("Error creating venue:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Venue</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Description</label>
              <Field name="description" as="textarea" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Media URL</label>
              <Field name="media[0]" className="form-control" />
              <ErrorMessage name="media[0]" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Price per night</label>
              <Field name="price" type="number" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Max Guests</label>
              <Field name="maxGuests" type="number" className="form-control" />
              <ErrorMessage name="maxGuests" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-check">
                <Field type="checkbox" name="wifi" className="form-check-input" />
                Wi-Fi
              </label>
              <label className="form-check">
                <Field type="checkbox" name="parking" className="form-check-input" />
                Parking
              </label>
              <label className="form-check">
                <Field type="checkbox" name="breakfast" className="form-check-input" />
                Breakfast
              </label>
              <label className="form-check">
                <Field type="checkbox" name="pets" className="form-check-input" />
                Pets
              </label>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Venue"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateVenue;
