import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return(
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I am Pramod, from Boston</h2>
      <p>Need a dev? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage
