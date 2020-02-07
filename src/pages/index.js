import React from "react"
import Layout from "../components/layout"

const logo = require("../images/logo.png")

const IndexPage = () => (
  <Layout >
    <div className="homepage">
      <img src={logo} className="homepage__logo"/>
      <p className="font-weight-bold ">Coming soon....</p>
    </div>
  </Layout>
)

export default IndexPage
