import React from "react";
import "./dashboard.css";
import { data, data2, options,horizontal_data, horizontal_options } from "../../constants/chart.data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Total_Customers from "../../assets/L1.png";
import L2_1 from "../../assets/L2-1.png";
import L2_2 from "../../assets/L2-2.png";
import L3_1 from "../../assets/L3-1.png";
import L3_2 from "../../assets/L3-2.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        {/* first */}
        <div>
          <div>
            <img src={Total_Customers} alt="Row_1" />
          </div>
          <div>
            <div>
              <div>
                <div>
                  <p>Total Earnings</p>
                  <h3>₹1,32,367</h3>
                  <button>Past week</button>
                </div>
                <div>
                  <img src={L2_1} alt="" />
                </div>
              </div>
              <div>
                <img src={L3_1} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={L2_2} alt="" />
              </div>
              <div>
                <img src={L3_2} alt="" />
              </div>
            </div>
          </div>

          {/* first -third */}
          <div>
            <h3 >Consumer Analysis</h3>
            <div>
                <div>
                  <p>Activity</p>
                  <p>Stock</p>
                  <p>Volume</p>
                </div>
                <div>
                  <button>Past Weeks</button>
                  <button>Past Months</button>
                  <button>Past Yaers</button>
                  <button>All Time</button>
                </div>
            </div>
            <Bar options={horizontal_options} data={horizontal_data} />
          </div>
        </div>
        {/* second */}
        <div>
          <div>
            <div>
              <p>Highest Revenue Earned</p>
              <button>Top 5</button>
            </div>
            <div>
              <button>Past Week</button>
              <button>Past Month</button>
              <button>Past Year</button>
              <button>All Time</button>
            </div>
            <Bar options={options} data={data} />
          </div>
          <div>
            <div>
              <p>5 Greatest Transerction</p>
              <button>Top 5</button>
            </div>
            <div>
              <button>Past Week</button>
              <button>Past Month</button>
              <button>Past Year</button>
              <button>All Time</button>
            </div>
            <Bar options={options} data={data2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
