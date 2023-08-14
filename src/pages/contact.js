import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact"/>
                <h1>Contact me</h1>
                <p>Here is my contact info</p>
                <p>Twitter <a href="https://www.google.com">X</a></p>
            </Layout>
        </div>
    )
}

export default ContactPage