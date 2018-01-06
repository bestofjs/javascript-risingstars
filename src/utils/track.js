import ReactGA from 'react-ga'

function trackPageView(pathname) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`No tracking activated in development mode`, pathname)
  } else {
    ReactGA.pageview(pathname)
  }
}

export default trackPageView
