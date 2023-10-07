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

  async function getFormAnswers() {
    return new Promise((resolve, reject) => {
      const storedAnswers = localStorage.getItem("formAnswers")
        ? localStorage.getItem("formAnswers")
        : localStorage.setItem("formAnswers", JSON.stringify(formAnswers));

      if (storedAnswers) {
        const answers = JSON.parse(storedAnswers);
        resolve(answers);
      } else {
        resolve({});
      }
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data
        const [formAnswersData, appSteps, addons] = await Promise.all([
          getFormAnswers(),
          getStepsArray(),
          getAddonsArray(),
        ]);

        // Update state
        setFormAnswers(formAnswersData);
        setSteps(appSteps);
        setAddonsList(addons);
      } catch (error) {
        // Handle errors if necessary
        console.error(error);
      }
    }

    fetchData(); // Call the fetchData function

    // Additional initialization code can go here
  }, []);

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
      localStorage.setItem("formAnswers", JSON.stringify(formAnswers));
      setActiveStep(step + 1);
    } else if (step === 3) {
      localStorage.setItem("formAnswers", JSON.stringify(formAnswers));
      setActiveStep(step + 1);
    } else if (step === 4) {
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
      {children}
    </FormContext.Provider>
  );
};
