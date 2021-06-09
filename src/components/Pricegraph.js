import React from "react";
import ReactDOM from "react-dom";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as d3 from "d3";

const Chart = (props) => {
    const {chart_id} = props;
    // const [activeIndex, setActiveIndex] = React.useState(null),
    const [data, setData] = React.useState([]);
    //
    React.useEffect(() => {
            let d2
            d3.csv("https://raw.githubusercontent.com/mtclinton/bitexplorer/main/public/prices.csv").then((d) => {
                d = d.reverse();
                // const parseDate = d3.timeParse("%m/%d/%Y");
                d.forEach((i) => {
                    // i.date = parseDate(i.date);
                    i.value = Number(i.value);
                    // setData([...data, d]);
                });
                setData(d);
                d2 = d;

                /**
                 * ---------------------------------------
                 * This demo was created using amCharts 4.
                 *
                 * For more information visit:
                 * https://www.amcharts.com/
                 *
                 * Documentation is available at:
                 * https://www.amcharts.com/docs/v4/
                 * ---------------------------------------
                 */

// Themes begin
                am4core.useTheme(am4themes_dark);
                am4core.useTheme(am4themes_animated);
// Themes end

                var chart = am4core.create(`chart${chart_id}`, am4charts.XYChart);
                chart.paddingRight = 20;

                // var visits = 10;
                // var previousValue;
                //
                // for (var i = 0; i < 100; i++) {
                //     visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                //
                //     if(i > 0){
                //         // add color to previous data item depending on whether current value is less or more than previous value
                //         if(previousValue <= visits){
                //             data[i - 1].color = chart.colors.getIndex(0);
                //         }
                //         else{
                //             data[i - 1].color = chart.colors.getIndex(5);
                //         }
                //     }
                //
                //     // data.push({ date: new Date(2018, 0, i + 1), value: visits });
                //     previousValue = visits;
                // }
                console.log(d2);
                chart.data = d2;
                // chart.data = [{
                //     "date": "03/15/2019",
                //     "value": 450
                // }, {
                //     "date": "03/16/2019",
                //     "value": 320
                // }, {
                //     "date": "03/17/2019",
                //     "value": 411
                // }, {
                //     "date": "03/18/2019",
                //     "value": 451
                // }, {
                //     "date": "03/19/2019",
                //     "value": 390
                // }];

                // chart.data = [{"date":"05/08/2021","value":58840.1},{"date":"05/09/2021","value":58238.3},{"date":"05/10/2021","value":55848.9},{"date":"05/11/2021","value":56695.7},{"date":"05/12/2021","value":49384.2},{"date":"05/13/2021","value":49704.6},{"date":"05/14/2021","value":49839.8},{"date":"05/15/2021","value":46708.8},{"date":"05/16/2021","value":46426.4},{"date":"05/17/2021","value":43541.3},{"date":"05/18/2021","value":42897.3},{"date":"05/19/2021","value":36720.5},{"date":"05/20/2021","value":40717.2},{"date":"05/21/2021","value":37297.4},{"date":"05/22/2021","value":37448.3},{"date":"05/23/2021","value":34679.7},{"date":"05/24/2021","value":38750.6},{"date":"05/25/2021","value":38378.3},{"date":"05/26/2021","value":39249.2},{"date":"05/27/2021","value":38417.3},{"date":"05/28/2021","value":35662.5},{"date":"05/29/2021","value":34584.6},{"date":"05/30/2021","value":35652.8},{"date":"05/31/2021","value":37298.6},{"date":"06/01/2021","value":36687.6},{"date":"06/02/2021","value":37555.8},{"date":"06/03/2021","value":39187.3},{"date":"06/04/2021","value":36851.3},{"date":"06/05/2021","value":35520},{"date":"06/06/2021","value":35815.4},{"date":"06/07/2021","value":33578},{"date":"06/08/2021","value":33594.6}]
                chart.dateFormatter.inputDateFormat = "MM/dd/yyyy";

                var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.axisFills.template.disabled = true;
                dateAxis.renderer.ticks.template.disabled = true;

                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.tooltip.disabled = true;
                valueAxis.renderer.minWidth = 35;
                valueAxis.renderer.axisFills.template.disabled = true;
                valueAxis.renderer.ticks.template.disabled = true;

                var series = chart.series.push(new am4charts.LineSeries());
                series.dataFields.dateX = "date";
                series.dataFields.valueY = "value";
                series.strokeWidth = 2;
                series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";

// set stroke property field
                series.propertyFields.stroke = "color";
                //
                // chart.cursor = new am4charts.XYCursor();
                //
                //
                // dateAxis.start = 0.7;
                // dateAxis.keepSelection = true;

            });


    }, []);



    return (
        <div className={"chartdiv"} id={`chart${chart_id}`}></div>
    );
};

export default Chart;