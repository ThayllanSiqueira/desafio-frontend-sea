import { createContext, useState, useContext, useCallback } from 'react';

const EditEmployeeContext = createContext();

export const EditEmployeeProvider = ({ children }) => {
 const [editData, setAllEditData] = useState({
  setIsButtonNextStepDisabled: undefined,
  enableIcons: undefined,
  stepConcluded: undefined,
  next: undefined,
  prev: undefined,
  setItems: undefined,
  setCurrent: undefined,
  current: undefined,
  steps: undefined,
  setIsEmployeeFormVisible: undefined,
 });

 const setEditData = useCallback((newData) => {
  setAllEditData((prevData) => ({
   ...prevData,
   ...newData,
  }));
 }, []);

 return (
  <EditEmployeeContext.Provider value={{ editData, setEditData }}>
   {children}
  </EditEmployeeContext.Provider>
 );
};

export const useEditContext = () => {
 return useContext(EditEmployeeContext);
};
