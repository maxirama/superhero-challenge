import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import axios, { Axios } from "axios";

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
  console.log();
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

  return (
    <div>
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
          <Form>
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
