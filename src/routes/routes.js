import {useRoutes} from "react-router";
import React from "react";
import Main from "../pages/Main";
import AccumulativeGpa from "../pages/AccumulativeGpa";
import Gpa from "../pages/Gpa";

const Routes = () => {
    return useRoutes([
        {path: '/', element: <Main/>},
        {path: '/gpa/c-gpa', element: <AccumulativeGpa/>},
        {path: '/gpa', element: <Gpa/>}
    ])
}
export default Routes
