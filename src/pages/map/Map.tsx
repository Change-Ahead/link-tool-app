import React from "react";
import { mapsKey } from "../../constants";

const Map: React.FC = () => {
    return <iframe
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=Space+Needle,Seattle+WA`}>
    </iframe>;
};
 
export default Map;