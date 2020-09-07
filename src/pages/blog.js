import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/container'
import HalfCover from '../components/halfCover'

const BlogPost = ({node}) => {
    return (
        <li>
            <Link to={node.slug}>{node.title}</Link>
        </li>
    )
}

export default function blog({data}) {
    return (
        <div>
            <Layout>
                <HalfCover />
                <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
                    <Container header={"Blog"}>
                        <ul>
                            {data.allContentfulBlog.edges.map(edge =>
                                <BlogPost node={edge.node} />)}
                        </ul>
                    </Container>
                    </div>
            </Layout>
        </div>
    )
}

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(filter: {
            node_locale: {eq: "en-US"}
        }) {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`