import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import HalfCover from '../components/halfCover';
import Container from '../components/container';
import './blog-post.css';
import {Helmet} from "react-helmet";

class BlogPost extends Component {
  render() {
    const {
      title,
      description,
      body,
      heroImage
    } = this.props.data.contentfulBlog

    return (
      <div>
        <Helmet>
          <title>{ title }</title>
          <meta name='description' content={ description.description } />
        </Helmet>
        <Layout>
          <HalfCover title={title} blogImage={heroImage.file.url}/>
          <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
            <Container size={'small'}>
              <div style={{width: "100%", overflow: "hidden"}} dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
            </Container>

          </div>
        </Layout>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      description {
        description
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        file {
            url
        }
      }
    }
  }
`
