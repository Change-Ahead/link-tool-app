import React from "react";
import {questions} from "../constants";
import {Question} from "../types/Question";
import {Link} from "react-router-dom";
import Page from "./Page";
import "./LandingPage.css";

function LandingPage() {
    const LinkButton = (question: Question) => <Link to={question.link} className="homepage-button">{question.name}</Link>;

    return <Page>
        <div className="flex flex-col">
            <h2>How can we help you?</h2>
            <h3>Please select from the following:</h3>
            {questions.map(LinkButton)}
        </div>
    </Page>;
}

export default LandingPage;