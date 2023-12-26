import { Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/LoginPage/Login.component";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={"/login"} exact component={Login} />
      <Route path={"/"} exact component={LandingPage} />
    </Switch>
  );
};

export default AppRoutes;
