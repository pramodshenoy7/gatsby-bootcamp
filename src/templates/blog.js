import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(
            slug: {
                eq: $slug
            }
        )
            {
                title
                publishedDate(formatString: "MMMM Do, YYYY")
                body {
                    raw
                    references{
                        ... on ContentfulAsset {
                                contentful_id
                                __typename
                                title
                                url
                            }
                       }
                }
            }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                var url, alt;
                var contentful_id = node.data.target.sys.id;
                console.log(contentful_id)
                props.data.contentfulBlogPost.body.references.forEach(ref => {
                    if(ref.contentful_id===contentful_id){
                        url = ref.url;
                        alt = ref.title;
                        console.log(alt, url)
                    }
                })
                return <img src={url} alt={alt}></img>
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>
                {props.data.contentfulBlogPost.title}
            </h1>
            <p>
                {props.data.contentfulBlogPost.publishedDate}
            </p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
        </Layout>
    )
}

export default Blog