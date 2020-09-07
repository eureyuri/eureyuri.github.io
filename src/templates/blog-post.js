import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

class BlogPost extends Component {
  render() {
    const {
      title,
    } = this.props.data.contentfulBlog
    return (
      <div>
        <Layout>
          <h1>{title}</h1>
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
      slug
    }
  }
`
