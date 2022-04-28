import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {questions} from "./constants";

const App: React.FC = () => {
    return <Router>
        <Routes>
            {questions.map((question, key) => <Route key={key} path={question.link} element={<div>{question.name}</div>} />)}
            <Route path="*" element={<LandingPage />}></Route>
        </Routes>
    </Router>;
};

export default App;
