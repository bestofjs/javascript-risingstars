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

Nuxt.js is a framework for bringing server-side rendering (SSR) to your Vue.js apps, similar to how Next.js does with React.

Next.js 3.0: The Universal React App Toolchain
The stable release of Next.js v3.0 arrived this week, bringing with it dynamic import support, static export support, code splitting and more.

With the rise of single-page javascript web apps and the widening adoption of NodeJS, handling concurrency gracefully is more important than ever for Javascript developers. Async/await alleviates many of the bug-inducing control-flow issues that have plagued Javascript codebases for decades and is pretty much guaranteed to make any async code block significantly shorter, simpler, and more self-evident.

## Angular

Angular 2 changed dramatically and even went through major rewrite just before the final release.

Two years later, we have Angular 4 with a promise of relative stability from here on.

The biggest difference lies in state management. Angular comes with data-binding bundled in, whereas React today is usually augmented by Redux to provide unidirectional data flow and work with immutable data. Those are opposing approaches in their own right, and countless discussions are now going on whether mutable/data binding is better or worse than immutable/unidirectional.

## Major

Some other major companies also play a big role, including Microsoft with both {typescript} and {vs-code} projects, 2 projects that led their category in 2017.
