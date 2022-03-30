import React from "react";
import { Radar } from "react-chartjs-2";

const ChartFour = () => {
    return (
        <>
   <div className="Radar">
            <Radar data= {{
        labels: ['Eyes', 'Nose', 'Toes', 'Feet', 'Hands', 'Legs'],
        datasets: [{
            label: 'Body Parts',
            data: [2, 20, 6, 4, 13, 16],
            backgroundColor: [
                'rgba(39, 221, 85,0.2)',
                'rgba(22, 162, 56)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 25)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(39, 221, 85,0.2)',
                'rgba(22, 162, 56, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }} height={400} width={600} option={{}}
            
            />
            
        </div>
        </>
    )
}

export default ChartFour

;