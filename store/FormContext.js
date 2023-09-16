import { createContext, useContext, useEffect, useState } from "react";

import { getStepsArray, getAddonsArray } from "./data.services";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [formAnswers, setFormAnswers] = useState({});
  const [steps, setSteps] = useState([]);
  const [addonsList, setAddonsList] = useState({});
  const [formError, setFormError] = useState({});

  useEffect(() => {
    console.log("call form header");

    // get form answers from localstorage
    initialAnswerHandler();
  }, []);

  const checkAppLocalStorage = () => {
    const isAnswersEmpty = !localStorage.getItem("formAnswers");
    return { isAnswersEmpty };
  };

  const initialAnswerHandler = () => {
    async function getFormAnswers() {
      return new Promise((resolve, reject) => {
        const storedAnswers = localStorage.getItem("formAnswers");

        if (storedAnswers) {
          const answers = JSON.parse(storedAnswers);
          resolve(answers);
        } else {
          reject("formAnswers not found in localStorage");
        }
      });
    }

    async function initializeApp() {
      try {
        const formAnswers = await getFormAnswers();
        const appSteps = await getStepsArray();
        const addons = await getAddonsArray();
        // Now you have the formAnswers data, and you can use it for initialization
        setSteps(appSteps);
        setFormAnswers(formAnswers);
        setAddonsList(addons);
        console.log({ formAnswers });

        // Perform your app initialization here, using formAnswers as needed
      } catch (error) {
        // Handle the case where formAnswers are not found in localStorage
        console.error(error);
      }
    }
    // Call the initializeApp function to start the initialization process
    initializeApp();
  };

  const formValidate = (step) => {
    if (step === 1) {
      // Initialize an object to accumulate error messages
      let errors = {};

      if (
        formAnswers[step]?.name === undefined ||
        formAnswers[step]?.name === ""
      ) {
        errors = { ...errors, name: true };
      }
      if (
        formAnswers[step]?.email === undefined ||
        formAnswers[step]?.email === ""
      ) {
        errors = { ...errors, email: true };
      }
      if (
        formAnswers[step]?.phone === undefined ||
        formAnswers[step]?.phone === ""
      ) {
        errors = { ...errors, phone: true };
      }

      // Update the formError state once with the accumulated errors
      if (Object.keys(errors).length === 0) {
        localStorage.setItem("formAnswers", JSON.stringify(formAnswers));
        setFormError({});
        setActiveStep(step + 1);
      } else {
        setFormError(errors);
      }
    } else if (step === 2) {
      setActiveStep(step + 1);
    }
  };

  return (
    <FormContext.Provider
      value={{
        activeStep,
        setActiveStep,
        formAnswers,
        setFormAnswers,
        steps,
        formValidate,
        formError,
        addonsList,
      }}>
      {formAnswers !== undefined && children}
    </FormContext.Provider>
  );
};
