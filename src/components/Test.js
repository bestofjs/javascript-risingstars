import React from 'react'

// export default ({ data }) => {
//   console.log("Data", data);

//   return <div>This is a test!</div>;
// };

export default class Test extends React.Component {
  render() {
    const { data } = this.props
    console.log({ data })
    return (
      <div className="about-container">
        <p>This is a test!</p>
      </div>
    )
  }
}

// export const pageQuery = graphql`
//   query SiteMetadataLookup($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
