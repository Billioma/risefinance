import Chart from "react-apexcharts";
import { Box } from "@chakra-ui/react";

const PieChart = () => {
  const pieSeries = [22, 9, 16, 25, 28];

  const pieOptions = {
    labels: ["Item", "Item", "Item", "Item", "Item"],
    colors: ["#443FCE", "#9D59FF", "#6040C5", "#6F64DD", "#5942DC"],
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10,
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: 500,
      },
    },
    stroke: {
      show: false,
    },
  };

  return (
    <Box>
      <Chart type="pie" options={pieOptions} series={pieSeries} />
    </Box>
  );
};

export default PieChart;
