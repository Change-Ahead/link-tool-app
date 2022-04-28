import React from "react";
import {Link} from "react-router-dom";
import {questions} from "../../constants";
import useSearchItem from "../../hooks/useSearchItem";
import Page from "../Page";

function ExpandedSearchItem() {
    const [searchItem, searchParams] = useSearchItem();
    const category = searchParams.get("category");
    const question = questions.find(question => question.name === category);

    return <Page>
        {searchItem ? (
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
                        <Link to={`/map?${searchParams.toString}&id=${searchItem.id}`}>Show on map</Link>
                    </>
                ) : ""}
            </div>
        ) : (
            <div>
                Loading
                <Link to={`/search?${searchParams.toString()}`}>Back</Link>
            </div>
        )}
    </Page>;
}

export default ExpandedSearchItem;