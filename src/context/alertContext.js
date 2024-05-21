import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (message) => setState({ isOpen: true, message }),
        onClose: () => setState({ isOpen: false, message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
