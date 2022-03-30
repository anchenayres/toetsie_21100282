import React from "react";
import { Bubble } from "react-chartjs-2";

const ChartFive = () => {
    return (
        <>
        <div className="Bubble">
            <Bubble data= {{
        datasets: [{
            label: 'Covid Cases',
            data: [{
                x: 20,
                y: 30,
                r: 15
              }, {
                x: 40,
                y: 10,
                r: 10
            }, {
                x: 10,
                y: 12,
                r: 10
            }, {
                x: 16,
                y: 8,
                r: 20
            }, {
                x: 36,
                y: 25,
                r: 32
            }, {
                x: 24,
                y: 15,
                r: 1
                
              }],
              backgroundColor: ['rgb(255, 99, 132)','rgba(211, 99, 255, 0.2)', 'rgba(38, 134, 110, 0.2)', 'rgba(215, 226, 52, 0.2)', 'rgba(146, 21, 119, 0.2)', 'rgba(39, 221, 85, 0.2)' ]
        }]
    }} height={400} width={600} option={{}}
            
            />
            
        </div>
        </>
    )
}

export default ChartFive;