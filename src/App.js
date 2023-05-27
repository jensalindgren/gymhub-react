// Styles
import styles from "./App.module.css";
// React and Router
import { Route, Switch } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUp";
import Container from "react-bootstrap/Container";
// API
import './api/axiosDefaults';
// Notifications
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <NotificationContainer />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <SignUp/>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;