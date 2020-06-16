import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from "../../content/test-data.json"
import "../styles/index.scss"

const IndexPage = () => {
  const [incidentData, setIncidentData] = useState(null);

  // https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Cyclists/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json

  // useEffect(() => {
  //   fetch('https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Cyclists/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
  //     .then(response => response.json())
  //     .then(resultData => {
  //       console.log(resultData);
  //       setIncidentData(resultData)
  //     })
  // }, [])

  const removeDuplicates = () => {
    JSONData.features.map((incident, index) => {
      console.log(incident.attributes)
    })
  }

  useEffect(() => {
    removeDuplicates()
  }, [])

  return (
    <Layout>
      <SEO title="GTA cyclist accidents involving vehicles" />
      <h1>GTA cyclist accidents involving vehicles</h1>
      <div className="row">
        <div className="col-sm">
          {JSONData.features.map((incident, index) => {
            return (
              <div key={index} className="card-body">
                <p className="mb-0">Accident number: {incident.attributes.ACCNUM ? incident.attributes.ACCNUM : 'N/A'}</p>
                <p className="mb-0">Date: {incident.attributes.DATE}</p>
                <p className="mb-0">Classification of accident: {incident.attributes.ACCLASS ? incident.attributes.ACCLASS : 'N/A'}</p>
                <p className="mb-0">Intersection: {incident.attributes.STREET1} {incident.attributes.STREET2 && '& ' + incident.attributes.STREET2}</p>
                <p className="mb-0">Road class: {incident.attributes.ROAD_CLASS}</p>
                <p className="mb-0">Injury severity: {incident.attributes.INJURY ? incident.attributes.INJURY : 'N/A'}</p>
                <p className="mb-0">Crash details: {incident.attributes.CYCLISTYPE ? incident.attributes.CYCLISTYPE : 'N/A'}</p>
                <p className="mb-0">Light conditions: {incident.attributes.LIGHT ? incident.attributes.LIGHT : 'N/A'}</p>
                <p className="mb-0">Speeding: {incident.attributes.SPEEDING ? incident.attributes.SPEEDING : 'No'}</p>
                <p className="mb-0">Aggressive driving: {incident.attributes.AG_DRIV ? incident.attributes.AG_DRIV : 'No'}</p>
                <p className="mb-0">Alcohol involved: {incident.attributes.ALCOHOL ? incident.attributes.ALCOHOL : 'No'}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
