import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HalfCover from '../components/halfCover';

class BlogPost extends Component {
  render() {
    const {
      title,
    } = this.props.data.contentfulBlog
    return (
      <div>
        <Layout>
          <HalfCover title={title} />
          <p>{title}</p>
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
