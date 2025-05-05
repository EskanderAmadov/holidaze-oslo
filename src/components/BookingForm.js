import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const BookingForm = ({ venueId }) => {
  const { user } = useAuth();
  const [disabledDates, setDisabledDates] = useState([]);

  // Hent eksisterende bookinger og marker opptatte datoer
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get(`/holidaze/venues/${venueId}?_bookings=true`);
        const bookings = res.data.bookings;

        const datesToDisable = bookings.flatMap((booking) => {
          const start = new Date(booking.dateFrom);
          const end = new Date(booking.dateTo);
          const dates = [];
          for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            dates.push(new Date(d));
          }
          return dates;
        });

        setDisabledDates(datesToDisable);
      } catch (error) {
        console.error("Failed to load booked dates", error);
      }
    };

    fetchBookings();
  }, [venueId]);

  const initialValues = {
    dateFrom: null,
    dateTo: null,
    guests: 1,
  };

  const validationSchema = Yup.object({
    dateFrom: Yup.date().required("Start date required"),
    dateTo: Yup.date()
      .min(Yup.ref("dateFrom"), "End date must be after start date")
      .required("End date required"),
    guests: Yup.number().min(1).required("Guests required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const bookingData = {
      dateFrom: values.dateFrom.toISOString(),
      dateTo: values.dateTo.toISOString(),
      guests: values.guests,
      venueId: venueId,
    };

    try {
      await api.post("/holidaze/bookings", bookingData);
      alert("Booking successful!");
      resetForm();
    } catch (error) {
      alert("Booking failed. Please try again.");
      console.error("Booking error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="alert alert-warning mt-4" role="alert">
        Please <strong>log in</strong> to make a booking.
      </div>
    );
  }

  return (
    <div className="card mt-4 p-3">
      <h4>Book this venue</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>From:</label>
              <DatePicker
                selected={values.dateFrom}
                onChange={(date) => setFieldValue("dateFrom", date)}
                className="form-control"
                minDate={new Date()}
                excludeDates={disabledDates}
              />
              <ErrorMessage name="dateFrom" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>To:</label>
              <DatePicker
                selected={values.dateTo}
                onChange={(date) => setFieldValue("dateTo", date)}
                className="form-control"
                minDate={values.dateFrom || new Date()}
                excludeDates={disabledDates}
              />
              <ErrorMessage name="dateTo" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Guests:</label>
              <Field name="guests" type="number" className="form-control" />
              <ErrorMessage name="guests" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
