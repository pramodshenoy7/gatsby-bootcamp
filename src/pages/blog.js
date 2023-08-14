import React from "react"
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
            sort: {
                publishedDate: DESC
                }
            ) {
                edges {
                    node {
                    title,
                    slug,
                    publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
                }
        }
    `);
    return (
        <div>
            <Layout>
            <Head title="blog"/>
            <h1>Blog</h1>
            <p>posts will be shown here</p>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>
                                    {edge.node.title}
                                </h2>
                                <p>
                                    {edge.node.publishedDate}
                                </p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            </Layout>
        </div>
    )
}

export default BlogPage