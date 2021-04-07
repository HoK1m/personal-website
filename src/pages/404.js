import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../css/404.css"

const NotFoundPage = () => (
  <Layout seo="Not Found | Howard Kim" dark="true">
    <div className="content">
      <h1 className="darktext">404: Not Found</h1>
      <p className="darktext">Were you looking for my resume?</p>
      <p className="darktext">Shoot me an email to hello@howard.kim</p>
      <Link className="button" to="/">
        Go Home
      </Link>
    </div>
  </Layout >
)

export default NotFoundPage
