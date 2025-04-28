import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsFetcherProvider from "./context/newsFetcher";
import HomePage from "./pages/homePage";
import NewsCategory from "./pages/categoryPage";
import HaveNews from "./pages/haveNews";
import { AuthProvider } from "./util/authContext";
import ProtectedRoute from "./util/protectedRoute";
import AddNews from "./pages/addNews";
import ResetPassword from "./pages/resetPassword";
import LoginPage from "./pages/login";
import AdminContact from "./pages/adminContact";
import AdminSuggestion from "./pages/adminSuggestion";
import AdminHaveNews from "./pages/adminHaveNews";
import News from "./pages/news";
import Dashboard from "./pages/dashboard";
import "./App.css";
import NoPage from "./pages/noPage";
import AddUser from "./pages/addUser";

const App = () => {
  return (
    <BrowserRouter>
      <NewsFetcherProvider>
        <AuthProvider>
          <Routes>
            <Route path="/admin" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="category/:categoryName" element={<NewsCategory />} />
            <Route path="/haveNews" element={<HaveNews />} />
            <Route path="" element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/adminnews" element={<News />} />
              <Route path="/addnews" element={<AddNews />} />
              <Route path="/adduser" element={<AddUser />} />
              
              <Route path="/adminHaveNews" element={<AdminHaveNews />} />
              <Route path="/adminContact" element={<AdminContact />} />
              <Route path="/adminSuggestion" element={<AdminSuggestion />} />
            </Route>
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/*" element={<NoPage/>}/>
          </Routes>
        </AuthProvider>
      </NewsFetcherProvider>
    </BrowserRouter>
  );
};

export default App;
