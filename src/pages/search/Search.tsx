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

    useEffect(() => {
        Promise.all(subcategories.map(getResultsForSubcategory))
            .then(results => results.flatMap(response => response.accepted))
            .then(setResults);
    }, []);

    return results.length > 0 ? (
        <div className="transition-all duration-200">
            <h1>List of Service Providers related to {question?.name} near you</h1>
            <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start lg:justify-center">
                {results.map(resultToCard)}
            </div>
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

function resultToCard(searchItem: SearchItem) {
    const url = searchItem.metatags.find(tag => tag.name === "og:image");

    return (
        <div className="bg-brand-blue rounded-sm w-full lg:w-1/5 h-96 m-2 lg:m-4">
            <div className="flex flex-col justify-between transition transform-none lg:transform hover:-translate-y-2 hover:-translate-x-2 bg-white shadow-md w-full h-full">
                <div className="p-2">
                    <h4 className="text-md font-semibold">{searchItem.title}</h4>
                    <p className="text-sm mt-2">{searchItem.description}</p>
                </div>
                <div className="bg-white">
                    {url?.content && <img
                        className="object-cover rounded-t-sm shadow-md h-24 w-full "
                        src={url.content}
                        alt=""
                    />}
                </div>
            </div>
        </div>
    );
}

export default Search;