// html page to redirect users on Github pages
// using this technique: https://github.com/jekyll/jekyll-redirect-from/blob/master/lib/jekyll-redirect-from/redirect.html
// Not needed on Netlify, `gatsby-plugin-netlify` automatically handles the redirections

const html = ({ redirectTo }) => `
<!DOCTYPE html>
<html lang="en-US">
  <meta charset="utf-8">
  <title>Redirecting&hellip;</title>
  <link rel="canonical" href="${redirectTo}">
  <meta http-equiv="refresh" content="0; url=${redirectTo}">
  <meta name="robots" content="noindex">
  <h1>Redirecting&hellip;</h1>
  <a href="${redirectTo}">Click here if you are not redirected.</a>
  <script>location="${redirectTo}"</script>
</html>
`

module.exports = html
