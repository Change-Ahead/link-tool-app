import React, {useState} from "react";
import {Question} from "../types/Question";
import {Link} from "react-router-dom";

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

    return <div>
        <div>{question.name}</div>
        <div>Checkboxes</div>
        {question.checkboxes.map((checkbox, index) => {
            return (
                <li key={index}>
                    <div className="toppings-list-item">
                        <div className="left-section">
                            <input
                                type="checkbox"
                                id={`${question.id}-checkbox-${index}`}
                                name={checkbox}
                                value={checkbox}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>{checkbox}</label>
                        </div>
                    </div>
                </li>
            );
        })}
        <Link to={"/"}>Back</Link>
        <Link to={searchLink}>Next</Link>
    </div>;
}
export default BaseQuestionPage;