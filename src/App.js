// Styles
import styles from "./App.module.css";
// React and Router
import { Route, Switch } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Container from "react-bootstrap/Container";
// API
import './api/axiosDefaults';
// Notifications
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
// API
import axios from "axios";

import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
  <CurrentUserContext.Provider value={currentUser}>
  <SetCurrentUserContext.Provider value={setCurrentUser}>
  <div className={styles.App}>
      <NavBar />
      <NotificationContainer />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignIn/>} />
          <Route exact path="/signup" render={() => <SignUp/>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
    </SetCurrentUserContext.Provider>
  </CurrentUserContext.Provider>

  );
}

export default App;