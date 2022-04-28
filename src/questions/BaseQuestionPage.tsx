import React, {useState} from "react";
import {Question} from "../types/Question";
import {Link} from "react-router-dom";

function BaseQuestionPage({question}: {question: Question}) {
    const [checkedState, setCheckedState] = useState(
        new Array(question.checkboxes.length).fill(false)
    );

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    return <div>
        <Link to="/">Home</Link>
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
    </div>;
}
export default BaseQuestionPage;