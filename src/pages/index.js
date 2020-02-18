import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {GiChocolateBar} from "react-icons/all";

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <GiChocolateBar/>
    </Layout>
);

export default IndexPage
