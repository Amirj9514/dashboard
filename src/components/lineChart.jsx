import React , { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart';

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});


    useEffect(() => {
        const data = {
            labels: ['Mon', 'The', 'Wed', 'Thu' , 'Fri' , 'Sat' , 'Sun'],
            datasets: [
                {
                    label: 'Sales',
                    data: [40, 25, 70, 20 , 40 ,30 ,60],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display:false
                    }
                },
                x: {
                 
                    grid: {
                        display:false
                    }
                },              
            }

            
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card body-bg p-3 border-round-lg border-1 border-clr h-full">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}

export default LineChart