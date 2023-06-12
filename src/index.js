// React and Router
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// Styles
import "./index.css";
// Web Vitals
import reportWebVitals from "./reportWebVitals";
// Context
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";
import { PostDataProvider } from "./contexts/PostDataContext";
import { AuthProvider } from "./contexts/AuthContext";


ReactDOM.render(

    <Router>
      <AuthProvider>
      <CurrentUserProvider>
      <ProfileDataProvider>
      <PostDataProvider>
        <App />
        </PostDataProvider>
      </ProfileDataProvider>
      </CurrentUserProvider>
      </AuthProvider>
    </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


