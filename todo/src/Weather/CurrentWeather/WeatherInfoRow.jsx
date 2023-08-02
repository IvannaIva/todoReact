// WeatherInfoRow.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherInfoRow = ({ icon, label, value }) => {
  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={icon} />
      </td>
      <td>{label}</td>
      <td colSpan="2">{value}</td>
    </tr>
  );
};

export default WeatherInfoRow;
