const { createContext, useContext } = require("react");

const AutheContext = createContext();

export function AuthProvider({ children, value }) {
  return (
    <AutheContext.Provider value={value}>{children}</AutheContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AutheContext);
}
