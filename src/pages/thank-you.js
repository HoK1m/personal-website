import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ThankYou = () => (
  <Layout seo="Thank You | Howard Kim">
    <div className="content">
      <h1>Thank You</h1>
      <p>For your message.</p>
      <p>For your interest.</p>
      <Link className="button" to="/">
        Go Home
      </Link>
    </div>
  </Layout>
)

export default ThankYou