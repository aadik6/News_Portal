import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import EntertainmentPage from "./pages/newsCategory/entertainment";
import Sport from "./pages/newsCategory/sport";
import AddNews from "./pages/addNews/addNews";
import ProtectedRoute from './util/protectedRoute'
import AddUser from "./pages/addUser/addUser";
import LoginPage from "./pages/login/login";
import { AuthProvider } from "./util/authContext";
import Dashboard from "./pages/dashboard/dashboard";
import NewsFetcherProvider from "./context/newsFetcher";
import AlertNews from "./pages/haveNews/haveNews";
import NoPage from "./pages/noPage/noPage";
import Traffic from "./pages/traffic/traffic";
import Suggestion from "./pages/suggetion/suggestion"
import News from "./pages/news/news";
import AdminHaveNews from "./pages/adminHaveNews/adminHaveNews";
import Technology from "./pages/newsCategory/technology";
import Education from "./pages/newsCategory/education";

function App() {
    return (
        <Router>
            <NewsFetcherProvider>
            <AuthProvider>
                <Routes>
                    <Route path="/admin" element={<LoginPage />} />
                    <Route path="/haveNews" element={<AlertNews/>}/>                   
                    <Route path="/" element={<HomePage />} />
                    <Route path="/technology" element={<Technology/>}/>                  
                    <Route path="/entertainment" element={<EntertainmentPage />} />
                    <Route path="/sport" element={<Sport />} />
                    <Route path="/education" element={<Education/>}/>
                    <Route path="" element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/addNews" element={<AddNews />} />
                        <Route path="/addUser" element={<AddUser />} />
                        <Route path="/traffic" element={<Traffic/>}/>
                        <Route path="/adminNews" element={<News/>}/>
                        <Route path="/adminHaveNews" element={<AdminHaveNews/>}/>
                    </Route>
                    <Route path="/*" element={<NoPage/>}/>
                    <Route path="/suggestion" element={<Suggestion/>}/>
                    
                </Routes>
            </AuthProvider>
            </NewsFetcherProvider>
        </Router>
    );
}

export default App;
