import React, { useContext } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {
  sortbyConfirmed,
  sortbyActive,
  sortbyRecovered,
  sortbyDeceased,
} from "../table/helpers/sort";

import CovidContext from "../../context/covid/covidContext";

charts(FusionCharts);

const StackedBar = () => {
  var newChartObj;

  // Variables to hold the top ten districts by categories
  var stackedBarConfirmed,
    stackedBarActive,
    stackedBarRecovered,
    stackedBarDeceased;

  const covidContext = useContext(CovidContext);

  const { stateData, stateDataFetched, darkMode } = covidContext;

  /* Merge the two arrays to get the counts and zone into one object for each district.
     Note that the delta object is removed */
  if (stateDataFetched) {
    newChartObj = stateData.filter((f) => {
      return f.district !== "Unknown" && f.district !== "Other State";
    });

    stackedBarConfirmed = [...newChartObj].sort(sortbyConfirmed["down"].fn);
    // .slice(0, 10);

    stackedBarConfirmed = stackedBarConfirmed.map((c) => {
      return { label: c.district, value: c.confirmed };
    });

    stackedBarActive = [...newChartObj].sort(sortbyActive["down"].fn);
    // .slice(0, 10);

    stackedBarActive = stackedBarActive.map((c) => {
      return { label: c.district, value: c.active };
    });

    stackedBarRecovered = [...newChartObj].sort(sortbyRecovered["down"].fn);
    // .slice(0, 10);

    stackedBarRecovered = stackedBarRecovered.map((c) => {
      return { label: c.district, value: c.recovered };
    });

    stackedBarDeceased = [...newChartObj].sort(sortbyDeceased["down"].fn);
    // .slice(0, 10);

    stackedBarDeceased = stackedBarDeceased.map((c) => {
      return { label: c.district, value: c.deceased };
    });
  }

  const barSettings = {
    // Set this if you want the dark / light mode to take effect
    canvasBgAlpha: "0",
    showLimits: 0,
    //Background color and alpha
    showXAxisLabels: 0,
    plotSpacePercent: 40,
    bgcolor: darkMode ? "#200f21" : "#ffffff",
    baseFont: "archiaregular",
    valueFontColor: "#455a64",
    labelFontColor: darkMode ? "#999" : "#455a64",
    valueFontBold: 1,
    baseFontSize: 12,
    showHoverEffect: 1,
    barHoverColor: "#f6f578",
    formatNumberScale: 0,
    theme: "fusion",
    numDivLines: 0,
    animation: 1,
    // use3DLighting: 1,
  };

  const confirmedPalette = { paletteColors: "#c62828" };
  const activePalette = { paletteColors: "#5c6bc0" };
  const recoveredPalette = { paletteColors: "#1de9b6" };
  const deceasedPalette = { paletteColors: "#a1887f" };

  const dataSourceConfirmed = {
    chart: { ...barSettings, ...confirmedPalette },
    data: stackedBarConfirmed,
  };

  const dataSourceActive = {
    chart: { ...barSettings, ...activePalette },
    data: stackedBarActive,
  };

  const dataSourceRecovered = {
    chart: { ...barSettings, ...recoveredPalette },
    data: stackedBarRecovered,
  };

  const dataSourceDeceased = {
    chart: { ...barSettings, ...deceasedPalette },
    data: stackedBarDeceased,
  };

  return (
    <div id="stacked-bar">
      <h3 className="stacked-bar-header center-align">Districts by cases</h3>
      <div className="stacked-bar">
        <div
          className={"stacked-bar-container " + (darkMode ? "#999" : "#455a64")}
        >
          <h4 className="center-align">Confirmed cases</h4>
          <ReactFusioncharts
            type="bar3d"
            width="300"
            height="450"
            dataFormat="JSON"
            dataSource={dataSourceConfirmed}
          />
        </div>

        <div
          className={"stacked-bar-container " + (darkMode ? "#999" : "#455a64")}
        >
          <h4 className="center-align">Active cases</h4>
          <ReactFusioncharts
            type="bar3d"
            width="300"
            height="450"
            dataFormat="JSON"
            dataSource={dataSourceActive}
          />
        </div>

        <div
          className={"stacked-bar-container " + (darkMode ? "#999" : "#455a64")}
        >
          <h4 className="center-align">Recoveries</h4>
          <ReactFusioncharts
            type="bar3d"
            width="300"
            height="450"
            dataFormat="JSON"
            dataSource={dataSourceRecovered}
          />
        </div>

        <div
          className={"stacked-bar-container " + (darkMode ? "#999" : "#455a64")}
        >
          <h4 className="center-align">Deaths</h4>
          <ReactFusioncharts
            type="bar3d"
            width="300"
            height="450"
            dataFormat="JSON"
            dataSource={dataSourceDeceased}
          />
        </div>
      </div>
    </div>
  );
};

export default StackedBar;
