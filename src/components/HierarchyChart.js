import React, { Component } from "react";
import styled from "react-emotion";

const chartData = [1, 3, 5, 7, 9, 11];
const chartConfig = {
  title: "Corporate Hierarchy",
  height: 700,
  width: 700,
  margins: {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  },
  chartSeries: [{ field: "Test", name: "Test", color: "#00ccff" }]
};

export default class HierarchyChart extends Component {
  render() {
    return <div>Hierarchy</div>;
  }
}
