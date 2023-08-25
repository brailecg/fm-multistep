import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <FormContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </FormContext.Provider>
  );
};
