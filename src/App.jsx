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
import PoliticsPage from "./pages/newsCategory/politics";
import AdminContact from "./pages/adminContact/adminContact";
import AdminSuggestion from "./pages/adminSuggestion/adminSuggestion";
import ResetPassword from "./component/resetPassword/resetPassword";
import "./App.css"

function App() {
    return (
        <Router>
            <NewsFetcherProvider>
            <AuthProvider>
                <Routes>
                    <Route path="/News_Portal/admin" element={<LoginPage />} />
                    <Route path="/News_Portal/haveNews" element={<AlertNews/>}/>                   
                    <Route path="/News_Portal" element={<HomePage />} />
                    <Route path="/News_Portal/technology" element={<Technology/>}/>                  
                    <Route path="/News_Portal/entertainment" element={<EntertainmentPage />} />
                    <Route path="/News_Portal/sport" element={<Sport />} />
                    <Route path="/News_Portal/education" element={<Education/>}/>
                    <Route path="/News_Portal/politics" element={<PoliticsPage/>}/> 
                    <Route path="" element={<ProtectedRoute />}>
                        <Route path="/News_Portal/dashboard" element={<Dashboard/>}/>
                        <Route path="/News_Portal/addNews" element={<AddNews />} />
                        <Route path="/News_Portal/addUser" element={<AddUser />} />
                        <Route path="/News_Portal/traffic" element={<Traffic/>}/>
                        <Route path="/News_Portal/adminNews" element={<News/>}/>
                        <Route path="/News_Portal/adminHaveNews" element={<AdminHaveNews/>}/>
                        <Route path="/News_Portal/adminContact" element={<AdminContact/>}/>
                        <Route path="/News_Portal/adminSuggestion" element={<AdminSuggestion/>}/>
                    </Route>
                    <Route path="/*" element={<NoPage/>}/>
                    <Route path="/News_Portal/suggestion" element={<Suggestion/>}/>
                    <Route path="/News_Portal/reset" element={<ResetPassword/>}/>
                    
                </Routes>
            </AuthProvider>
            </NewsFetcherProvider>
        </Router>
    );
}

export default App;
