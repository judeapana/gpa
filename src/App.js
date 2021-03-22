import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/routes";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes/>
            </Router>
        </React.Fragment>
    );
}

export default App;
