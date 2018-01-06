import ReactGA from 'react-ga'
import config from './gatsby-config'
import trackPageView from './src/utils/track'

const { siteMetadata } = config
const key = siteMetadata.GA
if (!key) throw new Error(`Set up the GA key!`)
ReactGA.initialize(key)

exports.onRouteUpdate = ({ location }) => {
  trackPageView(location.pathname)
}
