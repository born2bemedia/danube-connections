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

function ConsultationPopup() {
  const {
    consultationPopupDisplay,
    setConsultationPopupDisplay,
    currentService,
  } = usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    company: Yup.string().required("This field is required."),
    industry: Yup.string().required("This field is required."),
    website: Yup.string().required("This field is required."),
    message: Yup.string().required("This field is required."),
    agreeToTerms: Yup.bool().oneOf([true], "This field is required."),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    website: "",
    message: "",
    agreeToTerms: false,
  };

  const closePopup = (resetForm) => {
    setConsultationPopupDisplay(false);
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
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesWithService),
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
    <div
      className={`request-popup-wrap ${
        consultationPopupDisplay ? "opened" : ""
      }`}
    >
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
                              name="company"
                              type="text"
                              placeholder="Company"
                              className={
                                touched.company && errors.company
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="company"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <Field
                              name="website"
                              type="text"
                              placeholder="Website"
                              className={
                                touched.website && errors.website
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="website"
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
                              name="industry"
                              type="text"
                              placeholder="Industry"
                              className={
                                touched.industry && errors.industry
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="industry"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div>
                            <Field
                              name="message"
                              type="text"
                              placeholder="Your message"
                              className={
                                touched.message && errors.message
                                  ? "invalid"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="error"
                            />
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
                                for business purposes and confirm that I have
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
                            Submit Order
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

export default ConsultationPopup;
