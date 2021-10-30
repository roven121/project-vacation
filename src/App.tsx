import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./components/Login/LoginForm";
import { RegisterForm } from "./components/Register/RegisterForm";

import { Container, Row, Col } from "react-bootstrap";

import { Navigator } from "./components/welecomePage/navigator";
import { RenderVacationsCard } from "./components/VacationsCard/RenderVacationsCard";
import { JwtContext } from "./components/Context/JwtContext";

const App: React.FC = () => {
  const [Jwt, setJwt] = useState("");
console.log(Jwt);

  return (
    <JwtContext.Provider value={{ Jwt, setJwt: setJwt as any }}>
      <Container>
        <Router>
          <Navigator />
          <Switch>
            <Route path="/login-page">
              <LoginForm />
            </Route>

            <Route path="/register-page">
              <RegisterForm />
            </Route>
            <Route path="/vacations">
              <RenderVacationsCard />
            </Route>
          </Switch>
        </Router>
      </Container>
    </JwtContext.Provider>
  );
};

export default App;
function setJwt(arg0: string) {
  throw new Error("Function not implemented.");
}
