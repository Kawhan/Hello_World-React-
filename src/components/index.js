import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(238, 130, 238)',
            'rgb(0, 0, 255)'
        ],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80]
      }
    ]
};

function Index() {
    return (      
        <div>
            <Pie
                data={data}
                options={{
                    title: {
                            display: true, 
                            text: 'Projeto Hello World - Primeiro Grafico de Pizza',
                            fontSize: 25    
                        },
                    legend: {
                            display: true,
                            position: 'top',
                            labels: {fontColor: 'rbga(255,99,132,0.8)'}
                        }
                }}
            />

            <Bar
                data={data}
                options={{
                    title: {
                            display: true, 
                            text: 'Projeto Hello World - Primeiro Grafico de Baras',
                            fontSize: 25    
                        },
                    legend: {
                            display: true,
                            position: 'top',
                            labels: {fontColor: 'rbga(255,99,132,0.8)'}
                        }
                }}
            />

            <Doughnut
                data={data}
                options={{
                    title: {
                            display: true, 
                            text: 'Projeto Hello World - Primeiro Grafico de Rosquinha',
                            fontSize: 25    
                        },
                    legend: {
                            display: true,
                            position: 'top',
                            labels: {fontColor: 'rbga(255,99,132,0.8)'}
                        }
                }}
            
            
            
            
            
            />
            
        </div>

        
    );
};
export default Index;

