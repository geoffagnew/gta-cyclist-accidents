import React from 'react';

const AccidentList = (props) => {
  return (
    <div>
    {props.accidents.map((incident, index) => {
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
  )
 };
 
 export default AccidentList;