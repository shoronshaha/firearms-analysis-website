import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../Hooks/useData';

const Dashboard = () => {
    const [data, setData] = useData();
    const data1 = [];
    const data2 = [];

    data.map(info => {
        data1.push({ "month": info.month, "investment": info.investment });
        data2.push({ "month": info.month, "revenue": info.revenue });
    })


    return (

        <div>
            <h1 className='text-5xl text-center text-green-500 font-bold mb-10'>DASHBOARD</h1>
            <div className='grid grid-col-1 md:grid-cols-2 gap-10 m-1 justify-items-center'>
                <div className='mb-10 '>
                    <h1 className='text-3xl text-center'>Line Charts</h1>
                    <LineChart width={350} height={400} data={data}>
                        <Line type="monotone" dataKey={'revenue'} stroke="blue"></Line>
                        <Line type="monotone" dataKey={'sell'} stroke="green"></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis dataKey={'investment'}></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>

                <div className='mb-10'>
                    <h1 className='text-3xl text-center'>PieChart</h1>
                    <PieChart width={350} height={400}>
                        <Tooltip />
                        <Pie data={data1} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data2} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
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
        </div>
    );
};

export default Dashboard;