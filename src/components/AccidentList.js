import React from 'react';

const AccidentList = (props) => {
  const googleSteertViewUrl = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=';
  return (
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Year</th>
          <th>Accident details</th>
          <th>Location details</th>
        </tr>
      </thead>
      <tbody>
    {props.accidents.map((incident, index) => {
      return (
        <tr key={index}>
          <td>
            <p className="mb-0">{incident.attributes.YEAR}</p>
          </td>
          <td>
            {/* <p className="mb-0">Accident number: {incident.attributes.ACCNUM ? incident.attributes.ACCNUM : 'N/A'}</p> */}
            {/* <p className="mb-0">Date: {incident.attributes.DATE}</p> */}
            <p className="mb-0"><span className="text-muted">Classification of accident:</span> {incident.attributes.ACCLASS ? incident.attributes.ACCLASS : 'N/A'}</p>
            <p className="mb-0"><span className="text-muted">Driver action:</span> {incident.attributes.DRIVACT ? incident.attributes.DRIVACT : 'N/A'}</p>
            <p className="mb-0"><span className="text-muted">Injury severity:</span> {incident.attributes.INJURY ? incident.attributes.INJURY : 'N/A'}</p>
            <p className="mb-0"><span className="text-muted">Crash details:</span> {incident.attributes.CYCLISTYPE ? incident.attributes.CYCLISTYPE : 'N/A'}</p>
            <p className="mb-0"><span className="text-muted">Light conditions:</span> {incident.attributes.LIGHT ? incident.attributes.LIGHT : 'N/A'}</p>
            <p className="mb-0"><span className="text-muted">Speeding:</span> {incident.attributes.SPEEDING ? incident.attributes.SPEEDING : 'No'}</p>
            <p className="mb-0"><span className="text-muted">Aggressive driving:</span> {incident.attributes.AG_DRIV ? incident.attributes.AG_DRIV : 'No'}</p>
            <p className="mb-0"><span className="text-muted">Alcohol involved:</span> {incident.attributes.ALCOHOL ? incident.attributes.ALCOHOL : 'No'}</p>
          </td>
          <td>
            <p className="mb-0"><span className="text-muted">Intersection:</span> {incident.attributes.STREET1} {incident.attributes.STREET2 && '& ' + incident.attributes.STREET2} <a href={googleSteertViewUrl+incident.attributes.LATITUDE+','+incident.attributes.LONGITUDE} target="_blank" rel="noreferrer">(Street View)</a></p>
            <p className="mb-0"><span className="text-muted">Accident location:</span> {incident.attributes.ACCLOC ? incident.attributes.ACCLOC : 'N/A'}</p>
            <p className="mb-0"><span className="text-muted">Road class:</span> {incident.attributes.ROAD_CLASS}</p>
          </td>
        </tr>
      )
    })}
      </tbody>
    </table>
  )
 };
 
 export default AccidentList;