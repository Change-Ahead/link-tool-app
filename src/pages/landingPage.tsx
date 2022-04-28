import React from "react";
import {questions} from "../constants";
import {IQuestion} from "../types/IQuestion";

function LandingPage() {
    const LinkButton = (question: IQuestion) => <a href={question.link}>{question.name}</a>;

    return <div>
        <h2>How can we help you?</h2>
        <h3>Please select from the following?</h3>
        {questions.map(LinkButton)}
    </div>;
}

export default LandingPage;