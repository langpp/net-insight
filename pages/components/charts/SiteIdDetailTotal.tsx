import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface spark3 {
  options?: ApexOptions,
  width?: number;
  height?: string | number,
  series?: ApexOptions['series'],
  label?: XAxisAnnotations
  color?: string | string[] | (string & string[]) | undefined
  endingShape?: string
  enabled?: boolean;
}

export class SiteIdDetailTotal extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
          series: [32, 27, 25, 16],
          options: {

              // labels: ["My First Datset"],
              chart: {
                  events: {
                      mounted: (chart) => {
                        chart.windowResizeHandler();
                      }
                    },
                  type: 'donut'
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
                                  offsetY: -4
                              },
                              value: {
                                  show: true,
                                  fontSize: '18px',
                                  color: undefined,
                                  offsetY: 8,
                                  formatter: function (val) {
                                      return val + "%";
                                  }
                              },

                          }
                      }
                  }
              },
              colors: ["#FBA57E",  "#8AFFF9", "#FEE18E", "#FF67B1"],
          }

      };
  }

  render() {
      return (
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
      );
  }
}