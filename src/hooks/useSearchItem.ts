import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { cloudflareWorkerBaseUrl } from "../constants";
import { SearchItem, SearchResponse } from "../types/SearchResponse";
import axios from "axios";

const useSearchItem = (removeId = true): [SearchItem | undefined, URLSearchParams] => {
    const [searchItem, setSearchItem] = useState<SearchItem | undefined>(undefined);
    const [params,] = useSearchParams();

    const category = params.get("category");
    const subcategories = params.getAll("subcategory");
    const id = params.get("id");
    const searchParams = new URLSearchParams(params);
    if (removeId) {
        searchParams.delete("id");
    }

    async function getResultsForSubcategory(subcategory: string): Promise<SearchResponse> {
        const axiosResponse = await axios.get(`${cloudflareWorkerBaseUrl}/search/${category}/${subcategory}/London`);
        return axiosResponse.data;
    }

    useEffect(() => {
        Promise.all(subcategories.map(getResultsForSubcategory))
            .then(results => results.flatMap(response => response.accepted))
            .then(searchItems => setSearchItem(searchItems.find(si => si.id === id)));
    }, []);

    return [searchItem, searchParams];
};

export default useSearchItem;