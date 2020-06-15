import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from "../../content/test-data.json"

const IndexPage = () => {
  const [incidentData, setIncidentData] = useState(null);

  // useEffect(() => {
  //   fetch(`../test-data/test-data.json`)
  //     .then(response => response.json())
  //     .then(resultData => {
  //       setIncidentData(resultData)
  //       console.log('Data retrieved');
  //     })
  // }, [])

  useEffect(() => {
    setIncidentData(JSONData)
    console.log('Data set');
  }, [])

  return (
    <Layout>
      <SEO title="GTA cyclist accidents involving vehicles" />
      <h1>GTA cyclist accidents involving vehicles</h1>
      {JSONData.features.map((incident, index) => {
        return (
          <div key={index}>
            <p>Date: {incident.attributes.DATE}</p>
            <p>Speeding: {incident.attributes.SPEEDING ? incident.attributes.SPEEDING : 'No'}</p>
            <p>Alcohol involved: {incident.attributes.ALCOHOL ? incident.attributes.ALCOHOL : 'No'}</p>
          </div>
        )
      })}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
