import React, {useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {cloudflareWorkerBaseUrl, questions} from "../../constants";
import axios from "axios";

const Search: React.FC = () => {
    const [results, useResults] = useState([]);
    const [params,] = useSearchParams();

    const category = params.get("category");
    const question = questions.find(question => question.name === category);
    const subcategories = params.getAll("subcategory");

    axios.get(`${cloudflareWorkerBaseUrl}/search/${category}/${subcategories[0]}/London`)
        .then(function (response) {
            console.log(response);
        });

    return <div>
        <li>{category}</li>
        {subcategories.map((s, index) => <li key={index}>{s}</li>)}
        <Link to={question?.link ?? "/"}>Back</Link>
    </div>;
};

export default Search;