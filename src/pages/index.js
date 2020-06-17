import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AccidentList from "../components/AccidentList"
import IncidentSummary from "../components/IncidentSummary"
import JSONData from "../../content/test-data-short.json"
import "../styles/index.scss"

const IndexPage = () => {
  const [incidentData, setIncidentData] = useState(null);
  const [incidentCounts, setIncidentCounts] = useState({ 
    speeding: '',
    speedingPercent: null, 
    alcohol: '',
    alcoholPercent: null, 
    agDriving: '',
    agDrivingPercent: null,
    fatalInjuries: null,
    nonFatalInjuries: null
  });

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

  function incidentSummaryCount(data, propertToCount) {
    const extractedData = data.filter(item => {
      return item.attributes[propertToCount] === 'Yes';
    });
    return extractedData.length;
  }

  function injuryRates(data) {
    const nonFatal = data.filter(item => {
      return item.attributes.ACCLASS === 'Non-Fatal Injury';
    });
    const fatal = data.filter(item => {
      return item.attributes.ACCLASS !== 'Non-Fatal Injury';
    });
    return { nonFatalCount: nonFatal.length, fatalCount: fatal.length };
  }

  function percentOfTotal(totalIncidents, totalSpecificIncident) {
    let percentage = totalSpecificIncident / totalIncidents * 100;
    return percentage.toFixed(2);
  }

  useEffect(() => {
    const deDupe = removeDuplicates(JSONData.features);
    deDupe.reverse();
    setIncidentData(deDupe);
    const speedingCount = incidentSummaryCount(deDupe, 'SPEEDING');
    const alcoholCount = incidentSummaryCount(deDupe, 'ALCOHOL');
    const agDrivingCount = incidentSummaryCount(deDupe, 'AG_DRIV');
    const injuries = injuryRates(deDupe);
    setIncidentCounts(incidentCounts => ({ 
      ...incidentCounts, 
      speeding: speedingCount,
      speedingPercent: percentOfTotal(deDupe.length, speedingCount),
      alcohol: alcoholCount,
      alcoholPercent: percentOfTotal(deDupe.length, alcoholCount),
      agDriving: agDrivingCount,
      agDrivingPercent: percentOfTotal(deDupe.length, agDrivingCount),
      fatalInjuries: injuries.fatalCount,
      nonFatalInjuries: injuries.nonFatalCount
    }));
  }, [])

  return (
    <Layout>
      <SEO title="GTA cyclist accidents involving vehicles" />
      <div className="row">
        <div className="col-sm-12">
          <h1 className="h3 py-3">GTA cyclist accidents involving vehicles</h1>
          {incidentData ? <IncidentSummary incidentData={incidentData.length} incidentCounts={incidentCounts} /> : <p>Data Loading</p>}
        </div>
        <div className="col-sm-12">
          {incidentData ? <AccidentList accidents={incidentData} /> : <p>Data Loading</p>}
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
