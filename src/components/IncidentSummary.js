import React from 'react';

const IncidentSummary = ({  incidentData, incidentCounts }) => {
  return (
    <div className="mb-4">
      <p className="mb-1 text-muted"><span className="text-danger font-weight-bold">{incidentData ? incidentData : <span>Data Loading</span>}</span> total incidents from 2006 through 2018.</p>
      <p className="mb-1 text-muted"><span className="text-danger font-weight-bold">{incidentCounts.speeding ? incidentCounts.speeding + ' (' + incidentCounts.speedingPercent + '%)' : <span>Data Loading</span>}</span> involved speeding.</p>
      <p className="mb-1 text-muted"><span className="text-danger font-weight-bold">{incidentCounts.alcohol ? incidentCounts.alcohol + ' (' + incidentCounts.alcoholPercent + '%)' : <span>Data Loading</span>}</span> involved driving while intoxicated (alcohol).</p>
      <p className="mb-1 text-muted"><span className="text-danger font-weight-bold">{incidentCounts.agDriving ? incidentCounts.agDriving + ' (' + incidentCounts.agDrivingPercent + '%)' : <span>Data Loading</span>}</span> involved aggressive driving.</p>
      <p className="text-muted"><span className="text-danger font-weight-bold">{incidentCounts.nonFatalInjuries ? incidentCounts.nonFatalInjuries : <span>Data Loading</span>}</span> non-fatal injuries and <span className="text-danger font-weight-bold">{incidentCounts.fatalInjuries ? incidentCounts.fatalInjuries : <span>Data Loading</span>}</span> fatal injuries.</p>
    </div>
  )
 };
 
 export default IncidentSummary;