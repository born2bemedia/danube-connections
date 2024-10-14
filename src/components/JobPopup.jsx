"use client";
import "@/styles/order-popup.scss";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import CheckboxIcon from "@/icons/CheckboxIcon";

function JobPopup() {
  const { jobPopupDisplay, setJobPopupDisplay, currentService } = usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    skills: Yup.string().required("This field is required."),
    letter: Yup.string().required("This field is required."),
    position: Yup.string().required("This field is required."),
    agreeToTerms: Yup.bool().oneOf([true], "This field is required."),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skills: "",
    letter: "",
    position: "",
    cv: null,
    agreeToTerms: false,
  };

  const closePopup = (resetForm) => {
    setJobPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      service: `${currentService} Request`,
    };

    console.log("Form values being submitted: ", valuesWithService);

    //setSubmitting(false);
    //resetForm();
    //setStatus({ success: true });

    try {

      let cvData = null;
      if (values.cv) {
        cvData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64EncodedData = reader.result;
            resolve({
              base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
              filename: values.cv.name, // Get the filename
              mimetype: values.cv.type, // Get the MIME type
            });
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(values.cv);
        });
      }

      const payload = {
        ...values,
        cv: cvData,
      };

      const response = await fetch("/api/emails/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      //console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`request-popup-wrap ${jobPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
          values,
        }) => {
          const errorCount = Object.keys(errors).length;
          const errorMessage =
            errorCount === 1
              ? "This field is required."
              : errorCount > 1
              ? "These fields are required."
              : "";

          return (
            <div>
              <div
                className="overlay"
                onClick={() => closePopup(resetForm)}
              ></div>
              <div className="popup-inner">
                <img
                  src="/images/closePopup.svg"
                  className="popup-close"
                  alt="popup-close"
                  onClick={() => closePopup(resetForm)}
                />
                <div>
                  <div className="request-form">
                    {status && status.success ? (
                      <div className="success-message">
                        <h2>Thank you for your submission.</h2>
                        <span>
                          We have successfully received your request and will
                          review <br />
                          it promptly. Our team will contact you shortly to
                          proceed <br />
                          with the next steps.
                        </span>
                      </div>
                    ) : (
                      <>
                        <h2 className="service-title">
                          {currentService} Request
                        </h2>

                        <Form>
                          <Field
                            type="hidden"
                            name="service"
                            value={`${currentService} Request`}
                          />
                          <div>
                            <Field
                              name="firstName"
                              type="text"
                              placeholder="First Name"
                              className={
                                touched.firstName && errors.firstName
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <Field
                              name="lastName"
                              type="text"
                              placeholder="Last Name"
                              className={
                                touched.lastName && errors.lastName
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <Field
                              name="skills"
                              type="text"
                              placeholder="Relevant Skills and Expertise"
                              className={
                                touched.skills && errors.skills ? "invalid" : ""
                              }
                            />
                            <ErrorMessage
                              name="skills"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <Field
                              name="position"
                              type="text"
                              placeholder="Position of Interest"
                              className={
                                touched.position && errors.position
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="position"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <Field
                              name="email"
                              type="email"
                              placeholder="Email"
                              className={
                                touched.email && errors.email ? "invalid" : ""
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <PhoneInput
                              country={countryCode}
                              value=""
                              onChange={(value) =>
                                setFieldValue("phone", value)
                              }
                              placeholder="Phone"
                              className={
                                touched.phone && errors.phone ? "invalid" : ""
                              }
                            />
                            <ErrorMessage name="phone" component="span" />
                          </div>

                          <div>
                            <Field
                              name="letter"
                              type="text"
                              placeholder="Cover Letter"
                              className={
                                touched.letter && errors.letter ? "invalid" : ""
                              }
                            />
                            <ErrorMessage
                              name="letter"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div className="form-block">
                            <div className="input-wrap file-wrap">
                              <span
                                className="upload-custom"
                                onClick={() =>
                                  document.getElementById("cv").click()
                                }
                              >
                                <span>
                                  {values.cv ? values.cv.name : "Attach CV"}
                                </span>
                                <div>
                                  <img src="/images/upload.svg" /> Upload
                                </div>
                              </span>
                              <input
                                id="cv"
                                name="cv"
                                type="file"
                                onChange={(event) => {
                                  setFieldValue(
                                    "cv",
                                    event.currentTarget.files[0]
                                  );
                                }}
                                style={{ display: "none" }}
                              />
                              <ErrorMessage name="cv" component="span" />
                            </div>
                          </div>

                          <div className="full checkbox">
                            <Field
                              id="agreeToTerms"
                              name="agreeToTerms"
                              type="checkbox"
                              className={
                                touched.agreeToTerms && errors.agreeToTerms
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <label for="agreeToTerms">
                              <CheckboxIcon />
                              <span>
                                I agree to the processing of my personal data
                                for recruitment purposes and confirm that I have
                                read and agree to the Terms of Use.
                              </span>
                            </label>
                            <ErrorMessage
                              name="agreeToTerms"
                              component="div"
                              className="error"
                            />
                          </div>

                          <button
                            type="submit"
                            className="bordered-button"
                            disabled={isSubmitting}
                          >
                            Apply
                          </button>

                          {errorMessage && (
                            <div className="full error-message">
                              {errorMessage}
                            </div>
                          )}
                        </Form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default JobPopup;
