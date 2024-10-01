import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SiteIdDetailTotal = () => {
  const [series, setSeries] = useState([32, 27, 25, 16]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        },
      },
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: ["#fff"],
      width: 0,
      dashArray: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '72%',
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: '20px',
              color: '#495057',
              offsetY: -4,
            },
            value: {
              show: true,
              fontSize: '18px',
              offsetY: 8,
              formatter: (val) => `${val}%`,
            },
          },
        },
      },
    },
    colors: ["#FBA57E", "#8AFFF9", "#FEE18E", "#FF67B1"],
  });

  return (
    <ReactApexChart options={options} series={series} type="donut" height={250} />
  );
};

export default SiteIdDetailTotal;

SiteIdDetailTotal.layout = "Contentlayout";