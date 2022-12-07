import React from 'react'
import './Dashboard.css'
import { PieChart } from 'recharts'
import { Pie } from 'recharts'
import { ResponsiveContainer, Cell } from 'recharts'

const index = () => {
    const colors = ['#2394ae', '#f5a41d', '#000000', '#bf161f'];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
    ];

    const tabs1 = [
        {
            name: "Open Jobs",
            count: "4"
        },
        {
            name: "Closed Jobs",
            count: "2"
        },
        {
            name: "All Jobs",
            count: "6"
        },

    ]
    const tabs2 = [
        {
            name: "Current Applications",
            count: "8"
        },
        {
            name: "New Hires",
            count: "1"
        },
        {
            name: "Rejected",
            count: "1"
        },

    ]


    const openjobs =
        [{ name: "Software Developer", date: "08-08-2022", app: "2 applications", view: "View" },
        { name: "QA Tester", date: "08-08-2022", app: "2 applications", view: "View" },
        { name: "UI/UX Designer", date: "08-08-2022", app: "2 applications", view: "View" },
        { name: "Graphic Designer", date: "08-08-2022", app: "2 applications", view: "View" },]

    const interviews =
        [{ name: "john Smith", time: "3:30 PM", status: "Completed", view: "View" },
        { name: "john Smith", time: "3:30 PM", status: "Completed", view: "View" },]
    return (
        <div className="dashboard_main">
            <div className="recruiting_dashboard_tabs">
                <div className="inner_dashboard_tabs">
                    {
                        tabs1.map((e) => {
                            return (
                                <>
                                    <div className="dashboard_tabs">
                                        <div className="dashboard_tabs_name">
                                            <h2>{e.name}</h2>
                                        </div>
                                        <div className="dashboard_tabs_count">
                                            <h1>{e.count}</h1>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
                <div className="inner_dashboard_tabs">
                    {
                        tabs2.map((e) => {
                            return (
                                <>
                                    <div className="dashboard_tabs">
                                        <div className="dashboard_tabs_name">
                                            <h2>{e.name}</h2>
                                        </div>
                                        <div className="dashboard_tabs_count">
                                            <h1>{e.count}</h1>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="recruiting_dashboard_charts">


                <div className="recruiting_inner_charts">
                    <div className="chat_header">
                        <h2>Application Sources</h2>
                    </div>

                    <div className="chat_section">
                        <ResponsiveContainer width="40%" >
                            <PieChart width={500} height={250} >
                                {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                                <Pie
                                    data={data02}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"

                                >
                                    {
                                        data02.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index]} />
                                        ))
                                    }
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="chart_list">
                            <ul>
                                <li>
                                    <div className="chart_color1"></div>
                                    <div className="Chart_name">
                                        <span>ZipRecruiter</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart_color2"></div>
                                    <div className="Chart_name">
                                        <span>Linkedln</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart_color3"></div>
                                    <div className="Chart_name">
                                        <span>Instagram</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart_color4"></div>
                                    <div className="Chart_name">
                                        <span>Other</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>





                <div className="recruiting_inner_charts">
                    <div className="chat_header">
                        <h2>Application Status</h2>
                    </div>

                    <div className="chat_section">
                        <ResponsiveContainer width="40%" >
                            <PieChart width={500} height={250}>
                                {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                                <Pie
                                    data={data02}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {
                                        data02.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index]} />
                                        ))
                                    }
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="chart_list">
                            <ul>
                                <li>
                                    <div className="chart_color1"></div>
                                    <div className="Chart_name">
                                        <span>Applied</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart_color2"></div>
                                    <div className="Chart_name">
                                        <span>Interviewed</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart_color3"></div>
                                    <div className="Chart_name">
                                        <span>Hired</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart_color4"></div>
                                    <div className="Chart_name">
                                        <span>Rejected</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="recruiting_dashboard_tables">
                <div className="inner_dashboard_tables">
                    <div className="dashboard_open_jobs">
                        <h2>Open Jobs</h2>
                    </div>
                    <div className="open_jobs_tables">
                        <table>
                            {
                                openjobs.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className='td1'>{e.name}</td>
                                                <td>{e.date}</td>
                                                <td>{e.app}</td>
                                                <td className='td4'>{e.view}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
                <div className="inner_dashboard_tables">
                    <div className="dashboard_open_jobs">
                        <h2>Todays' Interviews</h2>
                    </div>
                    <div className="open_jobs_tables">
                        <table>
                            {
                                interviews.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className='td1'>{e.name}</td>
                                                <td>{e.time}</td>
                                                <td>{e.status}</td>
                                                <td className='td4'>{e.view}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
