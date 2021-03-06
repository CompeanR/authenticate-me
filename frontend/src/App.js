import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation />

        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
