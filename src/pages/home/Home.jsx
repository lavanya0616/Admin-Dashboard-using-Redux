import React from "react";
import "./home.css";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import Navbar from "../../Components/navbar/Navbar.jsx";
import Widget from "../../Components/widget/Widget.jsx";
import Featured from "../../Components/featured/Featured.jsx";
import Chart from "../../Components/chart/Chart.jsx";
import List from "../../Components/table/Table.jsx";


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;