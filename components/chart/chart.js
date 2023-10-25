import React from 'react';
import { Bar } from 'react-chartjs-2';

const SeverityChart = ({ data }) => {
  // Calculate average severities
  const eventSeverities = {};
  const eventCounts = {};
  data.forEach(entry => {
    const event = entry.event;
    const severity = entry.severity;

    if (!eventSeverities[event]) {
      eventSeverities[event] = 0;
      eventCounts[event] = 0;
    }

    eventSeverities[event] += severity;
    eventCounts[event]++;
  });

  const eventNames = Object.keys(eventSeverities);
  const averageSeverities = eventNames.map(event => {
    return eventSeverities[event] / eventCounts[event];
  });

  // Data for the chart
  const chartData = {
    labels: eventNames,
    datasets: [
      {
        label: 'Average Severity',
        data: averageSeverities,
        backgroundColor: 'skyblue',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="severity-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SeverityChart;