import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App: React.FC = () => {
    return <Router>
        <Routes>
            <Route path="/employment" element={<div>employement</div>} />
            <Route path="/well-being" element={<div>well being</div>}/>
            <Route path="/essentials" element={<div>essentials</div>}/>
            <Route path="/housing" element={<div>housing</div>}/>
            <Route path="/" element={<div>home</div>} />
        </Routes>
    </Router>;
};

export default App;
