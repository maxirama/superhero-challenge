import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import axios, { Axios } from "axios";
import Menu from "../components/Navbar.js";
import { Container, Row, Col, Stack } from "react-bootstrap";

/*Forms allows us to send (POST) information to the server to create something.*/
/* Formik is a library that allows us to deal with forms in React. When dealing 
with forms in vanilla React there is three annoyances you have to deal with:
-Getting data in and out of a form state.
-Validating the error messages.
-Handling form submissions.
Formik put all this things togheter in a very very simple and less verbose way.
*/

/* Yup is a library that facilitates various validation tasks.

*/

const TOKEN_URL = "http://challenge-react.alkemy.org/";
export default function Login() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Introduce a valid email").required("Required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters long")
      .max(12, "Password must not exceed 12 characters long")
      .required("Required"),
  });

  const getToken = (credentials) => {
    return axios.post(TOKEN_URL, credentials);
  };

  const saveToken = (request) => {
    request
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("superHeroToken", token);
        console.log(localStorage);
      })
      .catch((error) => {
        //  Add error managment.
        console.log(error);
      });
  };

  // Agregar logica de redireccion al submittear validamente

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          /*
            Save the TOKEN in the local storage in this function.
          */
          saveToken(getToken(values));
        }}
        // Bind values to the HTML forms.
      >
        {({ errors, touched }) => (
          <Stack gap={4} className="col-md-4 mx-auto">
            <h1 className="py-2">Login</h1>
            <Form>
              <div>
                <label className="d-block" htmlFor="email">
                  Email{" "}
                </label>
                <Field name="email" />
                <div>
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <label className="d-block" htmlFor="password">
                  Password{" "}
                </label>
                <Field name="password" />
                {errors.password && touched.password ? (
                  <div className="text-danger">{errors.password}</div>
                ) : null}
              </div>

              <button className="btn btn-primary my-3" type="submit">
                Submit
              </button>
            </Form>
          </Stack>
        )}
      </Formik>
    </Container>
  );
}
