import React from 'react';
import './dashboard.css'
import DashboardService from "./DashboardService"
import axios from 'axios';
import { useEffect } from 'react';

const View = () => {

    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/tasks/new_task')
            .then((res) => {
                setData(res.data.result);
                console.log(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return <>
        <div className="dashboard-home-service">
            {
                data.length !== 0 && data.map((index) => {
                    return <div className="dashboard-cleaning-service">
                        <DashboardService 
                        jobType={index.jobType}
                        taskDescription={index.taskDescription}
                        budgetRate={index.budgetRate}
                        taskDuration={index.taskDuration.split('T')[0]}
                        taskAddress={index.taskAddress.split(',')[0]}
                        taskDeliveryAddress={index.taskDeliveryAddress}
                        estimatedTime={index.estimatedTime}
                        status={index.status}
                        taskId={index.taskId}
                        />
                    </div>
                }
                )
            }
        </div>
    </>
    
}
 
export default View;