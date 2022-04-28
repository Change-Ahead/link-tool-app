import React from "react";
import {questions} from "../constants";
import {Question} from "../types/Question";
import {Link} from "react-router-dom";

function LandingPage() {
    const LinkButton = (question: Question) => <Link to={question.link}>{question.name}</Link>;

    return <div>
        <h2>How can we help you?</h2>
        <h3>Please select from the following?</h3>
        {questions.map(LinkButton)}
    </div>;
}

export default LandingPage;