import React from 'react';
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StatusCard from '../components/StatusCard/StatusCard';
import Table from '../components/Table/Table';
import Badge from '../components/Badge/Badge';

const statusCardItems = [
  { icon: "bx bx-shopping-bag", count: "1,995", title: "Total sales" },
  { icon: "bx bx-cart", count: "2,001", title: "Daily visits" },
  { icon: "bx bx-dollar-circle", count: "$2,632", title: "Total income" },
  { icon: "bx bx-receipt", count: "1,711", title: "Total orders" }
];
const orderStatus = { "shipping": "primary", "pending": "warning", "paid": "success", "refund": "danger" };
const { chartOptions, topCustomers, latestOrders } = loadData();

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;
const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const themeReducer = useSelector(state => state.ThemeReducer);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="page-header">Dashboard</h2>
        </div>
      </div>
      <div className="row">
        {/* card */}
        <div className="col-lg-5 col-md-12">
          <div className="row">
            {
              statusCardItems.map((item, index) =>
                <div key={index} className="col-6"><StatusCard icon={item.icon} title={item.title} count={item.count} /></div>
              )
            }
          </div>
        </div>
        {/* chart */}
        <div className="col-lg-7 col-md-12">
          <div className="card full-height">
            <Chart
              options={themeReducer === 'theme-mode-dark' ?
                {
                  ...chartOptions.options,
                  theme: { mode: 'dark' }
                } : chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        {/* top customers */}
        <div className="col-lg-5 col-md-12">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)} />
            </div>
            <div className="card__footer"><Link to="/">View all</Link></div>
          </div>
        </div>
        {/* last orders */}
        <div className="col-lg-7 col-md-12">
          <div className="card">
            <div className="card__header">
              <h3>last orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)} />
            </div>
            <div className="card__footer"><Link to="/">View all</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}


function loadData() {
  let _chartOptions = {
    series: [{
      name: 'Online Customers',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
      color: ['#6ab04c', '#2980b9'],
      chart: { background: 'transparent' },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      legend: { position: 'top' },
      grid: { show: false }
    }
  };
  let _topCustomers = {
    head: ['user', 'total orders', 'total spending'],
    body: [
      { username: "john doe", order: "490", price: "$15,870" },
      { username: "frank iva", order: "250", price: "$12,251" },
      { username: "anthony baker", order: "120", price: "$10,840" },
      { username: "frank iva", order: "110", price: "$9,251" },
      { username: "anthony baker", order: "80", price: "$8,840" }
    ]
  };

  let _latestOrders = {
    header: ["order id", "user", "total price", "date", "status"],
    body: [
      { id: "#OD1711", user: "john doe", date: "17 Jun 2021", price: "$900", status: "shipping" },
      { id: "#OD1712", user: "frank iva", date: "1 Jun 2021", price: "$400", status: "paid" },
      { id: "#OD1713", user: "anthony baker", date: "27 Jun 2021", price: "$200", status: "pending" },
      { id: "#OD1712", user: "frank iva", date: "1 Jun 2021", price: "$400", status: "paid" },
      { id: "#OD1713", user: "anthony baker", date: "27 Jun 2021", price: "$200", status: "refund" }
    ]
  };

  return { chartOptions: _chartOptions, topCustomers: _topCustomers, latestOrders: _latestOrders };
}

export default Dashboard;
