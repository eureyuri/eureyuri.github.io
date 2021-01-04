import React, { useEffect, useState } from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import HalfCover from '../components/halfCover'
import ProjectCard from '../components/ProjectCard'
import InputWithIcon from '../components/InputWithIcon'
import { useDebounce } from '../utils/utils';

const BlogPost = ({node}) => {
    return (
        <Link to={node.slug}>
            <ProjectCard
                image={node.heroImage.file.url}
                heading={node.title}
                secondaryHeading={`${node.publishDate}`.split("-").join(" ")}
                body={`${node.description.description}`} />
        </Link>
    )
}

export default function Blog({data}) {
    const blogPosts = data.allContentfulBlog.edges;

    const searchPost = (search) => {
        return blogPosts.filter(edge => {
            const regex = new RegExp(search, "i"); // Case insensitive
            return regex.test(edge.node.title);
        })
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(blogPosts);
    const debouncedSearchTerm = useDebounce(searchTerm, 200);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setResults(searchPost(debouncedSearchTerm));
        } else {
            setResults(blogPosts);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <Layout>
                <HalfCover title={"Blog"} coverImage={data.coverImage.childImageSharp.fluid} />
                <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
                    <Container size="small">
                        <InputWithIcon onChange={e => setSearchTerm(e.target.value)} />
                        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            {results.length < 1 && <h2>Posts for {searchTerm} coming soon...</h2>}
                            {results
                              .map(edge =>
                                <BlogPost node={edge.node} />)}
                        </div>
                    </Container>
                    </div>
            </Layout>
        </div>
    )
}

export const pageQuery = graphql`
    query pageQuery {
        coverImage: file(relativePath: { eq: "cover2.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
        allContentfulBlog(
            filter: {
            node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [publishDate], order: DESC
            }
        ) {
            edges {
                node {
                    title
                    slug
                    description {
                        description
                    }
                    heroImage {
                        file {
                            url
                        }
                    }
                    publishDate
                }
            }
        }
    }
`