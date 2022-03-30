import React from "react";
import { Scatter } from "react-chartjs-2";

const ChartTwo = () => {
    return (
        <>
        <div className="Scatter">
            <Scatter data= {{
        labels: ['Scatter Dataset'],
        datasets: [{
            label: 'Number of Covid Cases',
            data: [{
                x: -7,
                y: 0
              }, {
                x: 1,
                y: 8
              }, {
                x: 16,
                y: 14
              }, {
                x: 2,
                y: 15
              }],
            backgroundColor: [
                'rgba(168, 42, 218)',
                
            ],
            borderColor: [
                'rgba(168, 42, 218)',
                
            ],
            
        }]
    }} height={400} width={600} option={{}}
            
            />
            
        </div>
        </>
    )
}

export default ChartTwo;