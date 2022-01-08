import { React, useContext } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import axios, { Axios } from "axios";
import Menu from "../components/Navbar.js";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Context from "../context/AuthContext";

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

//  TO DO : change EMAIL/PASSWORDS for icons
// TO DO : Solve the input boxes problem
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
  const auth = useContext(Context);

  return (
    <Container className="text-center my-3">
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
          location.reload(true);
        }}
        // Bind values to the HTML forms.
      >
        {({ errors, touched }) => (
          <Stack
            gap={4}
            className=" my-5 col-md-4 mx-auto shadow-lg border rounded"
          >
            <h1 className="my-2">Login</h1>
            <Form>
              <Container className="d-flex justify-content-center mx-2  py-1">
                <label className="d-block mx-2 px-3" htmlFor="email">
                  Email{" "}
                </label>
                <div className="">
                  <Field className="" name="email" />
                  {errors.email && touched.email ? (
                    <div className="text-danger mx-2">{errors.email}</div>
                  ) : null}
                </div>
              </Container>
              <Container className="d-flex justify-content-center mx-2 py-1">
                <label className="d-block mx-2" htmlFor="password">
                  Password{" "}
                </label>
                <div className="">
                  <Field className="" name="password" />
                  {errors.password && touched.password ? (
                    <div className="text-danger mx-2">{errors.password}</div>
                  ) : null}
                </div>
              </Container>

              <button className="btn btn-primary my-4 px-5" type="submit">
                Submit
              </button>
            </Form>
          </Stack>
        )}
      </Formik>
    </Container>
  );
}
