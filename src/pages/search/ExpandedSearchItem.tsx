import React, {useEffect, useState} from "react";
import {SearchItem, SearchResponse} from "../../types/SearchResponse";
import {Link, useSearchParams} from "react-router-dom";
import {cloudflareWorkerBaseUrl, questions} from "../../constants";
import axios from "axios";

function ExpandedSearchItem() {
    const [searchItem, setSearchItem] = useState<SearchItem | undefined>(undefined);
    const [params,] = useSearchParams();

    const category = params.get("category");
    const question = questions.find(question => question.name === category);
    const subcategories = params.getAll("subcategory");
    const id = params.get("id");
    const searchParams = new URLSearchParams(params);
    searchParams.delete("id");

    async function getResultsForSubcategory(subcategory: string): Promise<SearchResponse> {
        const axiosResponse = await axios.get(`${cloudflareWorkerBaseUrl}/search/${category}/${subcategory}/London`);
        return axiosResponse.data;
    }

    useEffect(() => {
        Promise.all(subcategories.map(getResultsForSubcategory))
            .then(results => results.flatMap(response => response.accepted))
            .then(searchItems => setSearchItem(searchItems.find(si => si.id === id)));
    }, []);

    return searchItem ? (
        <div>
            <h1>Details for {searchItem.title}</h1>
            <p><b>Deals in: </b>{question?.name}</p>
            <p><b>Description: </b>{searchItem.description ? searchItem.description[0] : ""}</p>
            <p><b>Url: </b><a href={searchItem.url}>{searchItem.url}</a></p>
            <p><Link to={`/search?${searchParams.toString()}`}>Back</Link></p>
            {searchItem.location ? (
                <>
                    <p><b>Address: </b></p>
                    <p>{searchItem.location.address}</p>
                </>
            ) : ""}
        </div>
    ) : (
        <div>
            Loading
            <Link to={`/search?${searchParams.toString()}`}>Back</Link>
        </div>
    );
}

export default ExpandedSearchItem;