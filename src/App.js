import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage"; 
import InterviewPage from './pages/InterviewPage';
import ResultPage from './pages/ResultPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* 홈 페이지 경로 */}
                <Route path="/" element={<Home />} />

                {/* 로그인 페이지 경로 */}
                <Route path="/login" element={<LoginPage />} />

                {/* 인터뷰 페이지 경로 */}
                <Route path="/interview" element={<InterviewPage />} />

                {/* 결과 페이지 경로 */}
                <Route path="/results" element={<ResultPage />} />

            </Routes>
        </Router>
    );
}

export default App;