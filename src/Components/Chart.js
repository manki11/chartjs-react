import React,{Component} from "react";
import {Bar, Line , Pie} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state={
            chartData: {
                labels: ['Mumbai', 'Delhi', 'Banglore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata'],
                datasets: [{
                    label: 'Population',
                    data: [
                        12442373,
                        11034555,
                        8443675,
                        6993262,
                        5577940,
                        4646732,
                        4496694
                    ],
                    backgroundColor: [
                        '#C0392B',
                        '#9B59B6',
                        '#2980B9',
                        '#16A085',
                        '#F1C40F',
                        '#E67E22',
                        '#99A3A4'
                    ],
                }]
            },
            options:{
                title:{
                    display:true,
                    text:"Most populated Indian Cities",
                    fontSize: 25
                },
                legend:{
                    position:'right'
                }
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={this.state.options}
                />
                <Line
                    data={this.state.chartData}
                    options={this.state.options}
                />
                <Pie
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        )
    }
}

export default Chart;