import React from "react";
import { Link } from "react-router-dom";
import { mapsKey } from "../../constants";
import Page from "../Page";
import useSearchItem from "../../hooks/useSearchItem";

const Map: React.FC = () => {
    const [searchItem, searchParams] = useSearchItem(false);

    return <Page>
        {searchItem && searchItem.location ? (
            <div>
                <h2>Details for {searchItem.title}</h2>
                <iframe
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${searchItem.location.address ?? searchItem.location.postcode}`}>
                </iframe>
            </div>
        ) : (
            <div>
                Loading
            </div>
        )}
        <Link to={`/search/expanded?${searchParams.toString()}`}>{"<"} Back</Link>
    </Page>;
};
 
export default Map;