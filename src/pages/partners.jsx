import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"



const PartnerPage = () => (
    <Layout>
    <SEO title="Partners" /> 
    <h1>Partner Groups</h1>
    <p>
        The Troop 7 log cabin supports <a href="#">Girl Troop 719</a>, <a href="#">Cub Scout Pack 7</a>, and <a href="#">Venture Crew 7</a>.
    </p> 
    </Layout>
);

export default PartnerPage;