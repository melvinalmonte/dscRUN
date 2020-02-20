import React, {useEffect} from "react";
import history from "../history";
import {Layout} from "../components/layout/Layout";

export const Redirect = () => {
    useEffect(() => {
        history.push("/groups")
    });
    return(
        <Layout>
            <h1>
                Redirecting
            </h1>
        </Layout>
    )
};