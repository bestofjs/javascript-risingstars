## Memo: how to query translation data with GraphQL

## Strategy #1

`gatsby-source-filesystem` is used to query the `i18n` folder on the filesystem and create the source nodes.
`gatsby-transformer-remark` converts the sources nodes to HTML, adding the `frontmatter` meta data.

In `gatsby-node.js`, we add `language` and `key` fields to these nodes.

### Requests

http://localhost:8000/___graphql

All translations

```graphql
{
  allMarkdownRemark {
    edges {
      node {
        html
        fields {
          key
          language
        }
        frontmatter {
          title
          author
        }
      }
    }
  }
}
```

By language

```
query translationsByLanguage($language: String) {
  allMarkdownRemark(filter: {fields: {language: {eq: $language}}}) {
    edges {
      node {
        html
        fields {
          key
          language
        }
        frontmatter {
          title
          author
        }
      }
    }
  }
}
```

Create the `translations` object and pass it to child components

```js
const { data } = this.props
const translations = getTranslations(data.allMarkdownRemark.edges)

function getTranslations(edges) {
  const translations = {}
  edges.forEach(element => {
    const { node } = element
    const { fields, html } = node
    const { key, language } = fields
    const path = `${language}.${key}`
    set(translations, path, html)
  })
  return translations
}
```

## Strategy #2

Use only the `gatsby-source-filesystem` plugin to access the filesystem and convert markdown to HTML in the components

```js
  if (node.internal.mediaType === 'text/markdown') {
    const fileNode = node
    const parsedFilePath = path.parse(fileNode.relativePath)
    const content = await loadNodeContent(node)
    const language = parsedFilePath.name
    const key = parsedFilePath.dir.replace('/', '.')
    createNodeField({ node, name: `language`, value: language })
    createNodeField({ node, name: `key`, value: key })
    createNodeField({ node, name: `markdown`, value: content })
  }
}
```

```
{
  allFile {
    edges {
      node {
        relativePath
        size
        base
        ext
        internal {
          contentDigest
        }
        fields {
          key
          language
          markdown
        }
      }
    }
  }
}
```
