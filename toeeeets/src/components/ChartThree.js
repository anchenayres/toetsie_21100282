import React from "react";
import "chart.js/auto";
import {Bar} from "react-chartjs-2";

const ChartThree = () => {
    return (
        <div className="Bar">
            <Bar data= {{
        labels: ['Feet', 'Hands', 'Legs', 'Arms', 'Fingers', 'Elbows'],
        datasets: [{
            label: 'Body Parts',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(255, 159, 64)',
              'rgba(255, 205, 86)',
              'rgba(75, 192, 19)',
              'rgba(54, 162, 235)',
              'rgba(153, 102, 255)',
              'rgba(201, 203, 20)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            
        }]
    }} height={400} width={600} option={{}}
            
            />
            
        </div>
    )
}

export default ChartThree;