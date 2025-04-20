import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Security from "../../components/table/SecurityAttendence";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
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
          <Chart title="Electric Consumptions Last 6 Months" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Payment Transaction Approval</div>
          <Table />
        </div>
        <div className="listContainer">
          <div className="listTitle">Security Personel Attendence Today</div>
          <Security />
        </div>
      </div>
    </div>
  );
};

export default Home;
