import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "id": 1,
            "month": "Mar",
            "investment": 100000,
            "sell": 2410,
            "revenue": 104010
        },
        {
            "id": 2,
            "month": "Apr",
            "investment": 200000,
            "sell": 4230,
            "revenue": 245000
        },
        {
            "id": 3,
            "month": "May",
            "investment": 500000,
            "sell": 72060,
            "revenue": 670100
        },
        {
            "id": 4,
            "month": "Jun",
            "investment": 500000,
            "sell": 529000,
            "revenue": 404050
        },
        {
            "id": 5,
            "month": "Jul",
            "investment": 600000,
            "sell": 60100,
            "revenue": 509000
        },
        {
            "id": 6,
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
        }
    ];
    const data2 = [
        {
            "id": 1,
            "month": "Mar",
            "investment": 1007000,
            "sell": 2410,
            "revenue": 104010
        },
        {
            "id": 2,
            "month": "Apr",
            "investment": 2000700,
            "sell": 4230,
            "revenue": 245000
        },
        {
            "id": 3,
            "month": "May",
            "investment": 5007000,
            "sell": 72060,
            "revenue": 670100
        },
        {
            "id": 4,
            "month": "Jun",
            "investment": 5700000,
            "sell": 529000,
            "revenue": 404050
        },
        {
            "id": 5,
            "month": "Jul",
            "investment": 8007000,
            "sell": 60100,
            "revenue": 509000
        },
        {
            "id": 6,
            "month": "Aug",
            "investment": 7007000,
            "sell": 6700,
            "revenue": 61000
        }

    ]


    return (
        <div className='grid grid-col-1 md:grid-cols-2 gap-10 m-1 justify-items-center'>
            <div className='mb-10 '>
                <h1 className='text-3xl text-center'>Line Charts</h1>
                <LineChart width={350} height={400} data={data}>
                    <Line dataKey={'revenue'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

            <div className='mb-10'>
                <h1 className='text-3xl text-center'>PieChart</h1>
                <PieChart width={350} height={400}>
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data2} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

            <div>
                <h1 className='text-3xl text-center'>Area Chart</h1>
                <AreaChart
                    width={350}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
            <div>
                <h1 className='text-3xl text-center'>Bar Chart</h1>
                <BarChart
                    width={350}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
                    <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="#ffc658" />
                </BarChart>
            </div>

        </div>
    );
};

export default Dashboard;