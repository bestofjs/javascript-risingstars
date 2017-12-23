import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory'
import numeral from 'numeral'

const styles = {
  chart: {
    padding: {
      top: 0,
      left: 0,
      bottom: 32,
      right: 80 // needed because of projects number one with a long title
    }
  },
  axis: {
    axis: { stroke: 'black', strokeWidth: 1 },
    ticks: {
      size: (tick) => 10,
      stroke: 'black',
      strokeWidth: 1
    },
    // tickLabels: {
    //   fill: 'black',
    //   fontFamily: 'inherit'
    // }
  }
}

function getGraphData (projects, sortOrder) {
  const count = projects.length
  const data = projects
    .filter(project => project.stats[sortOrder] > 0)
    .map((project, i) => {
      return {
        url: project.url || project.repository,
        label: project.name,
        color: project.color,
        x: count - i,
        y: project.stats[sortOrder]
      }
    })
  return data
}

function formatDelta (delta, decimals = 0) {
  const numberFormat = decimals === 0 ? '0' : `0.${'0'.repeat(decimals)}`
  const formattedNumber = numeral(delta).format(`${numberFormat}a`)
  return `+${formattedNumber}`
}

const MyBarLabel = (props) => {
  const url = props.datum.url
  return (
    <a href={url} target="_blank">
      <VictoryLabel {...props} />
    </a>
  )
}

const Graph = ({ projects, sortOrder, width, height }) => {
  return (
    <div className="tag-card-graph-container">
      <VictoryChart
        domainPadding={20}
        padding={styles.chart.padding}
        theme={VictoryTheme.material}
        width={width}
        height={height}
      >
        <VictoryAxis
          style={styles.axis}
          labelB={`by Github stars added in 2016`}
          axisLabelComponent={<VictoryLabel dy={3} />}
          tickFormat={x => formatDelta(x, 0)}
        />
        <VictoryAxis
          dependentAxis
          style={{
            ticks: { strokeWidth: 0 }
          }}
          tickCountC={0}
          tickValues={[]}
          tickFormat={datum => ''}
        />
        <VictoryBar
          data={getGraphData(projects, sortOrder)}
          horizontal
          label={project => `${project.label} (${project.x})`}
          labelComponent={<MyBarLabel />}
          style={{
            data: {
              fill: project => '#FFAC2C',// project.color
            },
            labels: {
              fill: project => '#541600', // project.color,
              cursor: 'pointer'
            }
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default Graph
