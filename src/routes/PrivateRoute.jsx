import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { state: { pathname } });
    }
  }, [loading, navigate, user, pathname]);
  return !loading && user && <>{children}</>;
};

export default PrivateRoute;
