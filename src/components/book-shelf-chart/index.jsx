import React from "react";
import { Pie } from "react-chartjs-2";
const Chart = ({ bookCount }) => {

  const ShelfsData = { Lerei: bookCount[0], Lendo: bookCount[1], Lidos: bookCount[2] };
  const data = {
    labels: Object.keys(ShelfsData),
    datasets: [
      {
        data: Object.values(ShelfsData),
        backgroundColor: ["#56ABC8", "#3587A2", "#A8D0DB"],
        hoverBackgroundColor: ["#56ABC8", "#3587A2", "#A8D0DB"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default Chart;
