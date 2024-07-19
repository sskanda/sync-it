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

function App() {
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
