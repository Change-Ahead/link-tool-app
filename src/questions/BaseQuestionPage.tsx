import React, {useState} from "react";
import {Question} from "../types/Question";
import {Link} from "react-router-dom";
import Page from "../pages/Page";
import "./QuestionPage.css";

function BaseQuestionPage({question}: {question: Question}) {
    const [checkedState, setCheckedState] = useState(
        new Array(question.checkboxes.length).fill(false)
    );
    const [searchLink, updateSearchLink] = useState("/search");

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const searchParams = new URLSearchParams();
        searchParams.append("category", question.name);
        question.checkboxes.forEach((subcategory, index) => {
            if (updatedCheckedState[index]) {
                searchParams.append("subcategory", subcategory);
            }
        });

        updateSearchLink(`/search?${searchParams.toString()}`);
    };

    return <Page>
        <div className="flex flex-col">
            <h2>How can we help you?</h2>
            <h3>Please select from the following:</h3>
            <div className="category">{question.name}</div>
            <div className="pl-4 pr-4">
                {question.checkboxes.map((checkbox, index) => (
                    <div className="mb-4" key={checkbox}>
                        <label className="cursor-pointer">
                            <input
                                type="checkbox"
                                id={`${question.id}-checkbox-${index}`}
                                name={checkbox}
                                value={checkbox}
                                className="mr-4 cursor-pointer"
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            {checkbox}
                        </label>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between bottom-0 absolute w-full p-4 max-w-sm left-1/2 transform -translate-x-1/2">
                <Link to={"/"}>{"<"} Back</Link>
                {checkedState.find(value => value === true) ?  <Link to={searchLink}>Next {">"}</Link> : ""}
            </div>
        </div>
    </Page>;
}
export default BaseQuestionPage;