import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {questions} from "./constants";
import BaseQuestionPage from "./questions/BaseQuestionPage";
import {IQuestion} from "./types/IQuestion";

const App: React.FC = () => {
    const RenderQuestion = (question: IQuestion, key: number) =>
        <Route key={key} path={question.link} element={<BaseQuestionPage question={question} />} />;

    return <Router>
        <Routes>question
            {questions.map(RenderQuestion)}
            <Route path="*" element={<LandingPage />}></Route>
        </Routes>
    </Router>;
};

export default App;
