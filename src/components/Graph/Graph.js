import {Wrapper} from "./GraphStyles";
import {Line} from "react-chartjs-2"
import React, {useEffect, useState} from "react";
import {getHistory} from "../../api";
import numeral from "numeral"

const graphOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 1,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "DD/MM/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const Graph = ({country, days}) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    if (!country) return;
    const apiCall = async () => {
      setState([]);
      const data = await getHistory(country, days);
      if (data === null) return;
      let cases;
      let keys;
      if (country === "worldwide") {
        cases = Object.values(data.cases);
        keys = Object.keys(data.cases);
      } else {
        cases = Object.values(data.timeline.cases);
        keys = Object.keys(data.timeline.cases);
      }
      keys = keys.map(date => date.replace(/([0-9]+)\/([0-9]+)\/([0-9]+)/, "$2/$1/$3"));
      setState(keys.map((day, index) => {
        if (index > 0) {
          return {
            x: day,
            y: Math.max(cases[index] - cases[index - 1], 0)
          }
        }
        return {};
      }).splice(1))
    }
    apiCall().then();
  }, [country, days])

  return (
    <Wrapper>
      <Line
        options={graphOptions}
        data={{
          datasets: [{
            data: state,
            backgroundColor: "rgba(204, 16, 52, 0.5)",
            borderWidth: 1,
            borderColor: "#CC1034",
            fill: true,
          }],
        }}
      />
    </Wrapper>
  );
}

export default React.memo(Graph);