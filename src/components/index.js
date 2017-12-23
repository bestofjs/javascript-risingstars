import React from 'react'
import Page from './Page'
import mapStateToProps from './mapStateToProps'

const Container = ({ state }) => {
  const props = mapStateToProps(state)
  return (
    <Page projects={props.projects} entities={state.entities.projects} />
  )
}

export default Container
