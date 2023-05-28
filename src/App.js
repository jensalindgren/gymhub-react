// Styles
import styles from "./App.module.css";
// React and Router
import { Route, Switch, useLocation } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Container from "react-bootstrap/Container";
import PageNotFound from "./components/PageNotFound";
import GymHubPage from "./pages/gymhub/GymHubPage";
import PostCreateForm from "./pages/posts/PostCreateForm";
// API
import './api/axiosDefaults';
// Notifications
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  const location = useLocation();

  let gymPage = true;
  let mainSite = false;

  if (location.pathname === "/") {
    gymPage = true;
    mainSite = false;
  } else {
    gymPage = false;
    mainSite = true;
  }

  return (
  <div className={styles.App}>
    {gymPage && (
      <>
      <NavBar />
      <NotificationContainer />
      <Switch>
        <Route exact path="/" render={() => <GymHubPage/>} />
      </Switch>
      <Footer />
      </>
    )}
    {mainSite && (
      <>
      <NavBar />
      <NotificationContainer />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/home" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignIn/>} />
          <Route exact path="/signup" render={() => <SignUp/>} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </Container>
      <Footer />
      </>
    )}
    </div>
  );
}

export default App;