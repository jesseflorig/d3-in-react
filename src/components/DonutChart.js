import React, { Component } from "react";
import styled from "react-emotion";
import * as d3 from "d3";

const Chart = styled("svg")``;
const Ring = styled("g")``;
const Slice = styled("g")``;
const Arc = styled("path")``;
const Text = styled("text")``;

const chartData = [
  { label: "<5", count: 2704659 },
  { label: "5-13", count: 4499890 },
  { label: "14-17", count: 2159981 },
  { label: "18-24", count: 3853788 },
  { label: "25-44", count: 14106543 },
  { label: "45-64", count: 8819342 },
  { label: ">=65", count: 612463 }
];
const chartConfig = {
  title: "Bar Chart",
  height: 500,
  width: 500,
  margins: {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  }
};

const radius = Math.min(chartConfig.width, chartConfig.height) / 2;
const outerRadius = radius - 10;
const innerRadius = radius - 70;
const color = d3.scaleOrdinal().range(d3.schemeCategory10);
const arc = d3
  .arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);
const pie = d3
  .pie()
  .sort(null)
  .value(function(d) {
    return d.count;
  });
const pieData = pie(chartData);

const renderPie = d => {
  return (
    <Slice className="arc" key={`arc-${d.index}`}>
      <Arc d={arc(d)} fill={color(d.index)} />
      <Text transform={`translate(${arc.centroid(d)})`} dx="-1em" dy=".2em">
        {d.data.label}
      </Text>
    </Slice>
  );
};

export default class DonutChart extends Component {
  componentWillMount() {
    // Animate in
  }
  componentWillUpdate() {
    // How to deal with
    console.log("hey");
  }
  render() {
    return (
      <Chart height={chartConfig.height} width={chartConfig.width}>
        <Ring
          transform={`translate(${chartConfig.width / 2},${chartConfig.height /
            2})`}
        >
          {pieData.map(d => {
            return renderPie(d);
          })}
        </Ring>
      </Chart>
    );
  }
}
