import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

export const AreaChart = () => {
  const series = [
    {
      name: "series1",
      data: [21, 32, 8, 51, 42, 109],
    },
    {
      name: "series2",
      data: [1, 22, 65, 12, 44, 82],
    },
  ];

  const options = {
    maintainAspectRatio: false,
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [0, 100, 600, 700, 800, 900],
      labels: {
        show: true,
        style: {
          colors: "#B8C0CC",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      theme: "dark",
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#B8C0CC",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(158, 89, 255, 0.29)",
    },
    legend: {
      show: false,
    },
    colors: ["#423EE0", "#00C7F2"],
  };

  return (
    <Box>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="150%"
      />
    </Box>
  );
};
