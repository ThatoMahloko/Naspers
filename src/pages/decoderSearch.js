import React from 'react';
import '../src/style.css';
import lab from '../api/lab.js';

export default function decoderSearch() {
  const [rack, setRack] = React.useState('2');
  return (
    <table>
      <tr>
        <th>Rack</th>
        <th>Slot</th>
        <th>Decoder Model</th>
        <th>Current Project</th>
        <th>Software Type</th>
        <th>Country Code</th>
      </tr>
      {lab
        .filter((data) => data.Rack === rack)
        .map((thisData) => {
          return (
            <tr>
              <td>{thisData.Rack}</td>
              <td>{thisData.Slot}</td>
              <td>{thisData.DecoderModel}</td>
              <td>{thisData.CurrentProject}</td>
              <td>{thisData.SoftwareType}</td>
              <td>{thisData.CountryCode}</td>
            </tr>
          );
        })}
    </table>
  );
}
