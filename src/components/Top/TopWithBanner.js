import React from 'react'
// import styled from 'styled-components'

import Banner from './Banner'
import Introduction from './Introduction'

// const Container = styled.div`
//   margin: 2rem 0;
//   padding: 2rem;
//   border: 1px solid #788080;
// `

/*
Layout used in 2016 and 2018, showing a banner made of projects logos
*/
const TopWithBanner = props => {
  return (
    <div>
      <Banner />
      <div className="container small-container">
        <div className="top-with-banner-introduction">
          <Introduction {...props} />
        </div>
      </div>
    </div>
  )
}

export default TopWithBanner
