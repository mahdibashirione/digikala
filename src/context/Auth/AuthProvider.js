import React, { useEffect, useState } from "react";

const AuthContext = React.createContext()
const AuthContextDispatcher = React.createContext()


const AuthProvider = ({ children }) => {

  const [state, setState] = useState(false)

  useEffect(() => {
    const getAuthLocalStorage = JSON.parse(localStorage.getItem("AuthState"))
    getAuthLocalStorage && setState(getAuthLocalStorage)
  }, [])

  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatcher.Provider value={setState}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext)
export const useAuthAction = () => React.useContext(AuthContextDispatcher)
