import React from "react";
import { Doughnut} from "react-chartjs-2";

const ChartOne = () => {
    return (
        <>
        <div className="Doughnut">
            <Doughnut data= {{
        labels: ['Hands', 'Feet', 'Legs'],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(215, 155, 85)',
              'rgb(168, 85, 96)',
              'rgb(250, 200, 160)'
            ],
            hoverOffset: 4
          }]
    }} height={400} width={600} option={{}}
            
            />
            
        </div>
        </>
    )
}

export default ChartOne;