// Styles
import styles from "./App.module.css";
// React and Router
import { Route, Switch, useLocation} from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Container from "react-bootstrap/Container";
import PageNotFound from "./components/PageNotFound";
import GymHubPage from "./pages/gymhub/GymHubPage";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostList from "./pages/posts/PostList";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
// API
import './api/axiosDefaults';
// Notifications
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
// Context
import { useCurrentUser } from "./contexts/CurrentUserContext";



function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
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
            <Route exact path="/" render={() => <GymHubPage />} />
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
                <Route
                  exact
                  path="/home"
                  render={() => (
                    <PostList
                      message="No results found. Adjust the search keyword."
                    />
                  )}
                />
                <Route
                  exact
                  path="/feed"
                  render={() => (
                    <PostList
                      message="No results found. Adjust the search keyword or follow a user."
                      filter={`owner__followed__owner__profile=${profile_id}&`}
                    />
                  )}
                />
                <Route
                  exact
                  path="/likes"
                  render={() => (
                    <PostList
                      message="No results found. Adjust the search keyword or like a post."
                      filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                    />
                  )}
                />
                <Route exact path="/signin" render={() => <SignIn />} />
                <Route exact path="/signup" render={() => <SignUp />} />
                <Route
                  exact
                  path="/posts/create"
                  render={() => <PostCreateForm />}
                />
                <Route exact path="/posts/:id" render={() => <PostPage />} />
                <Route
                  exact
                  path="/posts/:id/edit"
                  render={() => <PostEditForm />}
                />
                <Route
                  exact
                  path="/profiles/:id"
                  render={() => <ProfilePage />}
                />

                  <Route
                    exact
                    path="/profiles/:id/edit/username"
                    render={() => <UsernameForm />}
                  />
                  <Route
                    exact
                    path="/profiles/:id/edit/password"
                    render={() => <UserPasswordForm />}
                  />
                  <Route
                    exact
                    path="/profiles/:id/edit"
                    render={() => <ProfileEditForm />}
                  />

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