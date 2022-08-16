import React from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'time',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'RTTAvg',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}



const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        'pingtest',
        'calltest',
        "status",
        
        
    ],
    body: [
        {
            id: "40445_airtel",
            user: "UNTITLED",
            date: "17 Jun 2021",
            price: "Samsung SM-m325f",
            
            pingtest:'none',
            calltest:'none',
            status: "fixing",
            
        },
        {
            id: "40445_airtel",
            user: "UNTITLED",
            date: "17 Jun 2021",
            price: "Samsung SM-m325f",
            pingtest:'none',
            calltest:'none',
            status: "fixing",
        },
        {
            id: "40445_airtel",
            user: "UNTITLED",
            date: "17 Jun 2021",
            price: "Samsung SM-m325f",
            pingtest:'none',
            calltest:'none',
            status: "pending"
        },
        {
            id: "40445_airtel",
            user: "UNTITLED",
            date: "17 Jun 2021",
            price: "Samsung SM-m325f",
            pingtest:'none',
            calltest:'none',
            status: "fixing"
        },
        {
            id: "40445_airtel",
            user: "UNTITLED",
            date: "17 Jun 2021",
            price: "Samsung SM-m325f",
            pingtest:'none',
            calltest:'none',
            status: "completed"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "fixing": "danger",
    "completed": "success"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>{item.pingtest}</td>
        <td>{item.calltest}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            {/* <hr/>
            <h2 styel={{padding:'5px'}} className="page-header">Dashboard</h2> */}
            <div className="row">
                <div className="col-6" >
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
               
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Map View</h3>
                        </div>
                        <div className="card__body">
                        
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.39548297996!2d77.5588616!3d12.9013636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e56ed52afc0e12e!2sMegron%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1660306416319!5m2!1sen!2sin" width="1500" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
