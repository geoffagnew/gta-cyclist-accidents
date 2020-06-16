import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AccidentList from "../components/AccidentList"
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

  function removeDuplicates(data) {
    const cleanData = [];
    return data.filter(item => {
      const doesItemExist = cleanData.indexOf(item.attributes.ACCNUM);
      if(doesItemExist === -1) {
        cleanData.push(item.attributes.ACCNUM);
        return item;
      }
      return false;
    });
  }

  useEffect(() => {
    const deDupe = removeDuplicates(JSONData.features);
    setIncidentData(deDupe);
    console.log(deDupe);
  }, [])

  return (
    <Layout>
      <SEO title="GTA cyclist accidents involving vehicles" />
      <h1>GTA cyclist accidents involving vehicles</h1>
      <div className="row">
        <div className="col-sm">
         {incidentData ? <AccidentList accidents={incidentData} /> : <p>Data Loading</p>}
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
