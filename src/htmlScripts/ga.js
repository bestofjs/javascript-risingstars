// Google Analytics tracking code (without the <script> tag)
// Will be wrapped in a `<script dangerouslySetInnerHTML={{__html: ga}} /> tag, from `html.js`
const ga = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-44563970-3', 'auto');
ga('send', 'pageview');
`

export default ga
