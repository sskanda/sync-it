import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePostPage from "./pages/CreatePostPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PostView from "./pages/PostView";
import SearchView from "./pages/SearchView";
import UserProfile from "./pages/UserProfile";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const logView = async () => {
      try {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/views/viewcount`,
          {
            method: "GET",
          }
        );
      } catch (error) {
        console.error("Error logging view:", error);
      }
    };

    logView();
  }, []); // Runs once on component mount

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/create" element={<CreatePostPage />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
