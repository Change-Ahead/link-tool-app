import React, {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {cloudflareWorkerBaseUrl, questions} from "../../constants";
import axios from "axios";
import {SearchItem, SearchResponse} from "../../types/SearchResponse";

const Search: React.FC = () => {
    const [results, setResults] = useState<SearchItem[]>([]);
    const [params,] = useSearchParams();

    const category = params.get("category");
    const question = questions.find(question => question.name === category);
    const subcategories = params.getAll("subcategory");

    async function getResultsForSubcategory(subcategory: string): Promise<SearchResponse> {
        const axiosResponse = await axios.get(`${cloudflareWorkerBaseUrl}/search/${category}/${subcategory}/London`);
        return axiosResponse.data;
    }

    function resultToCard(searchItem: SearchItem) {
        const expandParams = new URLSearchParams(params);
        expandParams.append("id", searchItem.id);
        return <div key={searchItem.id}>
            <h3>{searchItem.title}</h3>
            <p>{searchItem.description ? searchItem.description[0] : ""}</p>
            <p><a href={searchItem.url}>{searchItem.url}</a></p>
            <p><b>
                <Link to={`/search/expanded?${expandParams.toString()}`}>Expand</Link>
            </b></p>
        </div>;
    }

    useEffect(() => {
        Promise.all(subcategories.map(getResultsForSubcategory))
            .then(results => results.flatMap(response => response.accepted))
            .then(setResults);
    }, []);

    return results.length > 0 ? (
        <div>
            <h1>List of Service Providers related to {question?.name} near you</h1>
            {results.map(resultToCard)}
            <button>find all service providers on map</button>
            <p><Link to={question?.link ?? "/"}>Back</Link></p>
        </div>
    ) : (
        <div>
            Loading
            <Link to={question?.link ?? "/"}>Back</Link>
        </div>
    );
};

export default Search;