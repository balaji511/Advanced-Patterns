import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  if (localStorage.getItem("token") === undefined) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
