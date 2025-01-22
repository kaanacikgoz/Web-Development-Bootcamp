import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import cars from "./practice"; // Ensure correct import path

const [honda, tesla] = cars;

const { coloursByPopularity: [teslaTopColour], speedStats: {topSpeed:teslaTopSpeed}} = tesla;

const { coloursByPopularity: [hondaTopColour], speedStats: {topSpeed:hondaTopSpeed}} = honda;

// Get the root element
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

root.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>
);
