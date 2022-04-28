import React from "react";
import { useSearchParams } from "react-router-dom";

const Search: React.FC = () => {

    const [params,] = useSearchParams();

    return <div>
        <li>{params.get("location")}</li>
        <li>{params.get("category")}</li>
        <li>{params.get("subcategory")}</li>
    </div>;
};

export default Search;